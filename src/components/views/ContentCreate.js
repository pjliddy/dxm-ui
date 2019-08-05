import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newContent, createContent, deselectContent, updateSelectedContent } from '../../actions';

import ContentForm from '../ContentForm';

class ContentCreate extends React.Component {
  state = {
    redirect: false,
    isLoading: false
  };

  componentDidMount() {
    this.props.newContent();
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  createContent = async () => {
    this.setState({ isLoading: true });

    await this.props.createContent(this.props.content);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) { return <Redirect to="/" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>New Content</h1>
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>
        <ContentForm content={this.props.content}
                     isNew={true}
                     onFormUpdate={this.props.updateSelectedContent}
                     onFormSubmit={this.createContent}
                     onFormCancel={this.onFormCancel}/>
       </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { content: state.selectedContent };
}

const mapDispatchToProps = { newContent, createContent, deselectContent, updateSelectedContent };

export default connect(mapStateToProps, mapDispatchToProps) (ContentCreate);
