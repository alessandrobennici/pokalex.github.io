import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ categoryFilter, mainData }) => {

   const navigate = useNavigate();
   
   return (
      <Button variant='outline-primary' onClick={() => {navigate('/', { state: { categoryFilter: categoryFilter, mainData: mainData } }) }}>
         <FontAwesomeIcon icon={faArrowLeft} /> <span className='d-none d-md-inline'>Home</span>
      </Button>
   )
}

export default BackButton