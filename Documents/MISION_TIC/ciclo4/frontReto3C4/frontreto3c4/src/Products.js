import React from 'react';
import { Table } from 'react-bootstrap';


class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            date: "2021-09-15T05:00:00.000+00:00",
            status: "pendiente",

        };
    }
    render() {
        //const d = new Date();
        return (


            <Table striped bordered hover  variant="primary">

                <thead >
                    <tr>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Stock</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                     
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        

                    </tr>

                </tbody>
           
            

            </Table>
            
           
        );
    }
}

export default Products;