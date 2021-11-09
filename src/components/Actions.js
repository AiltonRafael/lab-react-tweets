import React from 'react';
import { faComment, faRetweet, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Actions() {
    return (
        <div className="actions">
          <FontAwesomeIcon icon={faComment}/>
          <FontAwesomeIcon icon={faRetweet} />
          <FontAwesomeIcon icon={faHeart} /> 
          <FontAwesomeIcon icon={faShare} /> 
        </div>
    )
}
