import React from 'react';
import { connect } from 'react-redux';
import { newContent, createContent, deselectContent, updateSelectedContent, startRedirect } from '../../actions';

import ContentForm from '../forms/ContentForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

class ContentCreate extends React.Component {
  componentDidMount() {
    this.props.newContent();
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  render() {
    return (
      <div>
        <Redirector path="/" />
        <h1>New Content</h1>
        <ContentForm content={this.props.content}
                     isNew={true}
                     onFormUpdate={this.props.updateSelectedContent}
                     onFormSubmit={this.props.createContent}
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

const mapDispatchToProps = { newContent, createContent, deselectContent, updateSelectedContent, startRedirect };

export default connect(mapStateToProps, mapDispatchToProps) (ContentCreate);
