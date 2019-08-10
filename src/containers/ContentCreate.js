import React from 'react';
import { connect } from 'react-redux'
import {
  newContent,
  createContent,
  deselectContent,
  updateSelectedContent,
  startRedirect
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
                              isLoading={this.props.isLoading}
                              createContent={this.props.createContent}
                              updateSelectedContent={this.props.updateSelectedContent}
                              startRedirect={this.props.startRedirect} />;
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
  newContent,
  createContent,
  deselectContent,
  updateSelectedContent,
  startRedirect
 };

export default connect(mapStateToProps, mapDispatchToProps) (ContentCreate);
