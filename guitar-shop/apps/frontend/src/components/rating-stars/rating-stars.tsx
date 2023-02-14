type RatingStarsProps = {
  rating: number;
}

enum RatingStar {
  EmptyStar = '#icon-star',
  FullStar = '#icon-full-star'
}

const RATINGS = [1, 2, 3, 4, 5];

function RatingStars({rating}: RatingStarsProps): JSX.Element {
  const ratingBlock = RATINGS.map((value) => {
    const starIcon = value > rating ? RatingStar.EmptyStar : RatingStar.FullStar;

    return (<svg key={value} width="12" height="11" aria-hidden="true">
      <use xlinkHref={starIcon}></use>
    </svg>)
  });

  return (
    <>
      {ratingBlock}
    </>
  )
}

export default RatingStars;
