import React from 'react';

class AssetForm extends React.Component {
  constructor() {
    super();

    this.apiResource = 'assets';
    this.state = {
      asset: {
        id: '',
        contentType: 'asset',
        title: '',
        dateCreated: '',
        dateModified: '',
        url: ''
      },
      isNew: false,
      selectedFile: ''
    };
  }

  handleChange = (event) => {
    const { asset } = { ...this.state };
    const currentState = asset;
    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ asset: currentState });
  }

  handleFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      asset: this.state.asset,
      file: this.state.selectedFile
    };

    this.props.onFormSubmit(data);
  }

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onFormCancel();
  }

  assetToState() {
    if (this.props.asset.id && this.props.asset.id !== this.state.asset.id ) {
      this.setState({ asset: this.props.asset });
    }
  }

  componentDidMount() {
    this.setState({ isNew: this.props.isNew });
    this.assetToState();
  }

  componentDidUpdate() {
    this.assetToState();
  }

  render() {
    const asset = this.state.asset;
    const isNew = this.state.isNew

    let idField = null;
    let fileInput = null;
    let dateCreatedField = null;
    let dateModifiedField = null;

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
      fileInput = <div className="field">
                   <label htmlFor="dateModified">File</label>
                   <img className="ui big image"
                        src={this.state.asset.url}
                        alt="alt text placeholder"></img>

                 </div>;
    } else {
      fileInput = <div className="required field">
                    <label htmlFor="file">File</label>
                    <input name="fileName"
                           type="file"
                           onChange={this.handleFileChange} />
                  </div>;
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
          <label htmlFor="contentType">Content Type</label>
          <select name="contentType"
                 type="text"
                 placeholder="content type"
                 value={asset.contentType}
                 onChange={this.handleChange}>
                    <option value="">Content Type</option>
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
        {fileInput}
        {dateCreatedField}
        {dateModifiedField}
        <div>
          <button className="ui secondary basic button"
                  title="Cancel"
                  onClick={this.onFormCancel}>
            <i className="close icon"></i>
            Cancel
          </button>
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
