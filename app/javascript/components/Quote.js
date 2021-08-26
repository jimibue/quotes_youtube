import React from "react";

const Quote = (props) => {
  return (
    <div>
      <a href={`/users/${props.user.id}/quotes`}>back to {props.user.name}</a>
      <h1>{props.user.name}</h1>
      <p>{props.quote.text}</p>
    </div>
  );
};

export default Quote;
