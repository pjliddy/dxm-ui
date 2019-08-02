import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNodes } from '../../actions';

import ButtonDelete from '../ButtonDelete';
import ButtonJson from '../ButtonJson';
import ButtonPreview from '../ButtonPreview';

class ContentList extends React.Component {
  renderList() {
    return this.props.nodes.map(node => {
      const linkPath = `/content/edit/${node.id}`;

      return(
        <tr key={node.id}>
          <td>
            <Link to={linkPath} className="node">
              {node.title}
            </Link>
          </td>
          <td>
            {node.dataType}
          </td>
          <td className="collapsing">
            {node.id}
          </td>
          <td className="collapsing">
            {node.dateModified}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <ButtonJson node={node} />
              <ButtonPreview node={node} />
              <ButtonDelete node={node} />
            </div>
          </td>
        </tr>
      );
    });
  }

  componentDidMount() {
    this.props.fetchNodes();
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
  return { nodes: state.nodes };
}

export default connect(mapStateToProps, { fetchNodes }) (ContentList);
