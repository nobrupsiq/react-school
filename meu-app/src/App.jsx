import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  // PEGAR - GET
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  // INSERINDO O POST -CONST
  const handPost = async () => {
    const post = { title: "Novo título", body: "Novo" };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
  };

  // ATUALIZANDO - put
  const handUpdate = async (update) => {
    update.title = "Atualizando os valores";
    await axios.put(apiEndPoint + "/" + update.id);
    const updateClone = [...posts];
    const index = updateClone.indexOf(update);
    updateClone[index] = { ...update };
    setPosts(updateClone);
  };

  // DELETAR - DELETE
  const handDelete = async (del) => {
    await axios.delete(apiEndPoint + "/" + del.id + del);
    setPosts(posts.filter((p) => p.id !== del.id));
  };

  return (
    <div className="container">
      <h2>Quantidade de itens: {posts.length} Na minha API</h2>
      <button onClick={handPost} className="btn btn-info btn-sm">
        Inserir
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Atualização</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((posts) => (
            <tr key={posts.id}>
              <td>{posts.title}</td>
              <td>
                <button
                  onClick={() => handUpdate(posts)}
                  className="btn btn-info btn-sm"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handDelete(posts)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
