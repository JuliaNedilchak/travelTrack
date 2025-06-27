import React from "react";

const RatingStars = ({ rating, max = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <span key={`full-${i}`} style={{ color: "#FFD700" }}>
            ★
          </span>
        ))}
      {hasHalfStar && <span style={{ color: "#FFD700" }}>☆</span>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <span key={`empty-${i}`} style={{ color: "#ccc" }}>
            ★
          </span>
        ))}
    </div>
  );
};
export default RatingStars;
