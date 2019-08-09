import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import Button from '../buttons/Button';
import ShowJsonButton from '../buttons/ShowJsonButton';
import BrowserPreviewButton from '../buttons/BrowserPreviewButton';
import LoadingIndicator from '../LoadingIndicator';

import { RECEIVING_DATA_MESSAGE } from '../../config';

const ContentListView = (props) => {
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
          {renderList(props)}
        </tbody>
      </table>

      <LoadingIndicator isLoading={props.isLoading}
                        message={RECEIVING_DATA_MESSAGE}/>
    </div>
  );
};

const renderList = props => {
  return props.contents.map(content => {
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
                    onClick={() => props.deleteContent(content.id)}>Delete Content
            </Button>
          </div>
        </td>
      </tr>
    );
  });
};

export default memo(ContentListView);
