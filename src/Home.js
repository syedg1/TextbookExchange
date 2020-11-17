import React from 'react';
import Row from 'react-bootstrap/Row';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product.js';
import PrevArrow from './PrevArrow.js';
import NextArrow from './NextArrow.js';
import './Home.css';

function Home() {

    const banner_photos = [
        {
            name: 'Photo 1',
            url: 'https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Events/XCM_Manual_1237913_1255421_CA_OTC20_ca_ca_otu_gw_hero_phase2_ca_en_3237561_3000x1200_2X_en_CA._CB408562911_.jpg'
        },
        {
            name: 'Photo 2',
            url: 'https://images-na.ssl-images-amazon.com/images/G/15/Events/2020/Dash/Q4_2020_HolidayDash_TrafficDrivers_Desktop_Hero_V2_Photo_3000x1200._CB418824707_.jpg'
        }
    ]

    const banner_settings = {
        dots: false,
        fade: false,
        swipe: false,
        touchMove: false,
        pauseOnHover: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1, 
        arrows: false, 
        slidesToScroll: 1, 
        className: 'home__image'
    }

    const product_settings = {
        dots: true,
        fade: false,
        swipe: false,
        touchMove: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4, 
        arrows: true, 
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        slidesToScroll: 1, 
        centerPadding: '10px',
        className: 'home__slider',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
    }

    return (
        <div className='home'>
            <Slider {...banner_settings}>
                {banner_photos.map((photo) => {
                    return(
                        <img src={photo.url} alt={photo.name}/>
                    )
                })}
            </Slider>
            <div className="home__sliderContainer">
                <h3 className='home__sliderTitle'>Hot Products</h3>   
                <Slider {...product_settings}>
                    <Product 
                        id = '8'
                        title = 'Performance Modelling and Design of Computer Systems'
                        price = {71.99}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781139603966&full_ind='
                    />
                    <Product 
                        id = '11'
                        title = 'Engineering Hydrology: Processes, Analysis, and Modelling'
                        price = {169.75}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781259641978&full_ind='
                    />
                    <Product 
                        id = '6'
                        title = 'Introduction to Electrodynamics'
                        price = {84.50}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781108420419&full_ind='
                    />
                    <Product 
                        id = '16'
                        title = 'Pharmacology: An Introduction'
                        price = {164.95}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780073513812&full_ind='
                    />
                    <Product 
                        id = '5'
                        title = 'Propositional and Predicate Calculus'
                        price = {99.50}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781852339210&full_ind='
                    />
                </Slider>     
            </div>
            <div className="home__sliderContainer home__recommended">
                <h3 className='home__sliderTitle'>Recommended Products</h3>   
                <Slider {...product_settings}>
                    <Product 
                        id = '14'
                        title = 'Silicon VLSI Technology'
                        price = {190.00}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780130850379&full_ind='
                    />
                    <Product 
                        id = '20'
                        title = 'Measurements and Their Uncertainties: Modern Error Analysis'
                        price = {39.99}
                        rating = {3}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780199566334&full_ind='
                    />
                    <Product 
                        id = '15'
                        title = 'Starting Out With Python'
                        price = {199.99}
                        rating = {5}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780134444321&full_ind='
                    />
                    <Product 
                        id = '18'
                        title = 'Power System Analysis and Design'
                        price = {199.95}
                        rating = {3}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9781305632134&full_ind='
                    />
                    <Product 
                        id = '7'
                        title = 'Clean Code: An Introduction to Agile Software Craftmanship'
                        price = {62.50}
                        rating = {4}
                        image = 'https://campusstore.mcmaster.ca/cgi-mcm/ws/getTradeImage.pl?isbn=9780132350884&full_ind='
                    />
                </Slider>     
            </div>
        </div>
        
    )
}

export default Home
