import { faComment, faRetweet, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Tweet(props) {
  return (
    <div className="tweet">
      <img
        src={ props.tweet.user.image }
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name"> { props.tweet.user.name } </span>
            <span className="handle"> { props.tweet.user.handle } </span>
          </span>

          <span className="timestamp"> { props.tweet.timestamp } </span>
        </div>

        <p className="message">
          { props.tweet.message }
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <FontAwesomeIcon icon={faComment}/>
          <FontAwesomeIcon icon={faRetweet} />
          <FontAwesomeIcon icon={faHeart} /> 
          <FontAwesomeIcon icon={faShare} /> 
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
