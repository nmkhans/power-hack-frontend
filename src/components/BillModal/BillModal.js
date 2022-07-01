import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const BillModal = (props) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch('https://nmk-power-hack.herokuapp.com/add-billing', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    props.refetch();
                    props.setModalShow(false);
                    toast.success('New Bill Added')
                }
            })
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Bill Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                        {...register("fullName", {
                            required: {
                                value: true,
                                message: 'Name is required',
                            }
                        })}
                    />
                    {
                        (errors.fullName?.type === 'required') && (
                            <Form.Text className="text-danger d-block">
                                {errors.fullName.message}
                            </Form.Text>
                        )
                    }
                    <Form.Label className="mt-3">Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                                value: /[A-z0-9]+@[a-z]+\.[a-z]{1,2}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    {
                        (errors.email?.type === 'required' || errors.email?.type === 'pattern') && (
                            <Form.Text className="text-danger d-block">
                                {errors.email.message}
                            </Form.Text>
                        )
                    }
                    <Form.Label className="mt-3">Phone:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Number"
                        {
                        ...register("phone", {
                            required: {
                                value: true,
                                message: "Phone number is required."
                            }
                        })
                        }
                    />
                    {
                        (errors.phone?.type === 'required') && (
                            <Form.Text className="text-danger d-block">
                                {errors.phone.message}
                            </Form.Text>
                        )
                    }
                    <Form.Label className="mt-3">Paid Amount:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Paid Amount"
                        {...register("paidAmount", {
                            required: {
                                value: true,
                                messgae: "Amount is required"
                            },
                            min: {
                                value: 100,
                                message: "Amount has to be above 100"
                            }
                        })}
                    />
                    {
                        (errors.paidAmount?.type === 'required' || errors.paidAmount?.type === "min") && (
                            <Form.Text className="text-danger d-block">
                                {errors.paidAmount.message}
                            </Form.Text>
                        )
                    }

                    <Form.Control type="submit" value="Submit" className="bg-dark text-white mt-5" />
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default BillModal;