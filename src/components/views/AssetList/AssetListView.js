import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import Button from '../../forms/Button';
import LoadingIndicator from '../../LoadingIndicator';

import { ASSET_RESOURCE, RECEIVING_DATA_MESSAGE } from '../../../config/constants';

const AssetListView = props => {
  const {
    assets,
    deleteAsset,
    isLoading,
    previewJson
  } = props;

  const renderPageHeader = () => {
    return (
      <div className="ui two column grid">
        <div className="row">
          <div className="left floated column">
          <h1>Asset List</h1>
          </div>
          <div className="right floated right aligned column">
            <Button linkTo="/assets/new"
                    buttonType="primary"
                    iconType="plus"
                    tooltipText="New Asset"
                    tooltipPosition="left center">
              New Asset
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const renderList = assets => {
    return assets.map(asset => {
      const linkPath = `/${ASSET_RESOURCE}/${asset.id}/edit`;

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
              <p><strong>ID: </strong>{asset.id}<br />
              <strong>Date Modified: </strong>{asset.dateModified}<br />
              <strong>File Size: </strong>{(asset.file.size / 1024).toFixed(0)} kB<br />
              <strong>File Type: </strong>{asset.file.type}</p>
            </div>
          </div>
          <div className="ui icon buttons right floated content">
            <Button buttonType="icon"
                    iconType="code"
                    tooltipText="Show JSON"
                    tooltipPosition="top center"
                    onClick={() => previewJson(asset)}>
              Show JSON
            </Button>
            <Button buttonType="icon"
                    iconType="trash alternate outline"
                    onClick={() => deleteAsset(asset.id)}
                    tooltipPosition="top center"
                    tooltipText="Delete Asset">
              Delete Asset
            </Button>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      {renderPageHeader()}
      <div className="ui divided relaxed list">
        {renderList(assets)}
      </div>

      <LoadingIndicator isLoading={isLoading}
                        message={RECEIVING_DATA_MESSAGE} />
    </div>
  )
};

export default memo(AssetListView);
