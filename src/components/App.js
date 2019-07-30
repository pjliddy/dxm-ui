import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import ContentList from './views/ContentList';
import ContentCreate from './views/ContentCreate';
import ContentEdit from './views/ContentEdit';
import AssetList from './views/AssetList';
import AssetEdit from './views/AssetEdit';
import AssetCreate from './views/AssetCreate';

const App = () => {
  const containerStyle = { margin: '10px 0 20px' };
  
  return (
    <div className="ui container" style={containerStyle}>
      <HashRouter basename='/'>
        <Header />
        <Route path="/" exact component={ContentList} />
        <Route path="/content/edit/:id" exact component={ContentEdit} />
        <Route path="/content/new" exact component={ContentCreate} />
        <Route path="/assets" exact component={AssetList} />
        <Route path="/assets/edit/:id" exact component={AssetEdit} />
        <Route path="/assets/new" exact component={AssetCreate} />
      </HashRouter>
    </div>
  )
}

export default App;
