import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import AssetForm from '../AssetForm';
import axios from 'axios';
import { ASSET_REPO_BUCKET, ASSET_REPO_PATH}  from '../../config';

class AssetCreate extends React.Component {
  constructor() {
    super();

    this.apiResource = 'assets';
    this.state = {
      asset: {
        id: '',
        contentType: '',
        title: '',
        dateCreated: '',
        dateModified: '',
        url: ''
      },
      redirect: false,
      isLoading: false,
      selectedFile: ''
    };
  }

  createAsset = async ({asset, file}) => {
    this.setState({ isLoading: true });

    // get presignded URL from assets Api
    const { uploadURL } = await this.getPresignedUrl(asset, file);

    asset.url = await this.uploadAsset(uploadURL, file)

    this.setState({ asset: asset });

    // what if upload fails?

    // on success, create asset node in db
    await Api.create(asset, this.apiResource);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  getPresignedUrl = async (asset, file) => {
    const s3Params = {
      'Bucket': ASSET_REPO_BUCKET,
      'Key':  `${ASSET_REPO_PATH}/${file.name}`,
      'ACL': 'public-read',
      'ContentType': file.type,
      // 'ContentDisposition': 'inline'
    };

    const urlParams = { getSignedUrl: true };
    const response = await Api.create(s3Params, this.apiResource, urlParams);

    return response;
  }

  // make into shared component, along with getPresignedUrl
  uploadAsset = async (uploadUrl, file) => {
    try {
      // post file to presigned URL
      const config = {
        headers: {
          'ACL': 'public-read',
          'Content-Type': file.type,
          // 'Content-Disposition': 'inline'
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

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/assets" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>New Asset</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        <AssetForm asset={this.state.asset}
                   isNew={true}
                   onFormSubmit={this.createAsset}
                   onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
}

export default AssetCreate;
