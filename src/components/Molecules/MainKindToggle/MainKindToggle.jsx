import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
function MainKindToggle({ club, bookReview }) {
  let clubActive;
  let bookReviewActive;

  if (club) {
    clubActive = 'border-bjblack';
  } else {
    clubActive = 'border-white';
  }

  if (bookReview) {
    bookReviewActive = 'border-bjblack';
  } else {
    bookReviewActive = 'border-white';
  }

  return (
    <div className="flex justify-evenly gap-4">
      <Link
        className={`text-b-1-medium flex justify-center items-center border-b-2 ${clubActive} w-[30%] p-4`}
        to="/mainClub"
      >
        북적클럽
      </Link>
      <Link
        className={`text-b-1-medium flex justify-center items-center border-b-2 ${bookReviewActive} w-[30%] p-4`}
        to="/mainBookReview"
      >
        독후감
      </Link>
    </div>
  );
}

MainKindToggle.propTypes = {
  club: bool,
  bookReview: bool,
};
export default MainKindToggle;
