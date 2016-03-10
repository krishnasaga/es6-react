import React from 'react'
export default class Book extends React.Component {

  render(): any {
    var info = this.props.info,
        name = info.name,
        author = info.author,
        description = info.description;
    return <div>
              <h1>{name}</h1>
              <h2>{author ? author : 'Author unknown'}</h2>
              <p>{description ? description : 'Description not available'}</p>
          </div>;
  }
}
