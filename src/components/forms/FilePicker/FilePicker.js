import React from 'react';
import { connect } from 'react-redux'
import {
  deselectUploadFile,
  selectUploadFile
} from '../../../actions';

import FilePickerView from './FilePickerView';

class FilePicker extends React.Component {
  componentWillUnmount() {
    this.props.deselectUploadFile();
  }

  render() {
    return <FilePickerView asset={this.props.asset}
                           isUploading={this.props.isUploading}
                           onChange={this.props.selectUploadFile}
                           preview={this.props.preview}
                           progress={this.props.progress}
                           required={this.props.required}
                           value={this.props.value} />;
  }
}

const mapStateToProps = state => {
  return {
    asset: state.selectedAsset
  };
}

const mapDispatchToProps = {
  deselectUploadFile,
  selectUploadFile
 };

export default connect(mapStateToProps, mapDispatchToProps) (FilePicker);
