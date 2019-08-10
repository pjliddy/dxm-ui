import React from 'react';

import Button from '../buttons/Button';
import Field from './Field';
import FilePicker from '../../containers/FilePicker';
import ShowJsonButton from '../buttons/ShowJsonButton';

const AssetForm = props => {
  const { asset, upload, isNew } = props;

  const onFormCancel = (event) => {
    event.preventDefault();
    props.onFormCancel();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.onFormUpdate({ name, value });
  };

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
             onChange={handleChange}>
        <option value="">Select Data Type...</option>
        <option value="asset">Asset</option>
      </Field>

      <Field type="text"
             name="title"
             label="Title"
             placeholder="title"
             value={asset.title}
             required={true}
             onChange={handleChange} />

      <FilePicker asset={asset}
                  preview={!isNew}
                  value={upload.fileObj}
                  required={true}
                  progress={upload.progress}
                  isUploading={upload.isUploading} />

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
                onClick={onFormCancel}>Cancel</Button>
        <ShowJsonButton node={asset}
                  hidden={isNew}></ShowJsonButton>
        <Button buttonType="primary"
                iconType="save"
                tooltipText="Save Asset"
                tooltipPosition="top center"
                onClick={onFormSubmit}>Save</Button>
      </div>
    </div>
  );
}

export default AssetForm;
