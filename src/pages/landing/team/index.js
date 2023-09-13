import React from "react";
import { MoreBtn, TeamCard, TeamContainer } from "./style.index";
import meet1 from "../../../assets/images/meet1.png";
import meet2 from "../../../assets/images/meet2.png";
import meet3 from "../../../assets/images/meet3.png";
import meet4 from "../../../assets/images/meet4.png";
export default function Team() {
  return (
    <TeamContainer>
      <h1>Aeroflight</h1>
      <h2>MEET OUR TEAM</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
        mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
        mi.
      </h3>
      <TeamCard>
        <div>
          <img src={meet1} alt="" />
          <span>
            Lucas Johnson is the son of Chris and the main technical writer for
            Aeroflight. He works remotely from his home in Nucla, CO. Lucas
            started working for and learning the ropes of Aeroflight as a high
            school student in the late 90’s. When Luc is away from his computer,
            you will most likely find him outdoors. He enjoys hiking with his
            dog Penne or rock climbing in Colorado or beyond.
          </span>
        </div>
        <div>
          <img src={meet2} alt="" />
          <span>
            Lisa Schulz was born into Aeroflight; she is the daughter of Chris
            and handles the bookkeeping and accounting. After graduating from
            West Texas A&M with a English Education degree, Aeroflight needed a
            bookkeeper so she came home to Gruver to fill the title in 2008.
            Lisa married her husband, Keith, in 2017. They welcomed their first
            daughter in 2019 and have two dogs that run the house. You will find
            the dogs at work with her daily. “I love Aeroflight and cherish that
            it is our families’ business. I take great pride in continuing what
            my dad and Uncle Charlie started thirty plus years ago.”
          </span>
        </div>
      </TeamCard>
      <TeamCard>
        <div>
          <img src={meet3} alt="" />
          <span>
            Isvy Acosta has been with Aeroflight since April 2018 and covers a
            lot of roles. She is most likely the person you get to speak to when
            you call the office. She is also who prints, packs and ships your
            MEL’s to you! Isvy helps Lucas and Chris with small corrections or
            in any other way she can. She loves getting to speak to all of our
            customers. “Aeroflight has opened my eyes to a whole new world of
            aviation I didn’t know existed.”
          </span>
        </div>
        <div>
          <img src={meet4} alt="" />
          <span>
            Chris Johnson started Aeroflight in 1986 with his brother, Charlie.
            They began with a new idea and a prayer to be able to provide MEL’s
            to pilots and customers in need. Today you can find Chris at the
            conference table and around the office drinking coffee, doing
            crosswords in the newspaper and working on MEL’s for customers.
            After thirty years of building and working on MEL’s, his knowledge
            is vast and he enjoys talking them through with customers. He also
            still runs the family wheat farm outside of Gruver and enjoys a good
            weekend on the lake fishing.
          </span>
        </div>
      </TeamCard>
      <h4>Get The Best Knowledge And Your License With Aviacademy</h4>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
        mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
        mi.
      </h5>

      <MoreBtn>Learn More</MoreBtn>
    </TeamContainer>
  );
}
