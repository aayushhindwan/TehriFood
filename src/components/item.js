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
        <MDBCard onClick={this.props.onChildClick}>
          <MDBCardImage
            top
            src={this.props.imageUrl}
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              
            </a>
            <MDBCardTitle  >{this.props.item}</MDBCardTitle>
            <MDBCardTitle  > <span style={{backgroundColor:"#DAF7A6"}}> Rs:{this.props.price}</span> </MDBCardTitle  >
            <hr />
              <p>{this.props.desc}</p>
              <hr />
           
      

              
          <div style={{backgroundColor:"#DAF76"}}class="fa fa-shopping-cart">Click to add to Cart</div>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>

   


             
           
        )
    }
}
