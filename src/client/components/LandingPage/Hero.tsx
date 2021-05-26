import React from 'react';
import { getOutboundLink } from 'Util/UtilFunctions';
import './Hero.scss'

type HeroProps = {
  tagline: string,
  subtagline: string,
  cta: string,
  ctaUrl: string,
  imageUrl: string
};

const Hero = (props: HeroProps) => (
  <div className="hero">
    <div className="pitch-and-signup">
      <div className="tagline">
        {props.tagline}
      </div>
      <div className="subtagline">
        {props.subtagline}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={props.ctaUrl}
        onClick={() => {
          getOutboundLink(props.ctaUrl);
          return false;
        }}
        className="action-button"
      >
        {props.cta}
      </a>
    </div>
    <div className="hero-image">
      <img
        id="frontpage-image"
        alt="frontpage art"
        src={props.imageUrl}
      />
    </div>
  </div>
);

export default Hero;