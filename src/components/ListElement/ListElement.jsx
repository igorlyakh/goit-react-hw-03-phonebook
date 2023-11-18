import React from 'react';

const ListElement = ({ name, phone, id, onDelete }) => {
  return (
    <li>
      <span>{name}</span>: <span>{phone}</span>{' '}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ListElement;
