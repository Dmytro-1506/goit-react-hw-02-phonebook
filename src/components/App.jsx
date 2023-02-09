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
  filter: '',
  name: '',
  number: ''
  }
  
  addContact = (event) => {
    event.preventDefault()
    const newId = nanoid();
    const newName = event.target.name.value;
    const newContant = {
      id: newId,
      name: newName,
      number: ''
    }
    this.setState({ contacts: this.state.contacts.push(newContant) });
    console.log(this.state.contacts)
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
        <Contacts list={this.state.contacts} />
      </div>
    );
  }
}

