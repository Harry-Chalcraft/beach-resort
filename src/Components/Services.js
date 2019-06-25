import React, {Component} from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title";

export default class Services extends Component{
  state={
    services: [
      {
        icon: <FaCocktail/>,
        title:"Free Cocktails",
        info:"Not so fast Morty. You heard your mom. We've got adventures to go on, Morty. Just you and me. And sometimes your sister, and sometimes your mom, but never your dad. You wanna know why, Morty? Because he crossed me."
      },
      {
        icon: <FaHiking/>,
        title:"Endless Hiking",
        info:"Not so fast Morty. You heard your mom. We've got adventures to go on, Morty. Just you and me. And sometimes your sister, and sometimes your mom, but never your dad. You wanna know why, Morty? Because he crossed me."
      },
      {
        icon: <FaShuttleVan/>,
        title:"Free Shuttle",
        info:"Not so fast Morty. You heard your mom. We've got adventures to go on, Morty. Just you and me. And sometimes your sister, and sometimes your mom, but never your dad. You wanna know why, Morty? Because he crossed me."
      },
      {
        icon: <FaBeer/>,
        title:"strongest beer",
        info:"Not so fast Morty. You heard your mom. We've got adventures to go on, Morty. Just you and me. And sometimes your sister, and sometimes your mom, but never your dad. You wanna know why, Morty? Because he crossed me."
      }
    ]
  }

  render () {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((item, index)=>{
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
