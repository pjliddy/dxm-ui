import React from 'react';
import contentIndex from '../api/contentIndex';

class ContentList extends React.Component {
  state = { items: [] };

  getContent = async () => {
    const response = await contentIndex.get();
    this.setState({ items: response.data });
  }

  renderList() {
    return this.state.items.map(item => {
      return(
        <tr key={item.id}>
          <td>
            {item.title}
          </td>
          <td>
            {item.type}
          </td>
          <td className="collapsing">
            {item.id}
          </td>
          <td className="collapsing">
            <div class="ui icon buttons">
              <button class="ui basic button"><i class="edit outline icon"></i></button>
              <button class="ui basic button"><i class="trash alternate outline icon"></i></button>
            </div>
          </td>
        </tr>
      );
    });
  }

  componentDidMount() {
    this.getContent();
  }

  render() {
    return (
      <div>
        <h1>Content List</h1>
        <table className="ui celled striped compact table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ContentList;
