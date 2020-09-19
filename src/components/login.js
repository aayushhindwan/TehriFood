import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <span>
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='white-text' />
            </a>
            <MDBCardTitle>MDBCard Title</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
          </span>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;