import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAsset, updateAsset, deselectAsset, updateSelectedAsset } from '../../actions';

import { getPresignedUrl, uploadAsset /*, updateAssetFile */ } from '../api/S3';
import AssetForm from '../forms/AssetForm';
import LoadingIndicator from '../LoadingIndicator';

import { SENDING_DATA_MESSAGE } from '../../config';

class AssetEdit extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  /*
    Need to delete existing asset image if updated
  */

  onFormSubmit = async (fileObj) => {
    try {
      // get presigned URL from assets Api
      const { uploadURL } = await getPresignedUrl(fileObj);
      const url = await uploadAsset(uploadURL, fileObj);

      // what if upload fails?

      // updateAssetFile(url, fileObj);

      // MOVE TO LIB FILE
      const fileData = {
        name: fileObj.name,
        size: fileObj.size,
        type: fileObj.type
      };

      this.props.updateSelectedAsset({ 'name': 'file', 'value': fileData });
      this.props.updateSelectedAsset({ 'name': 'url', 'value': url });
      // END MOVE TO LIB FILE


      // on success, create asset node in db
      await this.props.updateAsset(this.props.asset);

      this.setState({
        redirect: true
      });
    } catch (error) {
      return error;
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/assets" />; }

    return (
      <div>
        <h1>Edit Asset</h1>
        <AssetForm asset={this.props.asset}
                   onFormUpdate={this.props.updateSelectedAsset}
                   onFormSubmit={this.onFormSubmit}
                   onFormCancel={this.onFormCancel}/>
        <LoadingIndicator isLoading={this.props.isLoading}
                          message={SENDING_DATA_MESSAGE}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    asset: state.selectedAsset,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = { fetchAsset, updateAsset, deselectAsset, updateSelectedAsset };

export default connect(mapStateToProps, mapDispatchToProps) (AssetEdit);
