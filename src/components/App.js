import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import ContentList from './views/ContentList';
import ContentCreate from './views/ContentCreate';
import ContentEdit from './views/ContentEdit';
import AssetList from './views/AssetList';

const App = () => {
  return (
    <div className="ui container">
      <HashRouter basename='/'>
        <Header />
        <Route path="/" exact component={ContentList} />
        <Route path="/content/edit/:id" exact component={ContentEdit} />
        <Route path="/content/new" exact component={ContentCreate} />
        <Route path="/assets" exact component={AssetList} />
      </HashRouter>
    </div>
  )
}

export default App;
