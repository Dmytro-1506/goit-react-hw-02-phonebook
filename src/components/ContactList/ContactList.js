import './ContactList.css'

export const ContactList = ({ list, deleteContact, filter, name }) => {
    let curentContactsList = [];
    if (filter.length === 0 && !name) {
        curentContactsList = list;
    } else {
        curentContactsList = filter;
    }
    return <div className='contacts'>
        <ul className="contact-list">
            {curentContactsList.map(item => {
                return <li key={item.id} className='contact-item'>{item.name}: {item.number}
                        <button type="button" className='deleteBtn' name={item.name} onClick={deleteContact}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}