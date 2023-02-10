import './Contacts.css'

export const Contacts = ({ list, findContacts, deleteContact, filter, name }) => {
    let curentContactsList = [];
    if (filter.length === 0 && !name) {
        curentContactsList = list;
    } else {
        curentContactsList = filter;
    }
    return <div className='contacts'>
        <p className="title">Contacts</p>
        <p>Find contacts by name</p>
        <input className='find' name="findContacts" onChange={findContacts}></input>
        <ul className="contact-list">
            {curentContactsList.map(item => {
                return <li key={item.id} className='contact-item'>{item.name}: {item.number}
                        <button type="button" className='deleteBtn' name={item.name} onClick={deleteContact}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}