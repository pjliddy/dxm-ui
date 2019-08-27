import React from 'react';
import { connect } from 'react-redux'
import {
  deselectAsset,
  newAsset,
  previewJson,
  startRedirect,
  startUpload,
  updateSelectedAsset
} from '../../../actions';

import AssetCreateView from './AssetCreateView';

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
                            previewJson={this.props.previewJson}
                            onFormCancel={this.props.startRedirect}
                            onFormSubmit={this.props.startUpload}
                            onFormUpdate={this.props.updateSelectedAsset}
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
  newAsset,
  previewJson,
  startRedirect,
  startUpload,
  updateSelectedAsset
};

export default connect(mapStateToProps, mapDispatchToProps) (AssetCreate);
