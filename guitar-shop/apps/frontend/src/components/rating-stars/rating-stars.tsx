type RatingStarsProps = {
  rating: number;
  width: string;
  height: string;
}

enum RatingStar {
  EmptyStar = '#icon-star',
  FullStar = '#icon-full-star'
}

const RATINGS = [1, 2, 3, 4, 5];

function RatingStars({rating, width, height}: RatingStarsProps): JSX.Element {
  const ratingBlock = RATINGS.map((value) => {
    const starIcon = value > rating ? RatingStar.EmptyStar : RatingStar.FullStar;

    return (<svg key={value} width={width} height={height} aria-hidden="true">
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
