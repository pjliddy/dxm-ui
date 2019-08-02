import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../api/Api';
import { ASSET_RESOURCE, CONTENT_LAKE_URL }  from '../../config';

class AssetList extends React.Component {
  constructor() {
    super();

    this.apiResource = ASSET_RESOURCE;
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

  onShowJson = (node) => {
    window.open(`${CONTENT_LAKE_URL}/${node.dataType}/${node.id}.json`);
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
    return this.state.assets.filter(asset => asset.dataType === 'asset').map(asset => {
      const linkPath = `/assets/edit/${asset.id}`;

      return (
        <div className="item"
             key={asset.id}>
          <img className="ui small image"
               src={asset.url}
               alt="alt text placeholder"></img>
          <div className="content">
            <Link to={linkPath} className="header">
              {asset.title}
            </Link>
            <div className="description">
              <p><strong>Date Modified: </strong>{asset.dateModified}<br />
              <strong>File Size: </strong>{(asset.file.size / 1024).toFixed(0)} kB<br />
              <strong>File Type: </strong>{asset.file.type}</p>
            </div>
          </div>
          <div className="ui icon buttons right floated content">
            <button className="ui basic button"
                    data-tooltip="Show JSON"
                    data-position="top right"
                    onClick={() => this.onShowJson(asset)}>
              <i className="code icon"></i>
            </button>
            <button className="ui basic button"
                    data-tooltip="Delete Asset"
                    data-position="top right"
                    onClick={() => this.deleteAsset(asset.id)}>
              <i className="trash alternate outline icon"></i>
            </button>
          </div>
        </div>
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

        <div className="ui divided relaxed list">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default AssetList;
