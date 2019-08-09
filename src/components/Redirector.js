import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { stopRedirect } from '../actions';

class Redirector extends React.Component {
  componentWillUnmount(){
    this.props.stopRedirect();
  }
  
  render() {
    return this.props.redirect
      ? <Redirect to={this.props.path} />
      : null;
  }
}

const mapStateToProps = (state) => {
  return {
    redirect: state.metadata.redirect
  };
}

const mapDispatchToProps = { stopRedirect };

export default connect(mapStateToProps, mapDispatchToProps) (Redirector);
