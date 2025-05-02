import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

// Author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/nobrupsiq.png",
      name: 'Bruno Pires',
      role: 'CTO SaquaremaGo'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat'},
      {type: 'link', content: 'Bruno.design/doctorcare'},
    ],
    publishedAt: new Date('2025-04-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://www.github.com/jessicarsmos.png",
      name: 'Jessica Ramos',
      role: 'Marketing SaquaremaGo'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat'},
      {type: 'link', content: 'Jessica.design/doctorcare'},
    ],
    publishedAt: new Date('2025-05-01 20:00:00'),
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </>
  );
}
