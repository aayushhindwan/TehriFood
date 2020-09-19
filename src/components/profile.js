import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assests/scss/questionById.scss'
import Item from './item.js'
import {Button,Modal} from 'react-bootstrap'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import domain from '../domain.js';
import port from '../port.js';
import Cards from './login.js'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdbreact';
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        
      }
   state = {
        Item : [],
        x:0
       
    }
componentDidMount()
{

axios.get("https://sheet.best/api/sheets/bb476ab8-7257-485f-a530-0310bfe6a2a2").then(res => {
         var m = res.data;
      var k=[]
        //
      var  r=m[this.props.match.params.id]
    var n=Object.keys(r).length-1;
         for(var i=1;i<=n/2;i++)
         {
          var it=String("Item"+i);
          var c="Cost"+i;
      
           k.push({item:r[it],price:r[c]})
         }
        console.log("heuuu");
        console.log(k);
        this.setState({Item:k});

      })



}
      SubmitAnswer=(event)=>
{
   if(this.state.text){
    const response =  axios.post('http://192.168.1.7:3001/answer/postanswer/'+this.props.match.params.id, { Body: this.state.text,});
   }else{
     alert("please write the answer")
   }
   
 
this.setState({text: ""});

}

    render() {
        return (
           
 <div className="main_div" >
          <MDBRow>
               
                        {
              
                        this.state.Item.map((a,i)=>{
                           return(

                          <Item item={a.item} price={a.price}/>
                            );

                         })
                        
                

                        }
                 </MDBRow>
            </div>
        )
    }
}
