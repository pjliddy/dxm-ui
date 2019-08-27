import React from 'react';
import { connect } from 'react-redux'
import {
  deleteContent,
  listContents,
  previewHtml,
  previewJson
} from '../../../actions';

import ContentListView from './ContentListView';

class ContentList extends React.Component {
  componentDidMount() {
    this.props.listContents();
  }

  render() {
    return <ContentListView contents={this.props.contents}
                            deleteContent={this.props.deleteContent}
                            isLoading={this.props.isLoading}
                            previewHtml={this.props.previewHtml}
                            previewJson={this.props.previewJson} />;
  }
}

// use reselect for memoization

const mapStateToProps = state => {
  return {
    contents: state.contents,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = {
  deleteContent,
  listContents,
  previewHtml,
  previewJson
 };

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)
