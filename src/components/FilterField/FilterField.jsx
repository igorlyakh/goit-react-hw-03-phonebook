import React from 'react';
import { Wrapper } from './FilterField.styled';

const FilterField = ({ contactFilter, onFilter }) => {
  return (
    <Wrapper>
      <p>Find contact by name</p>
      <input
        type="text"
        value={contactFilter}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default FilterField;
