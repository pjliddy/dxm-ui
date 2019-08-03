import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContents } from '../../actions';

import ButtonDelete from '../ButtonDelete';
import ButtonJson from '../ButtonJson';
import ButtonPreview from '../ButtonPreview';

class ContentList extends React.Component {
  componentDidMount() {
    this.props.fetchContents();
  }

  renderList() {
    return this.props.contents.map(content => {
      const linkPath = `/contents/edit/${content.id}`;

      // make ContentListItem component
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
              <ButtonJson node={content} />
              <ButtonPreview node={content} />
              <ButtonDelete node={content} />
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    // const loaderStyles = `ui ${this.state.isLoading ? 'active' : ''} inverted dimmer`;

    return (
      <div>
        <Link to="/content/new" className="ui right floated primary button">
          <i className="plus sqaure icon"></i>
          New Content
        </Link>
        <h1>Content List</h1>
        {/*
          <div className={loaderStyles}>
            <div className="ui text loader">Working...</div>
          </div>
        */}
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
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { contents: state.contents };
}

export default connect(mapStateToProps, { fetchContents }) (ContentList);
