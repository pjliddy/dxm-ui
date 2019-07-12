import React from 'react';
import { Redirect } from 'react-router-dom';
import ContentForm from '../ContentForm';
import { contentCreate } from '../api/contentApi';

class ContentCreate extends React.Component {
  state = {
    item: {
      id: '',
      contentType: '',
      title: '',
      subTitle: '',
      copyText: '',
      dateCreated: '',
      dateModified: ''
    },
    redirect: false
  };

  postContent = async () => {
    const response = await contentCreate(this.state.item);
    this.setState({ redirect: true });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>New Content</h1>
        <ContentForm item={this.state.item}
                     onFormSubmit={this.postContent}
                     onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
};

export default ContentCreate;
