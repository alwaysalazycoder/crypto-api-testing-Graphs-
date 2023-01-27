import React from 'react'
import "./Loader.css"
const Loader = () => {
  return (
<>
<div className='wrapper'>

    <div>Loading....</div>
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>....</div>

</div>

</>
  )
}

export default Loader