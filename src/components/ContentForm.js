import React from 'react';

import ShowJson from './ShowJson';
import BrowserPreview from './BrowserPreview';
import Field from './Field';

class ContentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
      isNew: props.isNew
    };
  }

  componentDidUpdate() {
    if (this.props.content && this.props.content !== this.state.content) {
      this.setState({
        content: this.props.content,
      });
    }
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.content);
  }

  handleChange = (event) => {
    const { content } = { ...this.state };
    const { name, value } = event.target;
    content[name] = value;

    this.setState({ content: content });
  }

  render() {
    const content = this.state.content;
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
               readOnly={true}>
        </Field>

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
               onChange={this.handleChange}>
        </Field>

        <Field type="text"
               name="subTitle"
               label="Subtitle"
               placeholder="subtitle"
               value={content.subTitle}
               required={true}
               onChange={this.handleChange}>
        </Field>

        <Field type="textarea"
               name="copyText"
               label="Copy Text"
               placeholder="copy text"
               value={content.copyText}
               required={true}
               onChange={this.handleChange}>
        </Field>

        <Field type="text"
               name="dateCreated"
               label="Date Created"
               placeholder="date created"
               value={content.dateCreated}
               hidden={isNew}
               disabled={true}
               readOnly={true}>
        </Field>

        <Field type="text"
               name="dateModified"
               label="Date Modified"
               placeholder="date modified"
               value={content.dateModified}
               hidden={isNew}
               disabled={true}
               readOnly={true}>
        </Field>

        <div>
          <button className="ui secondary basic button"
                  title="Cancel"
                  onClick={this.onFormCancel}>
            <i className="close icon"></i>
            Cancel
          </button>
          <ShowJson node={content}
                    hidden={isNew}>
            Show JSON
          </ShowJson>
          <BrowserPreview node={content}
                          hidden={isNew}>
            Preview
          </BrowserPreview>
          <button className="ui primary button"
                  title="Save"
                  onClick={this.onFormSubmit}>
            <i className="save icon"></i>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default ContentForm;
