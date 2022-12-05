import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      <h2>Quantidade de itens: {posts.length} Na minha API</h2>
      <button className="btn btn-info btn-sm">Inserir</button>
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
                <button className="btn btn-info btn-sm">Update</button>
              </td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
