import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BillModal from '../BillModal/BillModal';

const BillHeader = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="BillHeader">
            <div className="inner__billheader container">
                <div className="billheader__content bg-dark p-2">
                    <div className="row row-cols-lg-3 text-center">
                        <div className="bill__heading">
                            <h4 className="text-white fw-semibold">Billings</h4>
                        </div>
                        <div className="bill__search">
                            <Form>
                                <Form.Control type="text" placeholder="Search" />
                            </Form>
                        </div>
                        <div className="add__bill">
                            <Button onClick={() => setModalShow(true)} variant="light" bg="dark">Add New Bill</Button>
                            <BillModal show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillHeader;