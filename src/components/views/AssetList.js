import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAssets } from '../../actions';

import ButtonDelete from '../ButtonDelete';
import ShowJson from '../ShowJson';

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

class AssetList extends React.Component {
  componentDidMount() {
    this.props.fetchAssets();
  }

  renderList() {
    return this.props.assets.map(asset => {
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
            <ShowJson node={asset} />
            <ButtonDelete node={asset} />
          </div>
        </div>
      );
    });
  }

  render() {
    // const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <Link to="/assets/new" className="ui right floated primary button">
          <i className="plus sqaure icon"></i>
          New Asset
        </Link>
        <h1>Asset List</h1>
        {/*
          <div className={loaderStyles}>
            <div className="ui text loader">Working...</div>
          </div>
        */}
        <div className="ui divided relaxed list">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { assets: state.assets };
}

export default connect(mapStateToProps, { fetchAssets }) (AssetList);
