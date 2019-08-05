import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContent, updateContent, deselectContent, updateSelectedContent } from '../../actions';

import ContentForm from '../ContentForm';

class ContentEdit extends React.Component {
  state = {
    redirect: false,
    isLoading: false
  };

  componentDidMount() {
    this.props.fetchContent(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.deselectContent();
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  updateContent = async () => {
    this.setState({ isLoading: true });

    await this.props.updateContent();

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  render() {
    // create redirect component
    if (this.state.redirect) { return <Redirect to="/" />; }

    const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <h1>Edit Content</h1>

        {/* make loader component  */}
        <div className={loaderStyles}>
          <div className="ui text loader">Working...</div>
        </div>

        <ContentForm content={this.props.content}
                     onFormUpdate={this.props.updateSelectedContent}
                     onFormSubmit={this.updateContent}
                     onFormCancel={this.onFormCancel}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { content: state.selectedContent };
}

export default connect(mapStateToProps, { fetchContent, updateContent, deselectContent, updateSelectedContent }) (ContentEdit);
