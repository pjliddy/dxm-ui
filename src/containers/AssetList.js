import React from 'react';
import { connect } from 'react-redux'
import {
  deleteAsset,
  fetchAssets,
} from '../actions';

import AssetListView from '../components/views/AssetList';

class AssetList extends React.Component {
  componentDidMount() {
    this.props.fetchAssets();
  }

  render() {
    return <AssetListView assets={this.props.assets}
                          deleteAsset={this.props.deleteAsset}
                          isLoading={this.props.isLoading} />;
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
  fetchAssets
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetList)
