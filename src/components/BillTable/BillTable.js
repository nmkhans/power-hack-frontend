import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import BillInfo from '../BillInfo/BillInfo';

const BillTable = () => {
    const [billInfo, setBillInfo] = useState([]);
    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setBillInfo(data))
    }, [])

    return (
        <div className="BillTable mt-5">
            <div className="inner__billTable container">
                <div className="billTable__content">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Billing Id</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Paid Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        billInfo.map(info => <BillInfo info={info} />)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BillTable;