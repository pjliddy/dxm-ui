import React from 'react';
import { Redirect } from 'react-router-dom';
import { contentRead } from '../api/contentApi';
import { contentUpdate } from '../api/contentApi';
import ContentForm from '../ContentForm';

class ContentEdit extends React.Component {
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

  getContent = async (id) => {
    this.setState({ isLoading: true });
    const response = await contentRead(id);
    this.setState({
      item: response,
      isLoading: false
    });
  }

  putContent = async () => {
    this.setState({ isLoading: true });
    await contentUpdate(this.state.item);
    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  componentDidMount() {
    this.getContent(this.props.match.params.id);
  }

  handleLoader() {
    if (this.state.isLoading) {
      return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      );
    } else {
      return(
        <ContentForm item={this.state.item}
                     onFormSubmit={this.putContent}
                     onFormCancel={this.onFormCancel}/>
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>Edit Content</h1>
          <div className={loaderStyles}>
            <div className="ui text loader">Working...</div>
          </div>
          <ContentForm item={this.state.item}
                       onFormSubmit={this.putContent}
                       onFormCancel={this.onFormCancel}/>
        </div>
    );
  }
};

export default ContentEdit;
