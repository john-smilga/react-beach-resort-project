import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }
  state = {
    error: true,
    room: {},
    mainBcg: defaultBcg,
    images: []
  };
  componentDidMount() {
    // console.log(this.props);
    const room = JSON.parse(localStorage.getItem("single-room"));
    const [mainBcg, ...images] = room.images;
    this.setState({ room, error: false, mainBcg, images });
  }
  render() {
    // console.log(this.state);

    const { mainBcg, error, images } = this.state;
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets
    } = this.state.room;
    console.log(this.state);

    if (error) {
      return (
        <div className="error">
          <h3> an error occurred...</h3>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            return home
          </button>
        </div>
      );
    }
    // return (
    //   <>
    //     <Hero hero="roomsHero">
    //       <Banner title={`${name} room`}>
    //         <Link to="/rooms" className="btn-primary">
    //           back to rooms
    //         </Link>
    //       </Banner>
    //     </Hero>
    //   </>
    // );
    return (
      <>
        <StyledHero img={mainBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
