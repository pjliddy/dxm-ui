import React from 'react';
import Field from './Field';
import ShowJson from './ShowJson';

class AssetForm extends React.Component {
  state = {
    selectedFile: ''
  };

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.selectedFile);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.onFormUpdate({ name, value });
  }

  handleFileChange = (event) => {
    const { name } = event.target;
    const value = event.target.files[0];

    this.props.onFormUpdate({ name, value });

    this.setState({
      selectedFile: value
    });
  }

  render() {
    const asset = this.props.asset;
    const isNew = this.props.isNew

    /*
      create upload component in React?
      disable upload button during upload?
    */

    return(
      <div className="ui form">
        <p>All fields must have values. Validation to be added.</p>

        <Field type="text"
               name="id"
               label="ID"
               placeholder="id"
               value={asset.id}
               hidden={isNew}
               disabled={true}
               readOnly={true}>
        </Field>

        <Field type="select"
               name="dataType"
               label="Data Type"
               placeholder="data type"
               value={asset.dataType}
               onChange={this.handleChange}>
          <option value="">Select Data Type...</option>
          <option value="asset">Asset</option>
        </Field>

        <Field type="text"
               name="title"
               label="Title"
               placeholder="title"
               value={asset.title}
               required={true}
               onChange={this.handleChange}>
        </Field>


        <div className="field">
          <label htmlFor="file">File</label>
          <input name="file"
                 type="file"
                 onChange={this.handleFileChange} />

          {!isNew ? (
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

        <Field type="text"
               name="dateCreated"
               label="Date Created"
               placeholder="date created"
               value={asset.dateCreated}
               hidden={isNew}
               disabled={true}
               readOnly={true}>
        </Field>

        <Field type="text"
               name="dateModified"
               label="Date Modified"
               placeholder="date modified"
               value={asset.dateModified}
               hidden={isNew}
               disabled={true}
               readOnly={true}>
        </Field>

        <div>
          <button className="ui secondary basic button"
                  title="Cancel"
                  onClick={this.onFormCancel}>
            <i className="close icon"></i>
            Cancel
          </button>
          <ShowJson node={asset}
                    hidden={isNew}>
            Show JSON
          </ShowJson>
          <button className="ui primary button"
                  title="Save"
                  onClick={this.onFormSubmit}>
            <i className="save icon"></i>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default AssetForm;
