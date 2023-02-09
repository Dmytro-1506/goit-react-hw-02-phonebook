import './Phonebook.css'

export const Phonebook = ({addContact}) => {
    return <ul className="phonebook">
        <p className="title">Phonebook</p>
        <form className='form' onSubmit={addContact}>
            <p className='form-title'>Name</p>
            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
            />
            <button className='form-btn' type='submit' >Add contact</button>
        </form>
    </ul>
}