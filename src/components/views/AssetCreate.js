import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newAsset, createAsset, deselectAsset, updateSelectedAsset } from '../../actions';

import { getPresignedUrl, uploadAsset /*, updateAssetFile */ } from '../api/S3';
import AssetForm from '../forms/AssetForm';
import IsLoading from '../IsLoading';

class AssetCreate extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.newAsset();
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  onFormCancel = () => {
    // replace with go to page (#pages) action
    this.setState({ redirect: true });
  }

  // redefine as action / reducer
  onFormSubmit = async (fileObj) => {
    try {
      // get presigned URL from assets Api
      const { uploadURL } = await getPresignedUrl(fileObj);
      // upload file to S3
      const url = await uploadAsset(uploadURL, fileObj);

      // what if upload fails?

      // dispatch(updateAssetFile(url, fileObj));

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
      await this.props.createAsset(this.props.asset);

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
        <h1>New Asset</h1>
        <AssetForm asset={this.props.asset}
                   isNew={true}
                   onFormUpdate={this.props.updateSelectedAsset}
                   onFormSubmit={this.onFormSubmit}
                   onFormCancel={this.onFormCancel}/>
         <IsLoading isLoading={this.props.isLoading} />
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

const mapDispatchToProps = { newAsset, createAsset, deselectAsset, updateSelectedAsset };

export default connect(mapStateToProps, mapDispatchToProps) (AssetCreate);
