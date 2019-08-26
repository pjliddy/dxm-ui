import React, { memo } from 'react'

import AssetForm from '../../forms/AssetForm';
import LoadingIndicator from '../../LoadingIndicator';
import Redirector from '../../Redirector';

import { SENDING_DATA_MESSAGE } from '../../../config';

const AssetCreateView = props => {
  return (
    <div>
      <Redirector path="/assets" />
      <h1>New Asset</h1>
      <AssetForm asset={props.asset}
                 isNew={true}
                 onFormCancel={props.startRedirect}
                 onFormSubmit={props.startUpload}
                 onFormUpdate={props.updateSelectedAsset}
                 previewJson={props.previewJson}
                 upload={props.upload} />
       <LoadingIndicator isLoading={props.isLoading}
                         message={SENDING_DATA_MESSAGE} />
     </div>
  );
}

export default memo(AssetCreateView);