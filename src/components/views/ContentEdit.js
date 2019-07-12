import React from 'react';
import { Redirect } from 'react-router-dom';
import { contentRead } from '../api/contentApi';
import { contentUpdate } from '../api/contentApi';
import ContentForm from '../ContentForm';

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
    this.setState({ item: response });
  }

  putContent = async () => {
    await contentUpdate(this.state.item);
    this.setState({ redirect: true });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  componentDidMount () {
    this.getContent(this.props.match.params.id);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Edit Content</h1>
        <ContentForm item={this.state.item}
                     onFormSubmit={this.putContent}
                     onFormCancel={this.onFormCancel}/>
      </div>
    );
  }
};

export default ContentEdit;
