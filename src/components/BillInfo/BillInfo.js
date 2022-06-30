import React from 'react';
import Button from 'react-bootstrap/Button';

const BillInfo = ({ info, refetch }) => {

    const { _id, fullName, email, phone, paidAmount } = info;
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete-billing/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    refetch();
                }
            })
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>${paidAmount}</td>
            <td>
                <Button className="me-3 bg-warning border-0">Edit</Button>
                <Button onClick={() => handleDelete(_id)} className="bg-danger border-0">Delete</Button>
            </td>
        </tr>
    );
};

export default BillInfo;