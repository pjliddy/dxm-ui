import React from 'react';
import { Link } from 'react-router-dom';
import { contentIndex } from '../api/contentApi';

class ContentList extends React.Component {
  state = {
    items: []
  };

  getContentIndex = async () => {
    const response = await contentIndex();
    this.setState({ items: response.data });
  }

  renderList() {
    return this.state.items.map(item => {
      const linkPath = `/content/edit/${item.id}`;

      return(
        <tr key={item.id}>
          <td>
            <Link to={linkPath} className="item">
              {item.title}
            </Link>
          </td>
          <td>
            {item.contentType}
          </td>
          <td className="collapsing">
            {item.id}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <button className="ui basic button"><i className="edit outline icon"></i></button>
              <button className="ui basic button"><i className="trash alternate outline icon"></i></button>
            </div>
          </td>
        </tr>
      );
    });
  }

  componentDidMount() {
    this.getContentIndex();
  }

  render() {
    return (
      <div>
        <h1>Content List</h1>
        <table className="ui celled striped compact table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content Type</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ContentList;
