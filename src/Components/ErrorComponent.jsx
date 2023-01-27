import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import React from 'react'

const ErrorComponent = () => {
  return (
    
      <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Please check your internet connection or try after some time...</AlertTitle>
      <AlertDescription>Fetching data seems to be a issue please check gaurav bhai api mai dikkat hai</AlertDescription>
    </Alert>
    
    

  )
}

export default ErrorComponent