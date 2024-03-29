import React, {Component} from 'react';
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import {Link} from "react-router-dom";
import RoomsContainer from "../Components/RoomsContainer";

export default class Rooms extends Component{

  render () {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to='/' className='btn-primary'>
              return home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer/>
      </>
    )
  }
}
