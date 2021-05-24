import React from 'react';
import logo from './logo.svg';
import{Table} from 'react-bootstrap'
import './App.css';
import './table.css';

function App() {
  const users=[
    { name:"Mani Kumari",email:"kaki.manikumari@gmail.com",branch:"Cse",age:"20",gender:"Female",contact:"1234578"},
    { name:"Poli Reddy",email: "kaki.polireddy@gmail.com",branch:"Ece",age:"22",gender:"Male",contact:"1298578"},
    { name:"Vara Lakshmi",email:"kaki.varalakshmi@gmail.com",branch:"Civil",age:"21",gender:"Female",contact:"1234548"},
    { name:"Madhu Reddy",email: "pitta.madhureddy@gmail.com",branch:"Eee",age:"22",gender:"Male",contact:"1234978"},
    { name:"Triveni Reddy",email:"pitta.trivenireddy@gmail.com",branch:"Mechanical",age:"21",gender:"Female",contact:"1234988"},
    { name:"Chetana Shree",email:"pitta.chetanashree@gmail.com",branch:"It",age:"19",gender:"Female",contact:"1234778"},
    { name:"Cheran Reddy",email: "pitta.cheranreddy@gmail.com",branch:"Chemical",age:"18",gender:"Male",contact:"12654578"},
    { name:"Mani Kanta",email:   "kaki.manikanta@gmail.com",branch:"Biochemical",age:"20",gender:"Male",contact:"12348768"},
  ]
  return (
    <div className="App">
      <h1>Students Data</h1>
      <Table striped variant="dark">
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Branch</td>
          <td>Age</td>
          <td>Gender</td>
          <td>Contact</td>
        </tr>
        {
          users.map((item,i)=>
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.branch}</td>
          <td>{item.age}</td>
          <td>{item.gender}</td>
          <td>{item.contact}</td>
        </tr>
        )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
