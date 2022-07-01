import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import UpdateModal from './../UpdateModal/UpdateModal';

const BillInfo = ({ info, refetch }) => {
    const [editId, setEditId] = useState('');
    const [modalShow, setModalShow] = useState(false);
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
                    refetch();
                }
            })
    }

    const handleUpdate = (id) => {
        setEditId(id)
        setModalShow(true);
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>${paidAmount}</td>
            <td>
                <Button onClick={() => handleUpdate(_id)} className="me-3 bg-warning border-0">Edit</Button>
                <Button onClick={() => handleDelete(_id)} className="bg-danger border-0">Delete</Button>
            </td>
            <UpdateModal show={modalShow} editId={editId} setModalShow={setModalShow} refetch={refetch} />
        </tr>
    );
};

export default BillInfo;