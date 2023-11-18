import ListElement from 'components/ListElement';
import React from 'react';
import { List, Wrapper } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Wrapper>
      <h2>Contacts</h2>

      <List>
        {contacts.map(contact => {
          return (
            <ListElement
              name={contact.name}
              phone={contact.phone}
              id={contact.id}
              onDelete={onDelete}
              key={contact.id}
            />
          );
        })}
      </List>
    </Wrapper>
  );
};

export default ContactsList;
