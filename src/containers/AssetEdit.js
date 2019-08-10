import React from 'react';
import { connect } from 'react-redux';
import {
  fetchAsset,
  deselectAsset,
  startUpload,
  updateSelectedAsset,
  startRedirect
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
  fetchAsset,
  deselectAsset,
  startUpload,
  updateSelectedAsset,
  startRedirect
 };

export default connect(mapStateToProps, mapDispatchToProps) (AssetEdit);
