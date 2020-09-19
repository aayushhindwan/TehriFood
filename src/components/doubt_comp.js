import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
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
    <div className="main_div" >
   <div className="posts">
  
                                     
          <Link to={"/Restaurant/"+this.props._id} >
               <h1>aan,kdfans,kn</h1>

                        </Link>
                  
                   
                   </div>
        </div>
  );

}
}