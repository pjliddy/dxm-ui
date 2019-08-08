import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAsset, updateAsset, deselectAsset, updateSelectedAsset } from '../../actions';

import { getPresignedUrl, uploadAsset /*, updateAssetFile */ } from '../api/S3';
import AssetForm from '../forms/AssetForm';
import IsLoading from '../IsLoading';

class AssetEdit extends React.Component {
  state = {
    redirect: false,
    isLoading: false
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

  updateAsset = async (fileObj) => {
    try {
      this.setState({ isLoading: true });

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

      // console.log(this.props.asset);

      // on success, create asset node in db
      await this.props.updateAsset(this.props.asset);

      this.setState({
        isLoading: false,
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
                   onFormSubmit={this.updateAsset}
                   onFormCancel={this.onFormCancel}/>
         <IsLoading isLoading={this.state.isLoading} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { asset: state.selectedAsset };
}

const mapDispatchToProps = { fetchAsset, updateAsset, deselectAsset, updateSelectedAsset };

export default connect(mapStateToProps, mapDispatchToProps) (AssetEdit);
