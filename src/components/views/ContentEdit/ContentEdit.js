import React from 'react';
import { connect } from 'react-redux'
import {
  deselectContent,
  getContent,
  previewHtml,
  previewJson,
  startRedirect,
  updateContent,
  updateSelectedContent
} from '../../../actions';

import ContentEditView from './ContentEditView';

class ContentEdit extends React.Component {
  componentDidMount() {
    this.props.getContent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  render() {
    return <ContentEditView content={this.props.content}
                            isLoading={this.props.isLoading}
                            previewHtml={this.props.previewHtml}
                            previewJson={this.props.previewJson}
                            onFormCancel={this.props.startRedirect}
                            onFormSubmit={this.props.updateContent}
                            onFormUpdate={this.props.updateSelectedContent} />;
  }
}

const mapStateToProps = state => {
  return {
    content: state.selectedContent,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = {
  deselectContent,
  getContent,
  previewHtml,
  previewJson,
  startRedirect,
  updateContent,
  updateSelectedContent
};

export default connect(mapStateToProps, mapDispatchToProps) (ContentEdit);
