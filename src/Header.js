import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({pathname}) {
    const [{basket, user}, dispatch] = useStateValue();

    const handleLogin = () => {
        if (user) {
            dispatch({
                type: 'SET_USER',
                user: null
            })
        }
    }

    return (
        <Navbar collapseOnSelect={true} expand='lg' className='header' variant='dark'>
            {/* Logo on the left of the navbar */}
            {/* <Link to='/'> */}
            <Navbar.Brand as={Link} to='/' href='/' className="header__logoContainer">
                <img className='header__logo' src='https://brand-resources.mcmaster.ca/asset-bank/servlet/file?contentDispositionFilename=ODgwMzA.png-s.png&signature=4f4843462f32504663724e6550414470614e417356656f6a614d4135416b436c44325079494f6f784a7149576959595466546550656d6a4459547a794a61554f4d6b4d4e76754554353042624f71652b5430334d4d7836372f41442b697a756e3570673833344e73416c343d&contentDisposition=inline&lastModified=2018-06-30T04:00:15Z&contentIdentifier=847/gwMzA.png-s.png&contentStoreIdentifier=3' alt='logo'/>
                <div>&nbsp;</div>
                <h5>Textbook Exchange</h5>
            </Navbar.Brand>
            {/* </Link> */}
            <Navbar.Toggle variant='light' aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* 3 links */}
                <Nav className="mr-0 header__nav" activeKey={pathname}>

                    <Nav.Link as={Link} to='/' href='/' className='header__option'>
                        <span className='header__optionLineOne'>Daily</span>
                        <span className='header__optionLineTwo'>Deals</span>
                    </Nav.Link>
    
                    <Nav.Link as={Link} to='/catalog' href='/catalog' className='header__option'>
                        <span className='header__optionLineOne'>View</span>
                        <span className='header__optionLineTwo'>Catalog</span>
                    </Nav.Link>

                    <Nav.Link as={Link} to='/sell' href='/sell' className='header__option'>
                        <span className='header__optionLineOne'>Sell</span>
                        <span className='header__optionLineTwo'>Textbook</span>
                    </Nav.Link>

                    <Nav.Link as={Link} to={!user && '/login'} href='/login' onClick={handleLogin} className='header__option'>
                            <span className='header__optionLineOne'>Hello {user ? user : 'Guest'}</span>
                            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </Nav.Link>
                    
                    <Nav.Link as={Link} to='/cart' href='/cart' className="justify-content-center header__optionBasket">  
                            <span><ShoppingCartIcon/></span>
                            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>           
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>          
        </Navbar>
    )
}

export default Header
