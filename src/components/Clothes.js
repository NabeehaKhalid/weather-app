import React from 'react';
import  '../App.css'


const Clothes = (props) => {
  return(
    <div className="Clothes">
      Clothing
      Suggestions
      <div className="dailySummary">{props.dailySummary}</div>
      <div className="icon1">1</div>
      <div className="icon2">2</div>
      <div className="icon3">3</div>
      <div className="icon4">4</div>





    </div>
  )
}


export default Clothes;

/*      <p className="mainImage">{props.clothesIcon[0]}</p>*/
