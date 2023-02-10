import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';

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
  
  addContact = (event) => {
    event.preventDefault()
    const newId = nanoid();
    const newName = event.target.name.value;
    const newNumber = event.target.number.value;
    const currentContact = {
      id: newId,
      name: newName,
      number: newNumber
    }
    const stateContacts = this.state.contacts;
    stateContacts.find(contact => {
      if (contact.name === newName) {
        alert (`${newName} is already in contacts`)
        return true
      } else {
        return false
      }
    }) || stateContacts.push(currentContact);
    this.setState({ contacts: stateContacts })
    event.target.reset()
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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook addContact={this.addContact} />
        <Contacts list={this.state.contacts} findContacts={this.findContacts} deleteContact={this.deleteContact} filter={this.state.filter} name={this.state.name} />
      </div>
    )
  }
}

