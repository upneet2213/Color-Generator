import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert]= useState(false);
  const bcg = rgb.join(',')
  const hex= rgbToHex(...rgb);
  const copy=()=>{
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }
  useEffect(()=>{
    const timeOut= setTimeout(()=>{
      setAlert(false)
    },3000)
    return ()=>clearTimeout(timeOut);
  },[alert])
  return <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={copy}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    {alert && <p className="alert">Copied to Clipboard</p>}
  </article>
}

export default SingleColor
