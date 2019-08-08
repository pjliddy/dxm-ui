import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContents, deleteContent } from '../../actions';

import Button from '../buttons/Button';
import ShowJsonButton from '../buttons/ShowJsonButton';
import BrowserPreviewButton from '../buttons/BrowserPreviewButton';
import IsLoading from '../IsLoading';

class ContentList extends React.Component {
  componentDidMount() {
    this.props.fetchContents();
  }

  renderList() {
    return this.props.contents.map(content => {
      const linkPath = `/contents/${content.id}/edit`;

      return(
        <tr key={content.id}>
          <td>
            <Link to={linkPath}>
              {content.title}
            </Link>
          </td>
          <td>
            {content.dataType}
          </td>
          <td className="collapsing">
            {content.id}
          </td>
          <td className="collapsing">
            {content.dateModified}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <ShowJsonButton node={content} type="icon"/>
              <BrowserPreviewButton node={content} type="icon"/>
              <Button buttonType="icon"
                      iconType="trash alternate outline"
                      tooltipText="Delete Content"
                      tooltipPosition="top right"
                      onClick={() => this.props.deleteContent(content.id)}>Delete Content
              </Button>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui two column grid">
          <div className="row">
            <div className="left floated column">
              <h1>Content List</h1>
            </div>
            <div className="right floated right aligned column">
              <Button linkTo="/contents/new"
                      buttonType="primary"
                      iconType="plus"
                      tooltipText="New Content"
                      tooltipPosition="top center">
                New Content
              </Button>
            </div>
          </div>
        </div>

        <table className="ui celled striped compact table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Data Type</th>
              <th>ID</th>
              <th>Date Modified</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>

        <IsLoading isLoading={this.props.isLoading} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    contents: state.contents,
    isLoading: state.metadata.isLoading
  };
}

const mapDispatchToProps = { fetchContents, deleteContent };


export default connect(mapStateToProps, mapDispatchToProps) (ContentList);
