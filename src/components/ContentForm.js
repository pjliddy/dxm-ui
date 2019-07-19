import React from 'react';

class ContentForm extends React.Component {
  state = {
    item: {
      id: '',
      contentType: 'content',
      title: '',
      subTitle: '',
      copyText: '',
      dateCreated: '',
      dateModified: ''
    }
  };

  handleChange = (event) => {
    const { item } = { ...this.state };
    const currentState = item;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ item: currentState})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.item);
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  itemToState() {
    if (this.props.item.id && this.props.item.id !== this.state.item.id ) {
      this.setState({ item: this.props.item });
    }
  }

  componentDidMount() {
    this.setState({ isNew: this.props.isNew });
    this.itemToState();
  }

  componentDidUpdate() {
    this.itemToState();
  }

  render() {
    const item = this.state.item;
    const isNew = this.state.isNew

    let idField = null;
    let dateCreatedField = null;
    let dateModifiedField = null;

    if (!isNew) {
      idField = <div className="disabled field">
                  <label htmlFor="id">ID</label>
                  <input name="id"
                         type="text"
                         placeholder="id"
                         value={item.id}
                         readOnly />
                </div>;
      dateCreatedField = <div className="disabled field">
                          <label htmlFor="dateCreated">Date Created</label>
                          <input name="dateCreated"
                                 type="text"
                                 placeholder="date created"
                                 value={item.dateCreated}
                                 readOnly />
                        </div>;

      dateModifiedField = <div className="disabled field">
                            <label htmlFor="dateModified">Date Modified</label>
                            <input name="dateModified"
                                   type="text"
                                   placeholder="date modifed"
                                   value={item.dateModified}
                                   readOnly />
                          </div>;
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
                 value={item.contentType}
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
                 value={item.title}
                 onChange={this.handleChange} />
        </div>
        <div className="required field">
          <label htmlFor="subTitle">Subtitle</label>
          <input name="subTitle"
                 type="text"
                 placeholder="subtitle"
                 value={item.subTitle}
                 onChange={this.handleChange} />
        </div>
        <div className="required field">
          <label htmlFor="copyText">Copy Text</label>
          <textarea name="copyText"
                 placeholder="copy text"
                 value={item.copyText}
                 onChange={this.handleChange}></textarea>
        </div>
        {dateCreatedField}
        {dateModifiedField}
        <div>
          <button className="ui secondary basic button"
                  onClick={this.onFormCancel}>
            Cancel
          </button>
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
