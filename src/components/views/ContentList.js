import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../api/Api';

class ContentList extends React.Component {
  constructor() {
    super();

    this.apiResource = 'nodes';
    this.state = {
      nodes: [],
      isLoading: false
    };
  }

  listContent = async () => {
    this.setState({ isLoading: true });
    const response = await Api.index(this.apiResource);
    this.setState({
      isLoading: false,
      nodes: response
    });
  }

  deleteContent = async (id) => {
    this.setState({ isLoading: true });
    await Api.destroy(this.apiResource, id);
    this.listContent();
    this.setState({ isLoading: false });
  }

  renderList() {
    return this.state.nodes.map(node => {
      const linkPath = `/content/edit/${node.id}`;

      return(
        <tr key={node.id}>
          <td>
            <Link to={linkPath} className="node">
              {node.title}
            </Link>
          </td>
          <td>
            {node.contentType}
          </td>
          <td className="collapsing">
            {node.id}
          </td>
          <td className="collapsing">
            {node.dateModified}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <button className="ui basic button"
                      onClick={() => this.deleteContent(node.id)}>
                <i className="trash alternate outline icon"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  componentDidMount() {
    this.listContent();
  }

  render() {
    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <Link to="/content/new" className="ui right floated primary button">
          New Content
        </Link>
        <h1>Content List</h1>
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
    );
  }
};

export default ContentList;
