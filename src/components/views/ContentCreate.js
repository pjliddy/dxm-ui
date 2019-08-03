import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import ContentForm from '../ContentForm';
import { CONTENT_RESOURCE }  from '../../config';

class ContentCreate extends React.Component {
  constructor() {
    super();

    this.apiResource = CONTENT_RESOURCE;
    this.state = {
      content: {
        id: '',
        dataType: '',
        title: '',
        subTitle: '',
        copyText: '',
        dateCreated: '',
        dateModified: ''
      },
      redirect: false,
      isLoading: false
    };
  }

  createContent = async (content) => {
    this.setState({ isLoading: true });
    await Api.create(content, this.apiResource);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>New Content</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        <ContentForm content={this.state.content}
                     isNew={true}
                     onFormSubmit={this.createContent}
                     onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
};

export default ContentCreate;
