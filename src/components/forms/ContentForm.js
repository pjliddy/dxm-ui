import React from 'react';

import Button from '../buttons/Button';
import Field from './Field';
import ShowJsonButton from '../buttons/ShowJsonButton';
import BrowserPreviewButton from '../buttons/BrowserPreviewButton';

const ContentForm = props => {
  const { content, isNew } = props;

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
             value={content.id}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <Field type="select"
             name="dataType"
             label="Data Type"
             placeholder="data type"
             value={content.dataType}
             onChange={handleChange}>
        <option value="">Select Data Type...</option>
        <option value="content">Content</option>
      </Field>


      <Field type="text"
             name="title"
             label="Title"
             placeholder="title"
             value={content.title}
             required={true}
             onChange={handleChange}></Field>

      <Field type="text"
             name="subTitle"
             label="Subtitle"
             placeholder="subtitle"
             value={content.subTitle}
             required={true}
             onChange={handleChange}></Field>

      <Field type="textarea"
             name="copyText"
             label="Copy Text"
             placeholder="copy text"
             value={content.copyText}
             required={true}
             onChange={handleChange}></Field>

      <Field type="text"
             name="dateCreated"
             label="Date Created"
             placeholder="date created"
             value={content.dateCreated}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <Field type="text"
             name="dateModified"
             label="Date Modified"
             placeholder="date modified"
             value={content.dateModified}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <div>
        <Button buttonType="secondary"
                iconType="close"
                tooltipText="Cancel"
                tooltipPosition="top center"
                onClick={onFormCancel}>Cancel</Button>
        <ShowJsonButton node={content}
                        hidden={isNew}></ShowJsonButton>
        <BrowserPreviewButton node={content}
                              hidden={isNew}></BrowserPreviewButton>
        <Button buttonType="primary"
                iconType="save"
                tooltipText="Save Content"
                tooltipPosition="top center"
                onClick={onFormSubmit}>Save</Button>
      </div>
    </div>
  );
}

export default ContentForm;
