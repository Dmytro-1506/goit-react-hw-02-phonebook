import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: [],
  name: '',
  number: null
  }
  
  addContact = (newContact) => {
    const isExist = () => {
      return this.state.contacts.find(contact => {
        return (contact.name === newContact.name)
      })
    }

    if (isExist()) {
      return alert(`${newContact.name} is already in contacts`)
    } else {
      return this.setState(prevState => {
        return {contacts: [...prevState.contacts, newContact]}
      })
    }
  }

  findContacts = (event) => {
    const nameContact = event.target.value;
    this.setState({name: nameContact})
    const contactsList = this.state.contacts;
    const newContactsList = contactsList.filter((element) => {
      const checkName = element.name.toLowerCase();
      if (checkName.split(' ').find(name => {
        return name.startsWith(nameContact)
      })) {
        return element
      } else {
        return null
      }
    })
    this.setState({ filter: newContactsList })
  }

  deleteContact = (event) => {
    const contactToDel = event.currentTarget.name;
    const stateContacts = this.state.contacts;
    const newContactsList = stateContacts.filter(contact => {
      if (contact.name === contactToDel) {
        return false
      } else {
        return contact
      }
    })
    this.setState({ contacts: newContactsList })
  }

  render() {
    return (
      <div
        style={{
          width: '800px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#010101',
          margin: '40px auto',
        }}
      >
          <h1 className="title">Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter findContacts={this.findContacts} />
        <ContactList list={this.state.contacts} deleteContact={this.deleteContact} filter={this.state.filter} name={this.state.name} />
      </div>
    )
  }
}
