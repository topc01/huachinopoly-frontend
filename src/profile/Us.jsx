import Navbar from "../components/Navbar"
// import UserCards from "./UserCards"
import User1 from '../assets/img/usr1.png'
import User2 from '../assets/img/usr1.png'
import './Us.css'

function UserCards() {
    return (
        <>
            <img src={User1} className='logo' alt="user1-picture" />
            <img src={User2} className='logo' alt="user2-picture" />
        </>
    )
}
export default function Us() {
    return (
        <>
            <Navbar />
            <h1>Conoce al Equipo!</h1>
            <div class="team-card-container">
                <div class="team-card">
                    <img class="team-photo" src={User1} alt="foto1"/>
                    <h2>Tomas Pfingsthorn</h2>
                    <h3>Director de Proyectos</h3>
                    <p>Tomás es un líder de proyectos ingeniero civil de la UC con major en software, con habilidades excepcionales en desarrollo de software. Es capaz de resolver problemas complejos y crear soluciones innovadoras. Su habilidad para liderar y motivar a su equipo asegura que los proyectos se entreguen en tiempo y forma, logrando un alto nivel de satisfacción del cliente.</p>
                </div>
                <div class="team-card">
                <img class="team-photo" src={User2} alt="martin"/>
                <h2>Martin Caldentey</h2>
                <h3>Director de Marketing</h3>
                <p>Martín es el director de marketing e ingeniero civil de la UC en nuestra empresa. Con su amplia experiencia en liderazgo de proyectos y marketing, Martín es un líder natural y motivador para su equipo. Su habilidad técnica excepcional en ingeniería de software le permite crear soluciones innovadoras y resolver problemas complejos. Actualmente dedicado al desarrollo de Monopoly.</p>
                </div>
                <div className="footer">
          <p>Equipo Huachipato Games.</p>

      </div>
            </div>
        </>
    )
}