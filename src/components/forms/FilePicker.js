import React from 'react';

class FilePicker extends React.Component {
  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    if (this.props.hidden) {
      return null;
    }

    const fieldClasses = `${this.props.required ? 'required ' : ''}${this.props.disabled ? 'disabled ' : ''}field`;

    return (
      <div className={fieldClasses}>
        <label htmlFor="file">File</label>
        <input name="file"
               type="file"
               onChange={(e) => this.props.onChange(e.target.files[0])} />

        {this.props.isUploading && <p>Uploading: {this.props.progress}%</p>}

        {this.props.preview ? (
          <div>
            <div className="ui hidden divider"></div>
            <img className="ui big image"
                 src={this.props.asset.url}
                 alt="alt text placeholder">
             </img>
             <div className="ui divider"></div>
           </div>
         ) : ''}
      </div>
    );
  }
}

export default FilePicker;
