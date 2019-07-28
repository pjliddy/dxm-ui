import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import AssetForm from '../AssetForm';

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

  updateAsset = async () => {
    this.setState({ isLoading: true });
    await Api.update(this.state.asset, this.apiResource);

    this.setState({
      isLoading: false,
      redirect: true
    });
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
