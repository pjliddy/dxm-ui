import React from 'react';
import { connect } from 'react-redux'
import {
  createContent,
  deselectContent,
  newContent,
  startRedirect,
  updateSelectedContent
} from '../actions';

import ContentCreateView from '../components/views/ContentCreate';

class ContentCreate extends React.Component {
  componentDidMount() {
    this.props.newContent();
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  render() {
    return <ContentCreateView content={this.props.content}
                              createContent={this.props.createContent}
                              isLoading={this.props.isLoading}
                              startRedirect={this.props.startRedirect}
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
  createContent,
  deselectContent,
  newContent,
  startRedirect,
  updateSelectedContent
 };

export default connect(mapStateToProps, mapDispatchToProps) (ContentCreate);
