import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { memo } from "react";
const Room = memo(({ room, setRoom }) => {
  const { name, slug, images, price } = room;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/rooms/${slug}`}
          className="btn-primary room-link"
          onClick={() => setRoom(slug)}
        >
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  }),
  setRoom: PropTypes.func.isRequired
};
export default Room;
