import React from 'react';
import { Link } from 'react-router-dom';
import { contentIndex } from '../api/contentApi';
import { contentDelete } from '../api/contentApi';

class ContentList extends React.Component {
  state = {
    items: [],
    isLoading: false
  };

  getContentIndex = async () => {
    this.setState({ isLoading: true });
    const response = await contentIndex();
    this.setState({
      isLoading: false,
      items: response
    });
  }

  deleteContent = async (id) => {
    this.setState({ isLoading: true });
    await contentDelete(id);
    this.getContentIndex();
    this.setState({ isLoading: false });
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
            {item.dateModified}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <button className="ui basic button"
                      onClick={() => this.deleteContent(item.id)}>
                <i className="trash alternate outline icon"></i>
              </button>
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
    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>Content List</h1>
        <div className="ui segment">
            <div className="ui segment">
              <div className={loaderStyles}>
                <div className="ui text loader">Working...</div>
              </div>
              <table className="ui celled striped compact table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content Type</th>
                    <th>ID</th>
                    <th>Date Modified</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderList()}
                </tbody>
              </table>
            </div>
        </div>


      </div>
    );
  }
};

export default ContentList;
