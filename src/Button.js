import React  from 'react';

const Button = (props) => (
        <button onClick={props.clickHandler}>{props.text}</button>
  )

export default Button;