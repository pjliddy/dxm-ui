import React, { memo } from 'react'

import AssetForm from '../forms/AssetForm';
import LoadingIndicator from '../LoadingIndicator';
import Redirector from '../Redirector';

import { SENDING_DATA_MESSAGE } from '../../config';

const AssetCreateView = props => {
  return (
    <div>
      <Redirector path="/assets" />
      <h1>New Asset</h1>
      <AssetForm asset={props.asset}
                 upload={props.upload}
                 isNew={true}
                 onFormUpdate={props.updateSelectedAsset}
                 onFormSubmit={props.startUpload}
                 onFormCancel={props.startRedirect}/>
       <LoadingIndicator isLoading={props.isLoading}
                         message={SENDING_DATA_MESSAGE}/>
     </div>
  );
}

export default memo(AssetCreateView);
