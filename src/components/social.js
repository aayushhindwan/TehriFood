import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>


     < MDBBtn>
           <a href="#" class="fa fa-facebook"> Facebook
      </a>
       </ MDBBtn>
        <MDBBtn>
        <a href="#" class="fa fa-twitter">Twitter</a>
        </MDBBtn>
       
    </MDBContainer>
  );
}

export default SocialButtonsPage;