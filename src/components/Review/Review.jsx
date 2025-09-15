import "./Review.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import PageNotFound from "../PageNotFound/PageNotFound";

function Review({ reviews }) {
    const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;
  //  how is this sending id into linbk to get the right review?
  // Decrement the id from the parameter so we access the correct items. This
  // is necessary because the array indexes start with 0, whereas the IDs in 
  // the API begin at 1.
  id = id - 1;



// do I need to use a ternary operator in order to have the 404 displayed whenever there are no actual reviews
// I honestly should've just kept reading the task lol
// the way that they're doing the ternary operator is really cool

  return (
    <div className="review">
      {reviews && reviews[id] ? (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">Final rating:{reviews[id]?.rating}/5</p>
            <button onClick={() => navigate("/reviews")}>Back to review list</button>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default Review;
