import React from 'react';

import Button from './Button';
import Field from './Field';

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

      <Field inputType="text"
             name="id"
             label="ID"
             placeholder="id"
             value={content.id}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <Field inputType="text"
             name="resourceType"
             label="Resource Type"
             placeholder="resource type"
             value={content.resourceType}
             disabled={true}
             readOnly={true}></Field>

      <Field inputType="text"
             name="title"
             label="Title"
             placeholder="title"
             value={content.title}
             required={true}
             onChange={handleChange}></Field>

      <Field inputType="text"
             name="subtitle"
             label="Subtitle"
             placeholder="subtitle"
             value={content.subtitle}
             required={true}
             onChange={handleChange}></Field>

      <Field inputType="textarea"
             name="copyText"
             label="Copy Text"
             placeholder="copy text"
             value={content.copyText}
             required={true}
             onChange={handleChange}></Field>

      <Field inputType="text"
             name="dateCreated"
             label="Date Created"
             placeholder="date created"
             value={content.dateCreated}
             hidden={isNew}
             disabled={true}
             readOnly={true}></Field>

      <Field inputType="text"
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
        <Button buttonType="secondary"
                hidden={isNew}
                iconType="code"
                tooltipText="Show JSON"
                tooltipPosition="top center"
                onClick={() => props.previewJson(content)}>Show JSON</Button>
        <Button buttonType="secondary"
                hidden={isNew}
                iconType="desktop"
                tooltipText="Preview in Browser"
                tooltipPosition="top center"
                onClick={() => props.previewHtml(content)}>Preview in Browser</Button>
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
