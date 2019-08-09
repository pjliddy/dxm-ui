import React, { memo } from 'react'

import ContentForm from '../forms/ContentForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

const ContentCreate = props => {
  return (
    <div>
      <Redirector path="/" />
      <h1>New Content</h1>
      <ContentForm content={props.content}
                   isNew={true}
                   onFormUpdate={props.updateSelectedContent}
                   onFormSubmit={props.createContent}
                   onFormCancel={props.startRedirect}/>
      <LoadingIndicator isLoading={props.isLoading}
                        message={SENDING_DATA_MESSAGE}/>
     </div>
  );
}
export default memo(ContentCreate);
