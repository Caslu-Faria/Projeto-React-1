import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar/Avatar';
import styles from './Comment.module.css'

function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pps.whatsapp.net/v/t61.24694-24/244742221_489976699420715_4215383149013828570_n.jpg?ccb=11-4&oh=b13a2216e4208f74e9d3f6212e88c421&oe=62D6F2C2" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorTime}>
                            <strong>Lucas Faria</strong>
                            <time title="8 de julho de 2022 ás 17:32" dateTime="2022-07-08 17:32:52">Cerca de 1h atrás</time>
                        </div>
                    
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    

                    <p>Muito incrivel esse teste</p>
              
                  
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment