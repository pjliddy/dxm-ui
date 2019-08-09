import React from 'react';
import { connect } from 'react-redux';
import { newAsset, createAsset, deselectAsset, updateSelectedAsset, startRedirect, startUpload } from '../../actions';

import AssetForm from '../forms/AssetForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

class AssetCreate extends React.Component {
  componentDidMount() {
    this.props.newAsset();
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  render() {
    return (
      <div>
        <Redirector path="/assets" />
        <h1>New Asset</h1>
        <AssetForm asset={this.props.asset}
                   isNew={true}
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

const mapDispatchToProps = { newAsset, createAsset, deselectAsset, updateSelectedAsset, startRedirect, startUpload };

export default connect(mapStateToProps, mapDispatchToProps) (AssetCreate);
