import './UserCards.css'
import User1 from '../assets/img/usr1.png'
import User2 from '../assets/img/usr2.png'

export default function UserCards() {
    return (
        <>
            <img src={User1} className='logo' alt="user1-picture" />
            <img src={User2} className='logo' alt="user2-picture" />
        </>
    )
}