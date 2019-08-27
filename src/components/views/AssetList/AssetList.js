import React from 'react';
import { connect } from 'react-redux'
import {
  deleteAsset,
  listAssets,
  previewJson
} from '../../../actions';

import AssetListView from './AssetListView';

class AssetList extends React.Component {
  componentDidMount() {
    this.props.listAssets();
  }

  render() {
    return <AssetListView assets={this.props.assets}
                          deleteAsset={this.props.deleteAsset}
                          isLoading={this.props.isLoading}
                          previewJson={this.props.previewJson} />;
  }
}

const mapStateToProps = state => {
  return {
    assets: state.assets,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = {
  deleteAsset,
  listAssets,
  previewJson
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetList)
