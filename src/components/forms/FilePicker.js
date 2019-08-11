import React from 'react';

const FilePicker = props => {
  if (props.hidden)  return null;

  const fieldClasses = `${props.required ? 'required ' : ''}${props.disabled ? 'disabled ' : ''}field`;

  return (
    <div className={fieldClasses}>
      <label htmlFor="file">File</label>
      <input name="file"
             type="file"
             onChange={(e) => props.onChange(e.target.files[0])} />

      {props.isUploading && <p>Uploading: {props.progress}%</p>}

      {!props.isUploading && props.preview ? (
        <div>
          <div className="ui hidden divider"></div>
          <img className="ui big image"
               src={props.asset.url}
               alt="alt text placeholder">
           </img>
           <div className="ui divider"></div>
         </div>
       ) : ''}
    </div>
  );
}

export default FilePicker;
