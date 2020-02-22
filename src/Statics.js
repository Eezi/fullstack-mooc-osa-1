import React from 'react'

const Statics = (props) => {
    if(props.total > 0) {
    return(
      <div>
        <h1>Arvostelut</h1>
        <p>Hyvä: {props.good}</p>
        <p>Neutraali: {props.neutral}</p>
        <p>Huono: {props.bad}</p>
        <p>Yhteensä: {props.total}</p>
        <p>Positiivisia: {props.positive}</p>
     </div> 
    )
} else {
    return (
        <div>
            <h1>Ei vielä yhtään arvosteluja Arvosteluja</h1>
        </div>
    )
}
    
}

export default Statics;