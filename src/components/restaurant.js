import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import '../assests/scss/home.scss'
import {Button,Modal,Card} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  { Component } from 'react'
import { Redirect } from 'react-router';
import {Link} from "react-router-dom";
import axios from 'axios';
import port from '../port.js';
import domain from '../domain.js';
export default class Restaurant extends Component
{

render()
{
return (
    <div className="main_div" style={{Display:"flex","Flex-direction":"row"}}>

                                     
          <Link params={"aayush"} to={"/Restaurant/"+this.props._id} >
   <Card style={{ width: '18*3rem' }}>
  <Card.Img variant="top" src={this.props.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
     {this.props.location}<br/>
     Contact No: 
     {
      this.props.contact
     }
    </Card.Text>
    
  </Card.Body>
</Card>
                        </Link>
                  
                   
             
        </div>
  );

}
}