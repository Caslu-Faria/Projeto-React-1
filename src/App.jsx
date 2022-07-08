import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import Post from "./components/Posts"

import styles from './App.module.css';
import "./global.css"

function App() {
  return (
    <div>

      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          <Post author="Lucas Faria" content="Lorem ipsum dolor sit amet consectetur..." />
        </main>

      </div>

    </div>  
  )
}

export default App
