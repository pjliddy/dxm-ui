import React, { memo } from 'react'

import ContentForm from '../../forms/ContentForm';
import LoadingIndicator from '../../LoadingIndicator';
import Redirector from '../../Redirector';

import { SENDING_DATA_MESSAGE } from '../../../config/constants';

const ContentCreateView = props => {
  const {
    content,
    isLoading,
    onFormCancel,
    onFormSubmit,
    onFormUpdate,
    previewHtml,
    previewJson
  } = props;

  return (
    <div>
      <Redirector path="/" />
      <h1>New Content</h1>
      <ContentForm content={content}
                   isNew={true}
                   onFormCancel={onFormCancel}
                   onFormSubmit={onFormSubmit}
                   onFormUpdate={onFormUpdate}
                   previewHtml={previewHtml}
                   previewJson={previewJson}/>
      <LoadingIndicator isLoading={isLoading}
                        message={SENDING_DATA_MESSAGE} />
     </div>
  );
}
export default memo(ContentCreateView);
