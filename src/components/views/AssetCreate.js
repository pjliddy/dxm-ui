import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newAsset, createAsset, deselectAsset, updateSelectedAsset } from '../../actions';

import { getPresignedUrl, uploadAsset } from '../api/S3';
import AssetForm from '../AssetForm';

class AssetCreate extends React.Component {
  state = {
    redirect: false,
    isLoading: false
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
    try {
      this.setState({ isLoading: true });

      // get presigned URL from assets Api
      const { uploadURL } = await getPresignedUrl(fileObj);
      // upload file to S3
      const url = await uploadAsset(uploadURL, fileObj);

      // what if upload fails?

      // MOVE TO LIB FILE

      // update state
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
        isLoading: false,
        redirect: true
      });
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
