import React from 'react';
import { connect } from 'react-redux'
import {
  deleteContent,
  fetchContents
} from '../actions';

import ContentListView from '../components/views/ContentList';

class ContentList extends React.Component {
  componentDidMount() {
    this.props.fetchContents();
  }

  render() {
    return <ContentListView contents={this.props.contents}
                            deleteContent={this.props.deleteContent}
                            isLoading={this.props.isLoading} />;
  }
}

const mapStateToProps = state => {
  return {
    contents: state.contents,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = {
  deleteContent,
  fetchContents
 };

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)
