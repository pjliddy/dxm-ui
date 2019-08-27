import React from 'react';
import { connect } from 'react-redux';
import {
  deselectAsset,
  getAsset,
  previewJson,
  startRedirect,
  startUpload,
  updateSelectedAsset
} from '../../../actions';

import AssetEditView from './AssetEditView';

class AssetEdit extends React.Component {
  componentDidMount() {
    this.props.getAsset(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  render() {
    return <AssetEditView asset={this.props.asset}
                          isLoading={this.props.isLoading}
                          previewJson={this.props.previewJson}
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
    upload: state.upload
  };
}

const mapDispatchToProps = {
  deselectAsset,
  getAsset,
  previewJson,
  startRedirect,
  startUpload,
  updateSelectedAsset
 };

export default connect(mapStateToProps, mapDispatchToProps) (AssetEdit);
