import React from 'react';

class ContentForm extends React.Component {
  state = {
    item: {
      id: '',
      title: '',
      contentType: '',
    }
  };

  handleChange = (event) => {
    console.log('inputChange');

    const { item } = { ...this.state };
    const currentState = item;
    const { name, value } = event.target;
    currentState[name] = value;

    console.log(currentState);


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
                 onChange={this.handleChange} />
        </div>
        <div className="field">
          <label htmlFor="contentType">Content Type</label>
          <input name="contentType"
                 type="text"
                 placeholder="content type"
                 value={item.contentType}
                 onChange={this.handleChange} />
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
