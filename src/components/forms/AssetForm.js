import React from 'react';

import Button from './Button';
import Field from './Field';
import FilePicker from './FilePicker/FilePicker';

const AssetForm = props => {
  const {
    asset,
    isNew,
    previewJson,
    upload,
  } = props;

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

      <Field inputType="text"
             name="id"
             label="ID"
             placeholder="id"
             value={asset.id}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <Field inputType="text"
             name="resourceType"
             label="Resource Type"
             placeholder="resource type"
             value={asset.resourceType}
             disabled={true}
             readOnly={true}></Field>

      <Field inputType="text"
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

      <Field inputType="text"
             name="dateCreated"
             label="Date Created"
             placeholder="date created"
             value={asset.dateCreated}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <Field inputType="text"
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
        <Button buttonType="secondary"
                hidden={isNew}
                iconType="code"
                tooltipText="Show JSON"
                tooltipPosition="top center"
                onClick={() => previewJson(asset)}>Show JSON</Button>
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
