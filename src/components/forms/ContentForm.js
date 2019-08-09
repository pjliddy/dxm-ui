import React from 'react';
import { connect } from 'react-redux';

import Button from '../buttons/Button';
import Field from './Field';
import ShowJsonButton from '../buttons/ShowJsonButton';
import BrowserPreviewButton from '../buttons/BrowserPreviewButton';

class ContentForm extends React.Component {
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
    const content = this.props.content;
    const isNew = this.props.isNew;

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
               onChange={this.handleChange}>
          <option value="">Select Data Type...</option>
          <option value="content">Content</option>
        </Field>


        <Field type="text"
               name="title"
               label="Title"
               placeholder="title"
               value={content.title}
               required={true}
               onChange={this.handleChange}></Field>

        <Field type="text"
               name="subTitle"
               label="Subtitle"
               placeholder="subtitle"
               value={content.subTitle}
               required={true}
               onChange={this.handleChange}></Field>

        <Field type="textarea"
               name="copyText"
               label="Copy Text"
               placeholder="copy text"
               value={content.copyText}
               required={true}
               onChange={this.handleChange}></Field>

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
                  onClick={this.onFormCancel}>Cancel</Button>
          <ShowJsonButton node={content}
                          hidden={isNew}></ShowJsonButton>
          <BrowserPreviewButton node={content}
                                hidden={isNew}></BrowserPreviewButton>
          <Button buttonType="primary"
                  iconType="save"
                  tooltipText="Save Content"
                  tooltipPosition="top center"
                  onClick={this.onFormSubmit}>Save</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.selectedContent
  };
}

export default connect(mapStateToProps) (ContentForm);
