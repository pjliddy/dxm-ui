import React from 'react';
// import { ASSET_RESOURCE  } from '../config';

class AssetForm extends React.Component {
  state = {
    asset: {
      id: '',
      dataType: 'asset',
      title: '',
      dateCreated: '',
      dateModified: '',
      url: '',
      file: { }
    },
    isNew: false,
    selectedFile: ''
  };

  componentDidMount() {
    this.setState({
      isNew: this.props.isNew
    });
  }

  componentDidUpdate() {
    if (this.props.asset.id && !this.state.asset.id) {
      this.setState({
        asset: this.props.asset,
      });
    }
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit({
      asset: this.state.asset,
      file: this.state.selectedFile
    });
  }

  // create controlled field component
  handleChange = (event) => {
    const { asset } = { ...this.state };
    const currentState = asset;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ asset: currentState });
  }

  handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    const fileData = {
      name: fileObj.name,
      size: fileObj.size,
      type: fileObj.type
    };
    const { asset } = { ...this.state };
    const currentState = asset;
    currentState.file = fileData;

    this.setState({
      file: currentState.file,
      selectedFile: fileObj
    });
  }

  // onShowJson = () => {
  //   const asset = this.state.asset;
  //   window.open(`${CONTENT_LAKE_URL}/${asset.dataType}/${asset.id}.json`);
  // }

  render() {
    const asset = this.state.asset;
    const isNew = this.props.isNew

    let idField = null;
    let imagePreview = null;
    let dateCreatedField = null;
    let dateModifiedField = null;
    let jsonButton = null;

    // move to separate functions / conditional components

    if (!isNew) {
      idField = <div className="disabled field">
                  <label htmlFor="id">ID</label>
                  <input name="id"
                         type="text"
                         placeholder="id"
                         value={asset.id}
                         readOnly />
                 </div>;

      dateCreatedField =  <div className="disabled field">
                            <label htmlFor="dateCreated">Date Created</label>
                            <input name="dateCreated"
                                   type="text"
                                   placeholder="date created"
                                   value={asset.dateCreated}
                                   readOnly />
                          </div>;

      dateModifiedField = <div className="disabled field">
                            <label htmlFor="dateModified">Date Modified</label>
                            <input name="dateModified"
                                   type="text"
                                   placeholder="date modifed"
                                   value={asset.dateModified}
                                   readOnly />
                          </div>;

      imagePreview =  <div>
                        <div className="ui hidden divider"></div>
                        <img className="ui big image"
                         src={this.state.asset.url}
                         alt="alt text placeholder">
                       </img>
                       <div className="ui divider"></div>
                     </div>;

      jsonButton = <button className="ui button"
                          onClick={this.onShowJson}>
                     <i className="code icon"></i>
                     Show JSON
                   </button>;
  }

    /*
      create upload component in React?
      disable upload button during upload?
    */

    return(
      <div className="ui form">
        <p>All fields must have values. Validation to be added.</p>
        {idField}
        <div className="required field">
          <label htmlFor="dataType">Data Type</label>
          <select name="dataType"
                 type="text"
                 placeholder="content type"
                 value={asset.dataType}
                 onChange={this.handleChange}>
                    <option value="">Data Type</option>
                    <option value="asset">Asset</option>
          </select>
        </div>
        <div className="required field">
          <label htmlFor="title">Title</label>
          <input name="title"
                 type="text"
                 placeholder="title"
                 value={asset.title}
                 onChange={this.handleChange} />
        </div>
        <div className="field">
          <label htmlFor="file">File</label>
          <input name="fileName"
                 type="file"
                 onChange={this.handleFileChange} />
          {imagePreview}
        </div>
        {dateCreatedField}
        {dateModifiedField}
        <div>
          <button className="ui secondary basic button"
                  title="Cancel"
                  onClick={this.onFormCancel}>
            <i className="close icon"></i>
            Cancel
          </button>
          {jsonButton}
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
