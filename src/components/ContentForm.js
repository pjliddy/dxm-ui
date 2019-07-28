import React from 'react';

const SITE_REPO_URL = 'https://dxm-site-repo.s3.amazonaws.com';
const CONTENT_LAKE_URL = 'https://dxm-content-lake.s3.amazonaws.com';

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
    const node = this.state.node;
    window.open(`${SITE_REPO_URL}/${node.contentType}/${node.id}.html`);
  }

  onShowLake = () => {
    const node = this.state.node;
    window.open(`${CONTENT_LAKE_URL}/${node.contentType}/${node.id}.json`);
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
    let lakeButton = null;

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

      previewButton = <button className="ui button"
                              onClick={this.onPreview}>
                        <i className="desktop icon"></i>
                        Preview
                      </button>;

      lakeButton = <button className="ui button"
                           onClick={this.onShowLake}>
                      <i className="code icon"></i>
                      Show JSON
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
                  title="Cancel"
                  onClick={this.onFormCancel}>
            <i className="close icon"></i>
            Cancel
          </button>
          {lakeButton}
          {previewButton}
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
