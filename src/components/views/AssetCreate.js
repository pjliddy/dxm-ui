import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import AssetForm from '../AssetForm';

const ASSET_REPO_BUCKET = 'dxm-file-repo';
const ASSET_REPO_PATH = 'assets';

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
        dateModified: ''
      },
      redirect: false,
      isLoading: false,
      selectedFile: ''
    };
  }

  createAsset = async ({asset, file}) => {

    console.log(`asset: ${JSON.stringify(asset)}`);
    console.log(`asset: ${JSON.stringify(file)}`);

    this.setState({ isLoading: true });

    // get presignded URL from assets Api
    const response = await this.getPresignedUrl(asset, file);


    // post file to presigned URL
    console.log(`presignedUrl: ${JSON.stringify(response.uploadURL)}`);


    // on success
    // create asset node in db

    // await Api.create(asset, this.apiResource);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  getPresignedUrl = async (asset, file) => {
    const s3Params = {
      Bucket: ASSET_REPO_BUCKET,
      Key:  `${ASSET_REPO_PATH}/${file.name}`,
      ContentType: file.type,
      ACL: 'public-read',
    };

    const urlParams = {
      getSignedUrl: true
    };

    const response = await Api.create(s3Params, this.apiResource, urlParams);

    console.log(JSON.stringify(response));

    return response;
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
