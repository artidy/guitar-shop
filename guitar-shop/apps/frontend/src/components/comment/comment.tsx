import { CommentUser } from '../../types/user';
import RatingStars from '../rating-stars/rating-stars';

type CommentProps = {
  user: CommentUser;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
}

enum RatingStarSizes {
  Width = '16',
  Height = '16'
}

function Comment({user, advantages, disadvantages, text, rating, createdAt }: CommentProps): JSX.Element {
  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{user.name}</h4>
        <span className="review__date">{createdAt.toDateString()}</span>
      </div>
      <div className="rate review__rating-panel">
        <RatingStars
          rating={rating}
          width={RatingStarSizes.Width}
          height={RatingStarSizes.Height}
        />
        <p className="visually-hidden">Оценка: Хорошо</p>
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantages}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantages}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{text}</p>
    </div>
  )
}

export default Comment;
