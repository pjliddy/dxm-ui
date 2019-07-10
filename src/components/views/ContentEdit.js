import React from 'react';
import { Redirect } from 'react-router-dom';
import { contentRead } from '../api/contentApi';
import { contentUpdate } from '../api/contentApi';
// import { contentDelete } from '../api/contentApi';

class ContentEdit extends React.Component {
  state = {
    item: {
      id: '',
      title: '',
      contentType: '',
    },
    redirect: false
  };

  getContent = async (id) => {
    const response = await contentRead(id);
    this.setState({ item: response.data });
  }

  putContent = async () => {
    console.log(this.state.item);

    const response = await contentUpdate(this.state.item);

    console.log(response);
    this.setState({ redirect: true });
  }

  onInputChange = (event) => {
    const { item } = { ...this.state };
    const currentState = item;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ item: currentState})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.putContent();
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  componentDidMount () {
    this.getContent(this.props.match.params.id);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const item = this.state.item;

    return (
      <div>
        <h1>Edit Content</h1>
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

          <div className="ui right floated">
            <button className="ui right floated primary button"
                    onClick={this.onFormSubmit}>
              Save
            </button>
            <button className="ui right floated secondary basic button"
                    onClick={this.onFormCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentEdit;
