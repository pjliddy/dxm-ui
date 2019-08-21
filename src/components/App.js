import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import ContentList from './views/ContentList/ContentList';
import ContentCreate from './views/ContentCreate/ContentCreate';
import ContentEdit from './views/ContentEdit/ContentEdit';
import AssetList from './views/AssetList/AssetList';
import AssetCreate from './views/AssetCreate/AssetCreate';
import AssetEdit from './views/AssetEdit/AssetEdit';

const App = () => {
  const containerStyle = { margin: '10px 0 20px' };

  return (
    <div className="ui container" style={containerStyle}>
      <HashRouter basename='/'>
        <Header />
        <Route path="/" exact component={ContentList} />
        <Route path="/contents/:id/edit" exact component={ContentEdit} />
        <Route path="/contents/new" exact component={ContentCreate} />
        <Route path="/assets" exact component={AssetList} />
        <Route path="/assets/:id/edit" exact component={AssetEdit} />
        <Route path="/assets/new" exact component={AssetCreate} />
      </HashRouter>
    </div>
  )
}

export default App;
