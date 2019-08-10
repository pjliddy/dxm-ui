import React from 'react';
import { connect } from 'react-redux'
import {
  fetchAssets,
  deleteAsset
} from '../actions';

import AssetListView from '../components/views/AssetList';

class AssetList extends React.Component {
  componentDidMount() {
    this.props.fetchAssets();
  }

  render() {
    return <AssetListView assets={this.props.assets}
                          isLoading={this.props.isLoading}
                          deleteAsset={this.props.deleteAsset} />;
  }
}

const mapStateToProps = state => {
  return {
    assets: state.assets,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = {
  fetchAssets,
  deleteAsset
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetList)
