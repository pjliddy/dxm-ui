import React, { memo } from 'react'

import AssetForm from '../../forms/AssetForm';
import LoadingIndicator from '../../LoadingIndicator';
import Redirector from '../../Redirector';

import { SENDING_DATA_MESSAGE } from '../../../config/constants';

const AssetEditView = props => {
  const {
    asset,
    isLoading,
    previewJson,
    startRedirect,
    startUpload,
    updateSelectedAsset,
    upload
  } = props;

  return (
    <div>
      <Redirector path="/assets" />
      <h1>Edit Asset</h1>
      <AssetForm asset={asset}
                 onFormCancel={startRedirect}
                 onFormSubmit={startUpload}
                 onFormUpdate={updateSelectedAsset}
                 previewJson={previewJson}
                 upload={upload} />
      <LoadingIndicator isLoading={isLoading}
                        message={SENDING_DATA_MESSAGE} />
    </div>
  );
}

export default memo(AssetEditView);
