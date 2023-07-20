import React from 'react';
import './styles.css';

function ItemList({ title, url, description }) {
  return (
    <div className="item-list">
        <strong>{title}</strong>
        <p>{url}</p>
        <h4>{description}</h4>
        <hr />
    </div>
  )
}

export default ItemList;