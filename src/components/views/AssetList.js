import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import Button from '../buttons/Button';
import LoadingIndicator from '../LoadingIndicator';
import ShowJsonButton from '../buttons/ShowJsonButton';

import { ASSET_RESOURCE, RECEIVING_DATA_MESSAGE } from '../../config';

const AssetList = props => {
  return (
    <div>
      {renderPageHeader()}
      <div className="ui divided relaxed list">
        {renderList(props)}
      </div>

      <LoadingIndicator isLoading={props.isLoading}
                        message={RECEIVING_DATA_MESSAGE} />
    </div>
  )
};

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

const renderList = props => {
  return props.assets.map(asset => {
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
            <p><strong>Date Modified: </strong>{asset.dateModified}<br />
            <strong>File Size: </strong>{(asset.file.size / 1024).toFixed(0)} kB<br />
            <strong>File Type: </strong>{asset.file.type}</p>
          </div>
        </div>
        <div className="ui icon buttons right floated content">
          <ShowJsonButton node={asset} type="icon"/>
          <Button buttonType="icon"
                  iconType="trash alternate outline"
                  onClick={() => props.deleteAsset(asset.id)}
                  tooltipPosition="top center"
                  tooltipText="Delete Asset">
            Delete Asset
          </Button>
        </div>
      </div>
    );
  });
}
export default memo(AssetList);
