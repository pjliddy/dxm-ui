import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../api/Api';

// add to app config JS object
const SITE_REPO_URL = 'https://dxm-site-repo.s3.amazonaws.com';
const CONTENT_LAKE_URL = 'https://dxm-content-lake.s3.amazonaws.com';

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
    await Api.destroy(id, this.apiResource);
    this.listContent();
    this.setState({ isLoading: false });
  }

  onPreview = (node) => {
    window.open(`${SITE_REPO_URL}/${node.contentType}/${node.id}.html`);
  }

  onShowLake = (node) => {
    window.open(`${CONTENT_LAKE_URL}/${node.contentType}/${node.id}.json`);
  }

  renderList() {
    return this.state.nodes.filter(node => node.contentType !== 'asset').map(node => {
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
                      data-tooltip="Show JSON"
                      data-position="top right"
                      onClick={() => this.onShowLake(node)}>
                <i className="code icon"></i>
              </button>
              <button className="ui basic button"
                      data-tooltip="Preview in Browser"
                      data-position="top right"
                      onClick={() => this.onPreview(node)}>
                <i className="desktop icon"></i>
              </button>
              <button className="ui basic button"
                      data-tooltip="Delete Content"
                      data-position="top right"
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
          <i className="plus sqaure icon"></i>
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
