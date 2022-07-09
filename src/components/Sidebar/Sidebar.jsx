import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react'
import Avatar from "../Avatar/Avatar";

function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/244742221_489976699420715_4215383149013828570_n.jpg?ccb=11-4&oh=b13a2216e4208f74e9d3f6212e88c421&oe=62D6F2C2"/>

                <strong>Lucas Faria</strong>
                <span>Web Dev at PyxisWeb</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar