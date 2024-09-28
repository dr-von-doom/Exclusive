import EmptyStar from "@/assets/icons/star-empty.svg";
import HalfStar from "@/assets/icons/star-half.svg";
import Star from "@/assets/icons/star.svg";

export type RatingProps = {
  value: number;
  total?: number;
};

/** Ratting Component */
export const Rating = ({ value, total = 5 }: RatingProps) => {
  return (
    <div className="inline-flex w-fit items-center justify-center">
      {[...Array(total)].map((_, index) => {
        return (
          <img
            src={
              value - index >= 1
                ? Star
                : value - index > 0
                  ? HalfStar
                  : EmptyStar
            }
            alt=""
            key={index}
            className="h-6 w-6"
          />
        );
      })}
    </div>
  );
};

export default Rating;
