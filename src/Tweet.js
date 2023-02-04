const Tweet = ({ username, date, message }) => {
  return (
    <div className="tweet">
      <div className="tweet-heading">
        <h5 className="tweet-user">{username}</h5>
        <p className="tweet-date">{date}</p>
      </div>
      <p className="tweet-body">{message}</p>
      <div className="tweet-reply">
        <button>Reply</button>
      </div>
    </div>
  );
};

export default Tweet;
