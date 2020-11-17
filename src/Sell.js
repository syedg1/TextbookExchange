import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import bsCustomFileInput from "bs-custom-file-input"
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';

import './Sell.css';

function Sell() {
    const [fileName, setFileName] = useState("Upload Textbook Image...");
    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {bsCustomFileInput.init()}, [])
    const { register, handleSubmit, errors, reset } = useForm();
    
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
        setShowModal(true);
    }

    useEffect(async () => {
        const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset(result); // asynchronously reset your form values
      }, [reset])


    return (
        <div className='sell'>
            <h1 className='sell__header'>Sell Your Textbook</h1>
            <Form className='sell__form' noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formTitle">
                        <Form.Label className='sell__label'>Textbook Title</Form.Label>
                        <Form.Control name='title' ref={register({ required: true })} placeholder="Enter the title here..." />
                        {errors.title && <p className='sell__error'>This field is required!</p>}
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formDesc">
                        <Form.Label  className='sell__label'>Description</Form.Label>
                        <Form.Control as='textarea' rows={3} name='desc' ref={register({ required: true })} placeholder="Describe textbook content..." />
                        {errors.desc && <p className='sell__error'>This field is required!</p>}
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col lg={6} md={12}>
                    <Form.Group controlId="formCondition">
                        <Form.Label className='sell__label'>Condition</Form.Label>
                        <Form.Control name='condition' ref={register({ required: true })} as='select' defaultValue='Select condition rating...'>
                            <option value=''>Select condition rating...</option>
                            <option value={1}>1 - Damaged</option>
                            <option value={2}>2 - Minor Damages</option>
                            <option value={3}>3 - Used</option>
                            <option value={4}>4 - Mint Condition</option>
                            <option value={5}>5 - Like New</option>
                        </Form.Control>
                        {errors.condition && <p className='sell__error'>This field is required!</p>}
                    </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                    <Form.Group controlId="formPrice">
                        <Form.Label  className='sell__label'>Asking Price ($CAD)</Form.Label>
                        <Form.Control name='price' ref={register({ required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/  })} placeholder="eg. 79.99" />
                        {errors.price && errors.price.type == 'required' && <p className='sell__error'>This field is required!</p>}
                        {errors.price && errors.price.type == 'pattern' && <p className='sell__error'>This field requires a numerical decimal input (eg. 79.99)!</p>}
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className='mt-4'>
                    <Col md={12}>
                        <Form.Group controlId="formFile">
                            <Form.File id="custom-file-label"  onChange={(e) => setFileName(e.target.files[0].name)} custom>
                            <Form.File.Input name='image' ref={register({ required: true })} accept="image/*" />
                            <Form.File.Label data-browse="Browse">
                            {fileName}
                            </Form.File.Label>
                            </Form.File>
                            {errors.image && <p className='sell__error'>This field is required!</p>}
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button type="submit" className="formSubmit">
                    Submit
                </Button>
            </Form>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Thank You!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Submission under review</h5>
                    <p>
                        You will receive an email once your listing has been approved for sale! Please allow 1-3 business days.

                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Sell
