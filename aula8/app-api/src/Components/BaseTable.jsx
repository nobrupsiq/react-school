import  {Table}  from "react-bootstrap"
import axios from "axios"
import { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function BaseTable() {
    const [rows, setRows] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/alunos')
        .then((response) => setRows(response.date))
        .then((error) => console.log(error))
    }, [])
        
  return (
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => ( 
            <tr key={rows.id}>
            <td>{row.id}</td>
            <td>{row.nome}</td>
            <td>{row.email}</td>
            <td>{row.idade}</td>
          </tr>
        ))}
        
      </tbody>
    </Table>
  );
}
export default BaseTable