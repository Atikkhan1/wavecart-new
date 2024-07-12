import React from 'react'

const Loadingbar = () => {
  return (
<div className="loader">
  <style jsx>
    {`
    .loader {
  margin: auto;
  border: 2px solid #EAF0F6;
  border-radius: 50%;
  border-top: 2px solid #FF7A59;
  width: 20px;
  height: 20px;
  animation: spinner 4s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

    `}
  </style>
</div>
  )
}

export default Loadingbar
