import React from 'react';
import Button from 'react-bootstrap/Button';

const BillInfo = ({ info }) => {
    
    const {_id, fullName, email, phone, paidAmount} = info;
    return (
        <tr>
            <td>{_id}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>${paidAmount}</td>
            <td>
                <Button className="me-3 bg-warning border-0">Edit</Button>
                <Button className="bg-danger border-0">Delete</Button>
            </td>
        </tr>
    );
};

export default BillInfo;