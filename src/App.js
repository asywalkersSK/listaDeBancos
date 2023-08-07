import React, { useContext } from 'react';
import { bankContext } from './context/bankContext';

function App() {
  const { bank } = useContext(bankContext);

  return (

<div className="container">
<h1 className="my-4">Lista de Bancos</h1>
<table className="table table-bordered table-striped">
  <thead className="thead-dark">
    <tr>
      <th>Nombre</th>
      <th>Descripción</th>
      <th>Años</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    {bank.map((bank) => ( 
      <tr key={bank.id}>
    <td>{bank.bankName}</td>
    <td>{bank.description}</td>
    <td>{bank.age}</td>
    <td>{bank.url}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
  );
}

export default App;
