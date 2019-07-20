import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import ContentForm from '../ContentForm';

class ContentCreate extends React.Component {
  constructor() {
    super();

    this.apiResource = 'nodes';
    this.state = {
      node: {
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
  }

  postContent = async (node) => {
    this.setState({ isLoading: true });
    await Api.create(this.apiResource, node);

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
        <ContentForm node={this.state.node}
                     isNew={true}
                     onFormSubmit={this.postContent}
                     onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
};

export default ContentCreate;
