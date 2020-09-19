import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Social from './social.js'
const FooterPagePro = () => {
  return (

    <div>
    <MDBFooter style={{backgroundColor:"black",color:"white"}} color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
             Tehri Food (food at doorstep!)
            </h5>
            <p>
             We are team of yougsters of New Tehri are dedicated to serve you at fullest.
             Supports us by Sharing our Website to your fellows.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Developer
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Aayush Hindwan</a>
              </li>
              <li>
                <a href="#!">aayushh@nitp.ac.in</a>
              </li>
              <li>
                <a href="#!">LinkedIn</a>
              </li>
             
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            Fouder
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Abhishek Rawat</a>
              </li>
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
  
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Give us Feedback/Suggestions</a>
              </li>
              <li>
                <a href="#!">Be our Sellor</a>
              </li>
              <li>
                <a href="#!">Interested in delievery?</a>
              </li>
              <li>
                <a href="#!">Any Doubts?</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
          
      <hr />
     
      <div className="footer-copyright text-center py-3">
          <Social/>
      </div>
    </MDBFooter>

    </div>
  );
}

export default FooterPagePro;