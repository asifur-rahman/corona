import React, { Component } from 'react'

export class Admin extends Component {
    render() {
        return (
            <div style={{background:"#233",height:"100vh"}}>
            <div>
                <table class="table">
  <thead class="thead-dark">
    <tr >
      <th scope="col">SI No</th>
      <th scope="col">Age</th>
      <th scope="col">Sex</th>
      <th scope="col">Temperature</th>
      <th scope="col">Assessment Score</th>
      <th scope="col">COVID-19 Result</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{color:"white"}}>
      <th scope="row">1</th>
      <td>#</td>
      <td>#</td>
      <td>#</td>
      <td>#</td>
      <td>#</td>
    </tr>
    
  </tbody>
</table>
            </div>
            </div>
        )
    }
}

export default Admin
