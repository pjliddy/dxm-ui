import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAsset, updateAsset } from '../../actions';

import axios from 'axios';

import Api from '../api/Api';
import AssetForm from '../AssetForm';

import { ASSET_RESOURCE, ASSET_REPO_BUCKET, ASSET_REPO_PATH}  from '../../config';

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
  state = {
    asset: { },
    redirect: false,
    isLoading: false,
    selectedFile: ''
  };

  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.id)
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  /*
    Need to delete existing asset image if updated
  */

  updateAsset = async ({asset, file}) => {
    this.setState({ isLoading: true });

    // only if asset changes
    const { uploadURL } = await this.getPresignedUrl(asset, file);

    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type
    };

    // const { asset } = { ...this.state };
    // const currentState = asset;
    asset.file = fileData;
    asset.url = await this.uploadAsset(uploadURL, file)

    this.setState({
      asset: asset
    })

    await Api.update(this.state.asset, ASSET_RESOURCE);

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
        <h1>Edit Asset</h1>

        {/* make loader component  */}
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>

        <AssetForm asset={this.props.asset}
                   onFormSubmit={this.updateAsset}
                   onFormCancel={this.onFormCancel}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { asset: state.selectedAsset };
}

export default connect(mapStateToProps, { fetchAsset, updateAsset }) (AssetEdit);

// export default AssetEdit;
