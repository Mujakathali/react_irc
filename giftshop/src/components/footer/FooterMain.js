import React from 'react'
import './FooterMain.scss'
import logomain from '../../assets/images/logo.png';
import facebook from '../../stories/icons/facebook.png'
import twitter from '../../stories/icons/twitter.png'
import instagram from '../../stories/icons/instagram.png'
import pinterest from '../../stories/icons/pinterest.png'
import { Link } from 'react-router-dom'

function FooterMain() {
  const footercontent={
    About:[
      {id : '1', info : 'Home', path :'/'},
      {id : '2', info : 'About us', path:'/about-us'},
      {id : '3', info : 'Comparison', path:'/compare'},
      {id : '4', info : 'Contact', path:'/contact'},
    ],
    Brands:[
      {id : '1', info : 'Zazzle Gifts', path :'/brands/1'},
      {id : '2', info : 'Giftr Gifts', path:'/brands/2'},
      {id : '3', info : 'Etsy Gifts', path:'/brands/3'},
    ],
    Categories:[
      {id : '1', info : 'Mugs', path :'/products/1'},
      {id : '2', info : 'Bracelets', path:'/products/2'},
      {id : '3', info : 'Cards', path:'/products/3'},
      {id : '4', info : 'Balloons', path:'/products/4'},
      {id : '5', info : 'Christmas card', path:'/products/5'},
      {id : '6', info : 'Wallet', path:'/products/6'},
      {id : '7', info : 'Watch', path:'/products/7'},
      {id : '8', info : 'Keychain', path:'/products/8'}
    ],
    Social : [
      {id : '1', info :'LinkedIn', path :'https://www.linkedin.com/in/mujakath-ali-b48125256/', icon : facebook },
      {id : '2', info :'Twitter' , path :'https://twitter.com/mujakath', icon : twitter},
      {id : '3', info :'Github', path: 'https://github.com/Mujakathali', icon: instagram},
     
    ]
  }
  return (
    <div className='footer'>
        <div className="footer-title">
          <img src={logomain} alt="logo" className='footer-title-logo' />
        </div>
        <div className="footer-content">
          <div className="footer-content-left">
            <ul className="footer-content-left">
            <h4>ABOUT</h4>
            {footercontent.About.map((items,index) => {
              return (
                <li className="footer-content-left" key={index}>
                  <Link to={items.path} className="footer-content-left-url">{items.info}</Link>
                </li>
              )
            })}
            </ul>
          </div>
          <div className="footer-content-center">
          <ul className="footer-content-center">
            <h4>BRANDS</h4>
            {footercontent.Brands.map((items,index) => {
              return (
                <li className="footer-content-center" key={index}>
                  <Link to={items.path} className="footer-content-center-url">{items.info}</Link>
                </li>
              )
            })}
            </ul>
          </div>
          <div className="footer-content-right">
            <ul className="footer-content-right">
              <h4>CATEGORIES</h4>
              {footercontent.Categories.map((items,index) => {
                return (
                  <li className="footer-content-right" key={index}>
                    <Link to={items.path} className="footer-content-right-url">{items.info}</Link>
                  </li>
                )
              })}
            </ul>   
          </div>
          <div className="footer-content-contact">
            <p>
                <i className="fa-solid fa-location-dot"></i>
                <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                20/3c - Lalkhan Street,Chidambaram City
            </p>
            <p>
                <i className="fa-solid fa-phone"></i>
                <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                8681062029
            </p>
            <p>
                <i className="fa-solid fa-at"></i>
                <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                mujaali481@email.com
            </p>
          </div>
        </div>
        <div className="footer-social">
            <ul className="footer-social">
              <h4 className="footer-social-title">Contact With Us</h4>
              {footercontent.Social.map((items,index) => {
                return (
                  <li className="footer-social-contact" key={index}>
                    <Link to={items.path} className="footer-social-contact-url">
                    <img src={items.icon} alt={items.info} className="footer-social-contact-img" />
                    {items.info}
                    </Link>
                  </li>
                )
              })}
            </ul>
        </div>
        <div className="footer-copyright">
          <p className='footer-copyright'>&copy; Copyright by muja</p>
        </div>
    </div>
  )
}

export default FooterMain