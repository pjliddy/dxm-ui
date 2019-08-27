import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { stopRedirect } from '../actions';

class Redirector extends React.Component {
  componentWillUnmount(){
    this.props.stopRedirect();
  }

  render() {
    if (!this.props.redirect) return null;

    return <Redirect to={this.props.path} />;
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.metadata.redirect
  };
}

const mapDispatchToProps = { stopRedirect };

export default connect(mapStateToProps, mapDispatchToProps) (Redirector);
