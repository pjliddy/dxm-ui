import React from 'react';
import Api from './api/Api';

class ContentForm extends React.Component {
  constructor() {
    super();
    
    this.apiResource = 'compose';
    this.state = {
      node: {
        id: '',
        contentType: 'content',
        title: '',
        subTitle: '',
        copyText: '',
        dateCreated: '',
        dateModified: ''
      },
      isNew: false
    };
  }

  handleChange = (event) => {
    const { node } = { ...this.state };
    const currentState = node;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ node: currentState });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.node);
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  onPreview = () => {
    const body = {
      data: this.state.node,
      templateId: this.state.node.contentType
    };

    Api.create(this.apiResource, body)
      .then(response => {
        return response.text();
      })
      .then(response => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, "text/html");
        const html = doc.documentElement.outerHTML;
        const newWindow = window.open();
        newWindow.document.body.outerHTML = html;
      })
  }

  onSaveAndPreview = (event) => {
    this.onFormSubmit(event);
    this.onPreview(event);
  }

  nodeToState() {
    if (this.props.node.id && this.props.node.id !== this.state.node.id ) {
      this.setState({ node: this.props.node });
    }
  }

  componentDidMount() {
    this.setState({ isNew: this.props.isNew });
    this.nodeToState();
  }

  componentDidUpdate() {
    this.nodeToState();
  }

  render() {
    const node = this.state.node;
    const isNew = this.state.isNew

    let idField = null;
    let dateCreatedField = null;
    let dateModifiedField = null;
    let previewButton = null;

    if (!isNew) {
      idField = <div className="disabled field">
                  <label htmlFor="id">ID</label>
                  <input name="id"
                         type="text"
                         placeholder="id"
                         value={node.id}
                         readOnly />
                </div>;
      dateCreatedField =  <div className="disabled field">
                            <label htmlFor="dateCreated">Date Created</label>
                            <input name="dateCreated"
                                   type="text"
                                   placeholder="date created"
                                   value={node.dateCreated}
                                   readOnly />
                          </div>;

      dateModifiedField = <div className="disabled field">
                            <label htmlFor="dateModified">Date Modified</label>
                            <input name="dateModified"
                                   type="text"
                                   placeholder="date modifed"
                                   value={node.dateModified}
                                   readOnly />
                          </div>;
      previewButton = <button className="ui secondary basic button"
                              onClick={this.onPreview}>
                        Preview
                      </button>;
    }

    return(
      <div className="ui form">
        <p>All fields must have values. Validation to be added.</p>
        {idField}
        <div className="required field">
          <label htmlFor="contentType">Content Type</label>
          <select name="contentType"
                 type="text"
                 placeholder="content type"
                 value={node.contentType}
                 onChange={this.handleChange}>
                    <option value="">Content Type</option>
                    <option value="content">Content</option>
          </select>
        </div>
        <div className="required field">
          <label htmlFor="title">Title</label>
          <input name="title"
                 type="text"
                 placeholder="title"
                 value={node.title}
                 onChange={this.handleChange} />
        </div>
        <div className="required field">
          <label htmlFor="subTitle">Subtitle</label>
          <input name="subTitle"
                 type="text"
                 placeholder="subtitle"
                 value={node.subTitle}
                 onChange={this.handleChange} />
        </div>
        <div className="required field">
          <label htmlFor="copyText">Copy Text</label>
          <textarea name="copyText"
                 placeholder="copy text"
                 value={node.copyText}
                 onChange={this.handleChange}></textarea>
        </div>
        {dateCreatedField}
        {dateModifiedField}
        <div>
          <button className="ui secondary basic button"
                  onClick={this.onFormCancel}>
            Cancel
          </button>
          {previewButton}
          <button className="ui primary button"
                  onClick={this.onFormSubmit}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default ContentForm;
