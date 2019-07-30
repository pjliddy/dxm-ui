import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import AssetForm from '../AssetForm';
import { ASSET_REPO_BUCKET, ASSET_REPO_PATH}  from '../../config';
import axios from 'axios';

/*
  S3 Object:
  {
      "Key": "assets/apollo.jpg",
      "LastModified": "2019-07-25T15:35:43.000Z",
      "ETag": "\"41e9525c71922900254ae99762bb4585\"",
      "Size": 462901,
      "StorageClass": "STANDARD"
  }
*/

class AssetEdit extends React.Component {
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

  showAsset = async (id) => {
    this.setState({ isLoading: true });
    const response = await Api.read(id, this.apiResource);
    this.setState({
      asset: response,
      isLoading: false
    });
  }

  /*
    Need to delete existing asset image if updated
  */
  
  updateAsset = async ({asset, file}) => {
    this.setState({ isLoading: true });
    // only if asset changes
    const { uploadURL } = await this.getPresignedUrl(asset, file);

    // update asset without mutating

    asset.url = await this.uploadAsset(uploadURL, file)

    await Api.update(this.state.asset, this.apiResource);

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

  componentDidMount() {
    this.showAsset(this.props.match.params.id);
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/assets" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>Edit Asset</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        <AssetForm asset={this.state.asset}
                   onFormSubmit={this.updateAsset}
                   onFormCancel={this.onFormCancel}/>
      </div>
    );
  }

}

export default AssetEdit;
