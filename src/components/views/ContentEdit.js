import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContent, updateContent, deselectContent, updateSelectedContent } from '../../actions';

import ContentForm from '../forms/ContentForm';
import LoadingIndicator from '../LoadingIndicator';

import { SENDING_DATA_MESSAGE } from '../../config';

// research containers for wrapping forms, etc.

class ContentEdit extends React.Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.fetchContent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  updateContent = async () => {
    await this.props.updateContent();

    this.setState({
      redirect: true
    });
  }

  render() {
    // create redirect component
    if (this.state.redirect) { return <Redirect to="/" />; }

    return (
      <div>
        <h1>Edit Content</h1>
        <ContentForm content={this.props.content}
                     onFormUpdate={this.props.updateSelectedContent}
                     onFormSubmit={this.updateContent}
                     onFormCancel={this.onFormCancel}/>
        <LoadingIndicator isLoading={this.props.isLoading}
                          message={SENDING_DATA_MESSAGE}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    content: state.selectedContent,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = { fetchContent, updateContent, deselectContent, updateSelectedContent };

export default connect(mapStateToProps, mapDispatchToProps) (ContentEdit);
