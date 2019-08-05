import React from 'react';
import { connect } from 'react-redux';
import { deleteContent, deleteAsset } from '../actions';

class ButtonDelete extends React.Component {
  handleClick(id) {
    switch (this.props.node.dataType) {
      case 'content':
      default:
        this.props.deleteContent(id);
        break;
      case 'asset':
        this.props.deleteAsset(id);
    }
  }
  
  render() {
    return (
      <button className="ui basic button"
              data-tooltip="Delete Content"
              data-position="top right"
              onClick={() => this.handleClick(this.props.node.id)}>
        <i className="trash alternate outline icon"></i>
      </button>
    );
  }
}

export default connect(null, { deleteContent, deleteAsset }) (ButtonDelete);