import React from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../api/Api';
import ContentForm from '../ContentForm';

class ContentEdit extends React.Component {
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

  getContent = async (id) => {
    this.setState({ isLoading: true });
    const response = await Api.read(this.apiResource, id);
    this.setState({
      node: response,
      isLoading: false
    });
  }

  putContent = async () => {
    this.setState({ isLoading: true });
    await Api.update(this.apiResource, this.state.node);
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
        <ContentForm node={this.state.node}
                     onFormSubmit={this.putContent}
                     onFormCancel={this.onFormCancel}/>
      );
    }
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
                       onFormSubmit={this.putContent}
                       onFormCancel={this.onFormCancel}/>
        </div>
    );
  }
};

export default ContentEdit;
