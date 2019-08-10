import React from 'react';
import { connect } from 'react-redux'
import {
  createAsset,
  deselectAsset,
  newAsset,
  startRedirect,
  startUpload,
  updateSelectedAsset
} from '../actions';

import AssetCreateView from '../components/views/AssetCreate';

class AssetCreate extends React.Component {
  componentDidMount() {
    this.props.newAsset();
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  render() {
    return <AssetCreateView asset={this.props.asset}
                            isLoading={this.props.isLoading}
                            startRedirect={this.props.startRedirect}
                            startUpload={this.props.startUpload}
                            updateSelectedAsset={this.props.updateSelectedAsset}
                            upload={this.props.upload} />;
  }
}

const mapStateToProps = state => {
  return {
    asset: state.selectedAsset,
    isLoading: state.metadata.isLoading,
    redirect: state.metadata.redirect,
    upload: state.upload
  };
}

const mapDispatchToProps = {
  createAsset,
  deselectAsset,
  newAsset,
  startRedirect,
  startUpload,
  updateSelectedAsset
};

export default connect(mapStateToProps, mapDispatchToProps) (AssetCreate);
