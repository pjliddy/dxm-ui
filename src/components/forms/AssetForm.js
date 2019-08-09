import React from 'react';
import { connect } from 'react-redux';
import { selectUploadFile, deselectUploadFile } from '../../actions';

import Button from '../buttons/Button';
import Field from './Field';
import FilePicker from './FilePicker';
import ShowJsonButton from '../buttons/ShowJsonButton';

class AssetForm extends React.Component {
  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.onFormUpdate({ name, value });
  }

  render() {
    const asset = this.props.asset;
    const isNew = this.props.isNew

    return(
      <div className="ui form">
        <p>All fields must have values. Validation to be added.</p>

        <Field type="text"
               name="id"
               label="ID"
               placeholder="id"
               value={asset.id}
               hidden={isNew}
               disabled={true}
               readOnly={true}></Field>

        <Field type="select"
               name="dataType"
               label="Data Type"
               placeholder="data type"
               value={asset.dataType}
               onChange={this.handleChange}>
          <option value="">Select Data Type...</option>
          <option value="asset">Asset</option>
        </Field>

        <Field type="text"
               name="title"
               label="Title"
               placeholder="title"
               value={asset.title}
               required={true}
               onChange={this.handleChange} />

        <FilePicker asset={asset}
                    preview={!isNew}
                    value={this.props.upload.fileObj}
                    required={true}
                    progress={this.props.upload.progress}
                    isUploading={this.props.upload.isUploading}
                    onChange={this.props.selectUploadFile}
                    onUnmount={this.props.deselectUploadFile} />

        <Field type="text"
               name="dateCreated"
               label="Date Created"
               placeholder="date created"
               value={asset.dateCreated}
               hidden={isNew}
               disabled={true}
               readOnly={true}></Field>

        <Field type="text"
               name="dateModified"
               label="Date Modified"
               placeholder="date modified"
               value={asset.dateModified}
               hidden={isNew}
               disabled={true}
               readOnly={true}></Field>

        <div>
          <Button buttonType="secondary"
                  iconType="close"
                  tooltipText="Cancel"
                  tooltipPosition="top center"
                  onClick={this.onFormCancel}>Cancel</Button>
          <ShowJsonButton node={asset}
                    hidden={isNew}></ShowJsonButton>
          <Button buttonType="primary"
                  iconType="save"
                  tooltipText="Save Asset"
                  tooltipPosition="top center"
                  onClick={this.onFormSubmit}>Save</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    asset: state.selectedAsset,
    upload: state.upload
  };
}

const mapDispatchToProps = { selectUploadFile, deselectUploadFile };

export default connect(mapStateToProps, mapDispatchToProps) (AssetForm);
