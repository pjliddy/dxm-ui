import React from 'react';
import { connect } from 'react-redux'
import {
  deselectContent,
  fetchContent,
  previewHtml,
  previewJson,
  startRedirect,
  updateContent,
  updateSelectedContent
} from '../actions';

import ContentEditView from '../components/views/ContentEdit';

class ContentEdit extends React.Component {
  componentDidMount() {
    this.props.fetchContent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  render() {
    return <ContentEditView content={this.props.content}
                            isLoading={this.props.isLoading}
                            previewHtml={this.props.previewHtml}
                            previewJson={this.props.previewJson}
                            startRedirect={this.props.startRedirect}
                            updateContent={this.props.updateContent}
                            updateSelectedContent={this.props.updateSelectedContent} />;
  }
}

const mapStateToProps = state => {
  return {
    content: state.selectedContent,
    isLoading: state.metadata.isLoading,
    redirect: state.metadata.redirect
  };
}

const mapDispatchToProps = {
  deselectContent,
  fetchContent,
  previewHtml,
  previewJson,
  startRedirect,
  updateContent,
  updateSelectedContent
};

export default connect(mapStateToProps, mapDispatchToProps) (ContentEdit);
