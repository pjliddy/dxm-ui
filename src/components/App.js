import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import ContentList from './views/ContentList';
import ContentCreate from './views/ContentCreate';
import ContentEdit from './views/ContentEdit';
import AssetList from './views/AssetList';
import AssetCreate from './views/AssetCreate';
import AssetEdit from './views/AssetEdit';

const App = () => {
  const containerStyle = { margin: '10px 0 20px' };

  // contents/:id/edit
  
  return (
    <div className="ui container" style={containerStyle}>
      <HashRouter basename='/'>
        <Header />
        <Route path="/" exact component={ContentList} />
        <Route path="/contents/edit/:id" exact component={ContentEdit} />
        <Route path="/contents/new" exact component={ContentCreate} />
        <Route path="/assets" exact component={AssetList} />
        <Route path="/assets/edit/:id" exact component={AssetEdit} />
        <Route path="/assets/new" exact component={AssetCreate} />
      </HashRouter>
    </div>
  )
}

export default App;
