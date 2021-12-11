import React from 'react';
import {Table} from 'react-bootstrap';

class Perfil extends React.Component {
  render() {
    return (

        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Identification</th>
            <th>Names</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Zone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </Table>  
    );
    }
}

export default Perfil;