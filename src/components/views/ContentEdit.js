import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import ContentForm from '../ContentForm';
import { CONTENT_RESOURCE }  from '../../config';

class ContentEdit extends React.Component {
  constructor() {
    super();

    this.apiResource = CONTENT_RESOURCE;
    this.state = {
      node: {
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

  showContent = async (id) => {
    this.setState({ isLoading: true });
    const response = await Api.read(id, this.apiResource);
    this.setState({
      node: response,
      isLoading: false
    });
  }

  updateContent = async () => {
    this.setState({ isLoading: true });
    await Api.update(this.state.node, this.apiResource);

    // update content without mutating

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  componentDidMount() {
    this.showContent(this.props.match.params.id);
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>Edit Content</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        <ContentForm node={this.state.node}
                     onFormSubmit={this.updateContent}
                     onFormCancel={this.onFormCancel}/>
      </div>
    );
  }
};

export default ContentEdit;
