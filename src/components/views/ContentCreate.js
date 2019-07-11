import React from 'react';
import { Redirect } from 'react-router-dom';
import ContentItem from '../ContentItem';
import { contentCreate } from '../api/contentApi';

class ContentCreate extends React.Component {
  state = {
    item: {
      id: '',
      title: '',
      contentType: '',
    },
    redirect: false
  };

  postContent = async () => {
    console.log(this.state.item);

    const response = await contentCreate(this.state.item);

    console.log(response);
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
        <ContentItem item={this.state.item}
                     onFormSubmit={this.postContent}
                     onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
};

export default ContentCreate;
