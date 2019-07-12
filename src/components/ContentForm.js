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
    this.props.onFormSubmit();
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  componentDidMount() {
    this.setState({ item: this.props.item });
  }

  componentDidUpdate() {
    if (this.props.item.id !== this.state.item.id ) {
      this.setState({ item: this.props.item });
    }
  }

  render() {
    const item = this.state.item;

    return(
      <div className="ui form">
        <div className="disabled field">
          <label htmlFor="id">ID</label>
          <input name="id"
                 type="text"
                 placeholder="id"
                 value={item.id}
                 readOnly />
        </div>
        <div className="field">
          <label htmlFor="contentType">Content Type</label>
          <select name="contentType"
                 type="text"
                 placeholder="content type"
                 value={item.contentType}
                 onChange={this.handleChange}>
                    <option value="content">Content</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input name="title"
                 type="text"
                 placeholder="title"
                 value={item.title}
                 onChange={this.handleChange} />
        </div>
        <div className="field">
          <label htmlFor="subTitle">Subtitle</label>
          <input name="subTitle"
                 type="text"
                 placeholder="subtitle"
                 value={item.subTitle}
                 onChange={this.handleChange} />
        </div>
        <div className="field">
          <label htmlFor="copyText">Copy Text</label>
          <textarea name="copyText"
                 placeholder="copy text"
                 value={item.copyText}
                 onChange={this.handleChange}></textarea>
        </div>
        <div className="disabled field">
          <label htmlFor="dateCreated">Date Created</label>
          <input name="dateCreated"
                 type="text"
                 placeholder="date created"
                 value={item.dateCreated}
                 readOnly />
        </div>
        <div className="disabled field">
          <label htmlFor="dateModified">Date Modified</label>
          <input name="dateModified"
                 type="text"
                 placeholder="date modifed"
                 value={item.dateModified}
                 readOnly />
        </div>

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
