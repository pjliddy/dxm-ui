import React from 'react';
import { connect } from 'react-redux';
import {
  deselectAsset,
  fetchAsset,
  startRedirect,
  startUpload,
  updateSelectedAsset
 } from '../actions';

import AssetEditView from '../components/views/AssetEdit';

class AssetEdit extends React.Component {
  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  render() {
    return <AssetEditView asset={this.props.asset}
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
  deselectAsset,
  fetchAsset,
  startRedirect,
  startUpload,
  updateSelectedAsset
 };

export default connect(mapStateToProps, mapDispatchToProps) (AssetEdit);
