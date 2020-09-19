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
import { confirmAlert } from 'react-confirm-alert';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdbreact';
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        
      }
   state = {
        Item : [1,3],
        Cart:[],
        total:parseInt(0)
       
    }
componentDidMount()
{

axios.get("https://sheet.best/api/sheets/a73c2b4d-7414-4afd-9ef7-7ed1b39f5c0b").then(res => {
         var m = res.data;
      var k=[]
        //
      var  r=m[this.props.match.params.id]
    var n=Object.keys(r).length-1;
         for(var i=1;i<=n/4;i++)
         {
          var it=String("Item"+i);
          var c="Cost"+i;
           var p="Photo"+i;
           var d="Description"+i;
            if(r[it]&&r[c])
           k.push({item:r[it],price:r[c],imageUrl:r[p],desc:r[d]})
         }
        console.log("heuuu");
        console.log(k);
        this.setState({Item:k});

      })



}
 async   addCart(x,y)
{
  var ct=this.state.Cart;
  
console.log(this.state.Cart)
var check=window.confirm("Are you Sure to add it to cart?");
if(check)
{

  await ct.push({item:x,price:y});
       await this.setState({Cart:ct});
 await this.setState({total:this.state.total+parseInt(y)});
 alert("Added! Total="+this.state.total)

}
 }

    render() {
        return (
          <div>
        
          <span>
          Cart:<br/>
          {
              
                        this.state.Cart.map((a,i)=>{
                           return(

                             <div>
                             <div class="modal-header">
        <p class="heading"> {a.item}:{a.price}</p>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span onClick={()=>{
            this.setState({total:this.state.total-a.price});
            var temp=this.state.Cart;
             temp.splice(i,1);
             this.setState({Cart:temp}
              )
          }}aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
                            
                             </div>
                            );

                         })
                        
                

                        }

          Total: {this.state.total}
          <br/>
       
          <Button style={{backgroundColor:"black"}}>Order Now!</Button>
          </span>
 <div className="main_div" >
          <MDBRow>
               
                        {
              
                        this.state.Item.map((a,i)=>{
                           return(

                          <Item  onChildClick={()=>this.addCart(a.item,a.price)} item={a.item} price={a.price} desc={a.desc} imageUrl={a.imageUrl}/>
                            );

                         })
                        
                

                        }
                 </MDBRow>
            </div>
            </div>
        )
    }
}
