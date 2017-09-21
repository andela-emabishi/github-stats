import React from 'react';
import './message.css'

const Message = ({message}) => {
  return (
    <div className="ui floating message">
      <p>{message}</p>
    </div>
  )
}

export default Message;
