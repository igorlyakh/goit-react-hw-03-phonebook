import { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from './AddContactForm';
import ContactsList from './ContactsList';
import FilterField from './FilterField';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onNameSubmit = person => {
    const checkContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === person.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${person.name} is already in contacts.`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { ...person, id: nanoid() }],
      };
    });
  };

  onDelete = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onFilter = value => {
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <AddContactForm onNameSubmit={this.onNameSubmit} />
        <FilterField contactFilter={filter} onFilter={this.onFilter} />
        {contacts.length > 0 && (
          <ContactsList contacts={visibleContacts} onDelete={this.onDelete} />
        )}
      </>
    );
  }
}
