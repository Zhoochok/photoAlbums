const React = require('react');

function PhotoItem({ photo }) {
  return (
    <div className="card" data-photoId={photo.id}>
      <img src={photo.img} alt="photo" />
      <h3>{photo.description}</h3>
        <a href={`/photo/${photo.id}/update`}>Изменить</a>
      <button className="btn-delete">Delete photo</button>
    </div>
  );
}

module.exports = PhotoItem;
