import React from 'react';
import {Table} from 'react-bootstrap';

class Ordersalesman extends React.Component {
  render() {
    return (

        
        <Table striped bOrdersalesmaned hover variant="dark">
        <thead >
          <tr>
            <th>Identification</th>
            <th>Names</th>
            <th>E-mail</th>
            <th>Date</th>
            <th>Order Number</th>
            <th>Status</th>
            <th>Purchase</th>
           
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
            <td>@mdo</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            
          </tr>
        </tbody>
      </Table>  
    );
    }
}

export default Ordersalesman;