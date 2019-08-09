import React from 'react';
import { connect } from 'react-redux';
import { fetchAsset, updateAsset, deselectAsset, updateSelectedAsset, startRedirect, startUpload } from '../../actions';

import AssetForm from '../forms/AssetForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

class AssetEdit extends React.Component {
  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  render() {
    return (
      <div>
        <Redirector path="/assets" />
        <h1>Edit Asset</h1>
        <AssetForm asset={this.props.asset}
                   onFormUpdate={this.props.updateSelectedAsset}
                   onFormSubmit={this.props.startUpload}
                   onFormCancel={this.props.startRedirect}/>
        <LoadingIndicator isLoading={this.props.isLoading}
                          message={SENDING_DATA_MESSAGE}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    asset: state.selectedAsset,
    isLoading: state.metadata.isLoading,
    redirect: state.metadata.redirect
  };
}

const mapDispatchToProps = { fetchAsset, updateAsset, deselectAsset, updateSelectedAsset, startRedirect , startUpload};

export default connect(mapStateToProps, mapDispatchToProps) (AssetEdit);
