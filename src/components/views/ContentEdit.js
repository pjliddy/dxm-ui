import React from 'react';
import { connect } from 'react-redux';
import { fetchContent, updateContent, deselectContent, updateSelectedContent, startRedirect } from '../../actions';

import ContentForm from '../forms/ContentForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

// research containers for wrapping forms, etc.

class ContentEdit extends React.Component {
  componentDidMount() {
    this.props.fetchContent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  render() {
    return (
      <div>
        <Redirector path="/" />
        <h1>Edit Content</h1>
        <ContentForm content={this.props.content}
                     onFormUpdate={this.props.updateSelectedContent}
                     onFormSubmit={this.props.updateContent}
                     onFormCancel={this.props.startRedirect}/>
        <LoadingIndicator isLoading={this.props.isLoading}
                          message={SENDING_DATA_MESSAGE}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    content: state.selectedContent,
    isLoading: state.metadata.isLoading,
    redirect: state.metadata.redirect
  };
}

const mapDispatchToProps = { fetchContent, updateContent, deselectContent, updateSelectedContent, startRedirect };

export default connect(mapStateToProps, mapDispatchToProps) (ContentEdit);
