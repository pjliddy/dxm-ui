import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContentList from './views/ContentList';
import ContentCreate from './views/ContentCreate';
import ContentEdit from './views/ContentEdit';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={ContentList} />
        <Route path="/content/edit/:id" exact component={ContentEdit} />
        <Route path="/content/new" exact component={ContentCreate} />
      </BrowserRouter>
    </div>
  )
}

export default App;
