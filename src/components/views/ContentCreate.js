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
    redirect: false,
    isLoading: false
  };

  postContent = async () => {
    this.setState({ isLoading: true });
    const response = await contentCreate(this.state.item);

    console.log(`postContent: ${JSON.stringify(response)}`);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

      const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>New Content</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        <ContentForm item={this.state.item}
                     onFormSubmit={this.postContent}
                     onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
};

export default ContentCreate;
