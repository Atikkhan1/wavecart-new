'use client'
export default function Loading(p) {

  return (
    <div className={"flex h-full mx-auto" + p.className}>
      
<div className="loader">
  <style jsx>
    {`
    .loader {
      margin: auto;
      border: 5px solid #EAF0F6;
      border-radius: 50%;
      border-top: 5px solid #FF7A59;
      width: 30px;
      height: 30px;
      animation: spinner 2s linear infinite;
      }
      
      @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
        
        `}
  </style>
</div>
        </div>
  )
}
