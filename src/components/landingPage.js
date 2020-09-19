import React, { Component,useState } from 'react'
import SRCIMG from '../assests/images/landingSVG.svg'
import {Link} from "react-router-dom";
import {Button,Modal} from 'react-bootstrap'
import Signup from './signup'
import SignIn from './login'
import '../assests/scss/landingPage.scss'
import Restaurant from './restaurant.js'
import axios from 'axios';
import Card from './login.js'
import Carausel from './carausel.js'
export default class extends Component
{
state={
      Hotels:[1,3,4]
    }
async componentDidMount()
{
 var q= await axios.get("https://sheet.best/api/sheets/f00005bd-4cff-48a8-90fe-cd022efbd14d")
      .then(res => {
         var persons = res.data;    
        this.setState({Hotels:persons});
      })
}

render()
{

return (
  <div>
<Carausel/>
 {
this.state.Hotels.map((a,i)=>{
                           return(

                          <Restaurant name={a.Name} location={a.Location} contact={a.Contact} _id={a.Id} imageUrl={a.Photo}/>
                            );

                         })
                        

}

</div>
  )

}        













}