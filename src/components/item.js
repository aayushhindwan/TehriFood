import React, { Component,Fragment} from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assests/scss/questionById.scss'
import parse from 'html-react-parser';
import {Button,Modal} from 'react-bootstrap'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdbreact';
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        
      }
    
    render() {
        const {indexValue} = this.props
        return (
    
      <MDBCol md='4'>
        <MDBCard >
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              
            </a>
            <MDBCardTitle onClick={this.props.onChildClick} >{this.props.item}:{this.props.price}</MDBCardTitle>
         <MDBIcon icon="shopping-cart" />
        {this.props.price}



          </MDBCardBody>
          <MDBBtn color="elegant">Elegant</MDBBtn>
        </MDBCard>
      </MDBCol>

   


             
           
        )
    }
}
