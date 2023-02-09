import './Contacts.css'

export const Contacts = ({ list }) => {
    return <div className='contacts'>
        <p className="title">Contacts</p>
        <ul className="contact-list">
            {list.map(item => {
                return <li key={item.id} className='contact-item'>{item.name}</li>
            })}
        </ul>
    </div>
}