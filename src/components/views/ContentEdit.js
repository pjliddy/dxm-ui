import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContent, updateContent } from '../../actions';

import ContentForm from '../ContentForm';

class ContentEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      content: { },
      redirect: false,
      isLoading: false
    };
  }

  updateContent = async (content) => {
    this.setState({ isLoading: true });

    this.props.updateContent(content);

    this.setState({
      isLoading: false,
      redirect: true
    });
  }

  onFormCancel = () => {
    this.setState({ redirect: true });
  }

  componentDidMount() {
    this.props.fetchContent(this.props.match.params.id)
  }

  render() {
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
                     onFormSubmit={this.updateContent}
                     onFormCancel={this.onFormCancel}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { content: state.selectedContent };
}

export default connect(mapStateToProps, { fetchContent, updateContent }) (ContentEdit);
