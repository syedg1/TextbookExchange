import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import './Catalog.css';

function Catalog() {
    return (
        <div className='catalog'>
            <h1 className='catalog__header'>Catalog</h1>
            <Row className='catalog__row'>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '1'
                        title = 'Introduction to Robotics : Mechanics and Control'
                        price = {189.99}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780133489798&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '2'
                        title = 'The Leadership Experience'
                        price = {199.99}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781337102278&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '3'
                        title = 'Health Illness and Aging'
                        price = {149.50}
                        rating = {3}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780826134042&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '4'
                        title = 'Real Analysis'
                        price = {79.99}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780521497565&full_ind='
                    />
                </Col>
            </Row>
            <Row className='catalog__row'>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '5'
                        title = 'Propositional and Predicate Calculus'
                        price = {99.50}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781852339210&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '6'
                        title = 'Introduction to Electrodynamics'
                        price = {84.50}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781108420419&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '7'
                        title = 'Clean Code: An Introduction to Agile Software Craftmanship'
                        price = {62.50}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780132350884&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '8'
                        title = 'Performance Modelling and Design of Computer Systems'
                        price = {71.99}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781139603966&full_ind='
                    />
                </Col>
            </Row>
            <Row className='catalog__row'>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '9'
                        title = 'Physical Biology of the Cell'
                        price = {209.99}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780815344506&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '10'
                        title = 'Soft Condensed Matter'
                        price = {118.50}
                        rating = {3}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780198505891&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '11'
                        title = 'Engineering Hydrology: An Introduction to Processes, Analysis, and Modelling'
                        price = {169.75}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781259641978&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '12'
                        title = 'Principles of Foundation Engineering'
                        price = {164.95}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781337705028&full_ind='
                    />
                </Col>
            </Row>
            <Row className='catalog__row'>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '13'
                        title = 'Plasma Physics: An Introduction to Laboratory, Space, and Fusion Plasma'
                        price = {133.95}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9783319875538&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '14'
                        title = 'Silicon VLSI Technology'
                        price = {190.00}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780130850379&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '15'
                        title = 'Starting Out With Python'
                        price = {199.99}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780134444321&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '16'
                        title = 'Pharmacology: An Introduction'
                        price = {164.95}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780073513812&full_ind='
                    />
                </Col>
            </Row>
            <Row className='catalog__row catalog__lastRow'>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '17'
                        title = 'Linear System Theory and Design'
                        price = {269.95}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780199959570&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '18'
                        title = 'Power System Analysis and Design'
                        price = {199.95}
                        rating = {3}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781305632134&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '19'
                        title = 'Probability and Stochastic Processes: An Introduction for Electrical and Computer Engineers'
                        price = {169.99}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781118324561&full_ind='
                    />
                </Col>
                <Col md={3} className='px-0'>
                    <Product 
                        id = '20'
                        title = 'Measurements and Their Uncertainties: A Practical Guide to Modern Error Analysis'
                        price = {39.99}
                        rating = {3}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780199566334&full_ind='
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Catalog
