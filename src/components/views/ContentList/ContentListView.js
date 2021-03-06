import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import Button from '../../forms/Button';
import LoadingIndicator from '../../LoadingIndicator';

import { CONTENT_RESOURCE, RECEIVING_DATA_MESSAGE } from '../../../config/constants';

// use propTypes?

const ContentListView = props => {
  const {
    contents,
    deleteContent,
    isLoading,
    previewHtml,
    previewJson
  } = props;

  const renderPageHeader = () => {
    return(
      <div className="ui two column grid">
        <div className="row">
          <div className="left floated column">
            <h1>Content List</h1>
          </div>
          <div className="right floated right aligned column">

            {/*
              hard coded linkTo path and button labels
              move param strings to config?
            */}

            <Button linkTo="/contents/new"
                    buttonType="primary"
                    iconType="plus"
                    tooltipText="New Content"
                    tooltipPosition="left center">
              New Content
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const renderList = contents => {
    return contents.map(content => {
      const linkPath = `/${CONTENT_RESOURCE}/${content.id}/edit`;

      return(
        <tr key={content.id}>
          <td>
            <Link to={linkPath}>
              {content.title}
            </Link>
          </td>
          <td>
            {content.resourceType}
          </td>
          <td className="collapsing">
            {content.id}
          </td>
          <td className="collapsing">
            {content.dateModified}
          </td>
          <td className="collapsing">
            <div className="ui icon buttons">
              <Button buttonType="icon"
                      iconType="code"
                      tooltipText="Show JSON"
                      tooltipPosition="top center"
                      onClick={() => previewJson(content)}>
                Show JSON
              </Button>
              <Button buttonType="icon"
                      iconType="desktop"
                      tooltipText="Preview in Browser"
                      tooltipPosition="top center"
                      onClick={() => previewHtml(content)}>
                Preview in Browser
              </Button>
              <Button buttonType="icon"
                      iconType="trash alternate outline"
                      tooltipText="Delete Content"
                      tooltipPosition="top right"
                      onClick={() => deleteContent(content.id)}>Delete Content
              </Button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      {renderPageHeader()}
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
          {renderList(contents)}
        </tbody>
      </table>

      <LoadingIndicator isLoading={isLoading}
                        message={RECEIVING_DATA_MESSAGE} />
    </div>
  );
};

export default memo(ContentListView);
