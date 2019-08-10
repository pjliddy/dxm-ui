import React from 'react';
import { connect } from 'react-redux'
import {
  selectUploadFile,
  deselectUploadFile
} from '../actions';

import FilePickerView from '../components/forms/FilePicker';

class FilePicker extends React.Component {
  componentWillUnmount() {
    this.props.deselectUploadFile();
  }

  render() {
    return <FilePickerView asset={this.props.asset}
                           preview={this.props.preview}
                           value={this.props.value}
                           required={this.props.required}
                           progress={this.props.progress}
                           isUploading={this.props.isUploading}
                           onChange={this.props.selectUploadFile} />;
  }
}

const mapStateToProps = state => {
  return {
    asset: state.selectedAsset,
    upload: state.upload,
  };
}

const mapDispatchToProps = {
  selectUploadFile,
  deselectUploadFile
 };

export default connect(mapStateToProps, mapDispatchToProps) (FilePicker);
