import React from 'react';
import { Table } from 'react-bootstrap';
import Products from './Products';
import SelectStatus from './SelectStatus';


class Orderdetails extends React.Component {
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


            <><Table striped bordered hover variant="info">

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Order Nambre</th>
                        <th>Status</th>
                        <th>Choice a Status</th>
                        <th>Save</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.date}</td>
                        <td>Mark</td>
                        <td>{this.state.status}</td>
                        <td>
                            <SelectStatus />
                        </td>
                        <td>@mdo</td>

                    </tr>

                </tbody>



            </Table>
            <Products /></>
           
        );
    }
}

export default Orderdetails;