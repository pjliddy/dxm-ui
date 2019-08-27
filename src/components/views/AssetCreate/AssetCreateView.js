import React, { memo } from 'react'

import AssetForm from '../../forms/AssetForm';
import LoadingIndicator from '../../LoadingIndicator';
import Redirector from '../../Redirector';

import { SENDING_DATA_MESSAGE } from '../../../config/constants';

const AssetCreateView = props => {
  const {
    asset,
    isLoading,
    onFormCancel,
    onFormSubmit,
    onFormUpdate,
    previewJson,
    upload
  } = props;

  return (
    <div>
      <Redirector path="/assets" />
      <h1>New Asset</h1>
      <AssetForm asset={asset}
                 isNew={true}
                 onFormCancel={onFormCancel}
                 onFormSubmit={onFormSubmit}
                 onFormUpdate={onFormUpdate}
                 previewJson={previewJson}
                 upload={upload} />
       <LoadingIndicator isLoading={isLoading}
                         message={SENDING_DATA_MESSAGE} />
     </div>
  );
}

export default memo(AssetCreateView);
