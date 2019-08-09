import React, { memo } from 'react'

import ContentForm from '../forms/ContentForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

const ContentEditView = props => {
  return (
    <div>
      <Redirector path="/" />
      <h1>Edit Content</h1>
      <ContentForm content={props.content}
                   onFormUpdate={props.updateSelectedContent}
                   onFormSubmit={props.updateContent}
                   onFormCancel={props.startRedirect}/>
      <LoadingIndicator isLoading={props.isLoading}
                        message={SENDING_DATA_MESSAGE}/>
    </div>
  );
};

export default memo(ContentEditView);
