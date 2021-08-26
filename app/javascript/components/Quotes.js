import React from "react";

const Quotes = (props) => {
  const { user, quotes } = props;
  const renderQuotes = () => {
    return quotes.map((quote) => {
      return (
        <div
          style={{ border: "1px solid", margin: "20px", background: "hotpink" }}
        >
          <p>{quote.text}</p>
          <p>Likes: {quote.likes}</p>
          <p>Quote ID: {quote.id}</p>
          <a href={`/users/${user.id}/quotes/${quote.id}`}>show quote</a>
        </div>
      );
    });
  };
  return (
    <div>
      <p>user id {user.id}</p>
      <a href="/users">back</a>
      <h1>{user.name} Quotes:</h1>
      {renderQuotes()}
    </div>
  );
};

export default Quotes;
