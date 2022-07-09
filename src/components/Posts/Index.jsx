import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import styles from './Post.module.css'

function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://pps.whatsapp.net/v/t61.24694-24/244742221_489976699420715_4215383149013828570_n.jpg?ccb=11-4&oh=b13a2216e4208f74e9d3f6212e88c421&oe=62D6F2C2" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Faria</strong>
                        <span>Web Dev at PyxisWeb</span>
                    </div>
                </div>

                <time title="8 de julho ás 17:32" dateTime="2022-07-08 17:32:52">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>post de teste.</p>
                <p><a href="">Link de teste</a></p>
                <p>é tudo um teste, tudo placebo.</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}

export default Post