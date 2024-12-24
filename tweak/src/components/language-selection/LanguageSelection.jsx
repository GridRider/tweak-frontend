import React from 'react'
import styles from "./LanguageSelection.module.css"
import { useNavigate } from 'react-router-dom'

function LanguageSelection() {
  const navigate=useNavigate();
  const onLanClick=()=>{
    navigate("/");
  }
  return (
    <>
      <p className={styles.lang}>Choose your language</p>
      <div className={styles["lang-btn-container"]}>
      <button onClick={onLanClick}>English</button>
      <button onClick={onLanClick}>Malayalam</button>
      <button onClick={onLanClick}>Tamil</button>
      <button onClick={onLanClick}>Hindi</button>
      </div>
    </>
  )
}

export default LanguageSelection
