import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAssets, deleteAsset } from '../../actions';

import Button from '../buttons/Button';
import ShowJsonButton from '../buttons/ShowJsonButton';

class AssetList extends React.Component {
  componentDidMount() {
    this.props.fetchAssets();
  }

  renderList() {
    return this.props.assets.map(asset => {
      const linkPath = `/assets/${asset.id}/edit`;

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
            <ShowJsonButton node={asset} type="icon"/>
            <Button buttonType="icon"
                    iconType="trash alternate outline"
                    tooltipText="Delete Asset"
                    tooltipPosition="top center"
                    onClick={() => this.props.deleteAsset(asset.id)}>
              Delete Asset
            </Button>
          </div>
        </div>
      );
    });
  }

  render() {
    // const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <div className="ui two column grid">
          <div className="row">
            <div className="left floated column">
            <h1>Asset List</h1>
            </div>
            <div className="right floated right aligned column">
              <Button linkTo="/assets/new"
                      buttonType="primary"
                      iconType="plus">
                New Asset
              </Button>
            </div>
          </div>
        </div>

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

const mapDispatchToProps = { fetchAssets, deleteAsset }

export default connect(mapStateToProps, mapDispatchToProps) (AssetList);
