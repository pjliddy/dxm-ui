import React from 'react';
import { connect } from 'react-redux'
import {
  newAsset,
  createAsset,
  deselectAsset,
  updateSelectedAsset,
  startRedirect,
  startUpload
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
                            upload={this.props.upload}
                            isLoading={this.props.isLoading}
                            startUpload={this.props.startUpload}
                            updateSelectedAsset={this.props.updateSelectedAsset}
                            startRedirect={this.props.startRedirect} />;
  }
}

const mapStateToProps = state => {
  return {
    asset: state.selectedAsset,
    upload: state.upload,
    isLoading: state.metadata.isLoading,
    redirect: state.metadata.redirect
  };
}

const mapDispatchToProps = {
  newAsset,
  createAsset,
  deselectAsset,
  updateSelectedAsset,
  startRedirect,
  startUpload
};

export default connect(mapStateToProps, mapDispatchToProps) (AssetCreate);
