import React from 'react';

const FilePicker = props => {
  const {
    asset,
    disabled,
    hidden,
    isUploading,
    onChange,
    preview,
    progress,
    required
   } = props;

  if (hidden) return null;

  const fieldClasses = `${required ? 'required ' : ''}${disabled ? 'disabled ' : ''}field`;

  return (
    <div className={fieldClasses}>
      <label htmlFor="file">File</label>
      <input name="file"
             type="file"
             onChange={(e) => onChange(e.target.files[0])} />

      {isUploading && <p>Uploading: {progress}%</p>}

      {!isUploading && preview ? (
        <div>
          <div className="ui hidden divider"></div>
          <img className="ui big image"
               src={asset.url}
               alt="alt text placeholder">
           </img>
           <div className="ui divider"></div>
         </div>
       ) : ''}
    </div>
  );
}

export default FilePicker;
