import React from 'react';

class ContentItem extends React.Component {
  onInputChange = (event) => {
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

  render() {
    const item = this.props.item;

    return(
      <div className="ui form">
        <div className="field">
          <label htmlFor="id">ID</label>
          <input name="id"
                 type="text"
                 value={item.id}
                 readOnly />
        </div>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input name="title"
                 type="text"
                 placeholder="title"
                 value={item.title}
                 onChange={this.onInputChange} />
        </div>
        <div className="field">
          <label htmlFor="contentType">Type</label>
          <input name="contentType"
                 type="text"
                 placeholder="type"
                 value={item.contentType}
                 onChange={this.onInputChange} />
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

export default ContentItem;
