import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newAsset, createAsset, deselectAsset, updateSelectedAsset } from '../../actions';

import Api from '../api/Api';
import axios from 'axios';
import { ASSET_REPO_BUCKET, ASSET_REPO_PATH, ASSET_RESOURCE }  from '../../config';

import AssetForm from '../AssetForm';

class AssetCreate extends React.Component {
  state = {
    redirect: false,
    isLoading: false,
    selectedFile: ''
  };

  componentDidMount() {
    this.props.newAsset();
  }

  componentWillUnmount() {
    this.props.deselectAsset();
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  createAsset = async (fileObj) => {
    this.setState({ isLoading: true });

    const fileData = {
      name: fileObj.name,
      size: fileObj.size,
      type: fileObj.type
    };

    // get presigned URL from assets Api
    const { uploadURL } = await this.getPresignedUrl(fileObj);
    const url = await this.uploadAsset(uploadURL, fileObj);

    this.props.updateSelectedAsset({ 'name': 'file', 'value': fileData });
    this.props.updateSelectedAsset({ 'name': 'url', 'value': url });

    // what if upload fails?
    // on success, create asset node in db
    await this.props.createAsset(this.props.asset);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  getPresignedUrl = async (file) => {
    const s3Params = {
      'Bucket': ASSET_REPO_BUCKET,
      'Key':  `${ASSET_REPO_PATH}/${file.name}`,
      'ACL': 'public-read',
      'ContentType': file.type
    };
    const urlParams = { getSignedUrl: true };
    const response = await Api.create(s3Params, ASSET_RESOURCE, urlParams);

    return response;
  }

  // make into shared component, along with getPresignedUrl
  uploadAsset = async (uploadUrl, file) => {
    try {
      // post file to presigned URL
      const config = {
        headers: {
          'ACL': 'public-read',
          'Content-Type': file.type
        },
        onUploadProgress: progressEvent => {
          const progress = Number.parseInt(progressEvent.loaded / file.size * 100, 10);
          console.log(`Progress: ${progress}%`);
        }
      }

      const response = await axios.put(uploadUrl, file, config);

      return response.config.url.split('?')[0];
    } catch (error) {
      return error;
    }
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/assets" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>New Asset</h1>

        {/* make loader component  */}
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>

        <AssetForm asset={this.props.asset}
                   isNew={true}
                   onFormUpdate={this.props.updateSelectedAsset}
                   onFormSubmit={this.createAsset}
                   onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { asset: state.selectedAsset };
}

const mapDispatchToProps = { newAsset, createAsset, deselectAsset, updateSelectedAsset };

export default connect(mapStateToProps, mapDispatchToProps) (AssetCreate);
