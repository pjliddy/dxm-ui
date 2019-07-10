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
        <div key={item.id}>
          {item.title} - {item.type} - {item.id}
        </div>
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
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
};

export default ContentList;
