import React from 'react';

class ContentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      content: {
        id: '',
        dataType: 'content',
        title: '',
        subTitle: '',
        copyText: '',
        dateCreated: '',
        dateModified: ''
      },
      isNew: false
    };
  }

  // create controlled field component
  handleChange = (event) => {
    const { content } = { ...this.state };
    const currentState = content;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ content: currentState });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.content);
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  // onPreview = () => {
  //   const content = this.state.content;
  //   window.open(`${SITE_REPO_URL}/${content.dataType}/${content.id}.html`);
  // }

  // onShowJson = () => {
  //   const content = this.state.content;
  //   window.open(`${CONTENT_LAKE_URL}/${content.dataType}/${content.id}.json`);
  // }

  // contentToState() {
  //   if (this.props.content.id && this.props.content.id !== this.state.content.id ) {
  //     this.setState({ content: this.props.content });
  //   }
  // }

  componentDidMount() {
    this.setState({
      isNew: this.props.isNew
    });
  }

  componentDidUpdate() {
    if (this.props.content.id && !this.state.content.id) {
      this.setState({
        content: this.props.content,
      });
    }
  }

  render() {
    const content = this.state.content;
    const isNew = this.props.isNew

    let idField = null;
    let dateCreatedField = null;
    let dateModifiedField = null;
    let previewButton = null;
    let jsonButton = null;

    // move to separate functions / conditional components

    if (!isNew) {
      idField = <div className="disabled field">
                  <label htmlFor="id">ID</label>
                  <input name="id"
                         type="text"
                         placeholder="id"
                         value={content.id}
                         readOnly />
                </div>;

      dateCreatedField =  <div className="disabled field">
                            <label htmlFor="dateCreated">Date Created</label>
                            <input name="dateCreated"
                                   type="text"
                                   placeholder="date created"
                                   value={content.dateCreated}
                                   readOnly />
                          </div>;

      dateModifiedField = <div className="disabled field">
                            <label htmlFor="dateModified">Date Modified</label>
                            <input name="dateModified"
                                   type="text"
                                   placeholder="date modifed"
                                   value={content.dateModified}
                                   readOnly />
                          </div>;

      previewButton = <button className="ui button"
                              onClick={this.onPreview}>
                        <i className="desktop icon"></i>
                        Preview
                      </button>;

      jsonButton = <button className="ui button"
                           onClick={this.onShowJson}>
                      <i className="code icon"></i>
                      Show JSON
                    </button>;
    }

    return(
      <div className="ui form">
        <p>All fields must have values. Validation to be added.</p>
        {idField}


        <div className="required field">
          <label htmlFor="dataType">Data Type</label>
          <select name="dataType"
                 type="text"
                 placeholder="content type"
                 value={content.dataType}
                 onChange={this.handleChange}>
                    <option value="">Data Type</option>
                    <option value="content">Content</option>
          </select>
        </div>
        <div className="required field">
          <label htmlFor="title">Title</label>
          <input name="title"
                 type="text"
                 placeholder="title"
                 value={content.title}
                 onChange={this.handleChange} />
        </div>
        <div className="required field">
          <label htmlFor="subTitle">Subtitle</label>
          <input name="subTitle"
                 type="text"
                 placeholder="subtitle"
                 value={content.subTitle}
                 onChange={this.handleChange} />
        </div>
        <div className="required field">
          <label htmlFor="copyText">Copy Text</label>
          <textarea name="copyText"
                 placeholder="copy text"
                 value={content.copyText}
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
          {jsonButton}
          {previewButton}
          <button className="ui primary button"
                  title="Save"
                  onClick={this.onFormSubmit}>
            <i className="save icon"></i>
            Save
          </button>
        </div>

        <div className="ui segment">
          <code>
            {JSON.stringify(this.props.content)}
          </code>
        </div>

      </div>
    );
  }
}

export default ContentForm;
