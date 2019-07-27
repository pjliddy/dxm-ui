import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../api/Api';

class AssetList extends React.Component {
  constructor() {
    super();

    this.apiResource = 'assets';
    this.state = {
      assets: [],
      isLoading: false
    };
  }

  listAssets = async () => {
    this.setState({ isLoading: true });
    const response = await Api.index(this.apiResource);
    this.setState({
      isLoading: false,
      assets: response
    });
  }

  deleteAsset = async (id) => {
    this.setState({ isLoading: true });
    await Api.destroy(id, this.apiResource);
    this.listAssets();
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.listAssets();
  }

  renderList() {
    /*
      S3 Object:
      {
          "Key": "assets/apollo.jpg",
          "LastModified": "2019-07-25T15:35:43.000Z",
          "ETag": "\"41e9525c71922900254ae99762bb4585\"",
          "Size": 462901,
          "StorageClass": "STANDARD"
      }
    */
    return this.state.assets.map(asset => {
      const linkPath = `/assets/edit/${asset.id}`;

      return (
        <tr key={asset.id}>
          <td>
            <Link to={linkPath} className="asset">
              {asset.title}
            </Link>
          </td>
          <td>
            {asset.contentType}
          </td>
          <td className="collapsing">
            {asset.id}
          </td>
          <td className="collapsing">
            {asset.dateModified}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <button className="ui basic button"
                      data-tooltip="Delete Asset"
                      data-position="top right"
                      onClick={() => this.deleteAsset(asset.id)}>
                <i className="trash alternate outline icon"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <Link to="/assets/new" className="ui right floated primary button">
          <i className="plus sqaure icon"></i>
          New Asset
        </Link>
        <h1>Asset List</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        {/*
          <div className="ui divided relaxed list">
            {this.renderList()}
          </div>
        */}
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
    )
  }
}

export default AssetList;
