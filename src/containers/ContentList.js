import React from 'react';
import { connect } from 'react-redux'
import {
  fetchContents,
  deleteContent
} from '../actions';

import ContentListView from '../components/views/ContentList';

class ContentList extends React.Component {
  componentDidMount() {
    this.props.fetchContents();
  }

  render() {
    return <ContentListView contents={this.props.contents}
                            isLoading={this.props.isLoading}
                            deleteContent={this.props.deleteContent} />;
  }
}

const mapStateToProps = state => {
  return {
    contents: state.contents,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = {
  fetchContents,
  deleteContent
 };

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)
