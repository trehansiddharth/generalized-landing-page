import React from 'react';
import './Footer.scss';
import { getOutboundLink } from 'Util/UtilFunctions';

type FooterProps = {
  title: string,
  details: string,
  cta: string,
  ctaUrl: string
};

const Footer = (props: FooterProps) => (
  <div id="footer">
    <div className="title">{props.title}</div>
    <div className="details">
      {props.details}
    </div>
    <a
      target="_blank"
      rel="noreferrer"
      href={props.ctaUrl}
      onClick={() => {
        getOutboundLink(props.ctaUrl);
        return false;
      }}
      className="repeat-action-button"
    >
      {props.cta}
    </a>
  </div>
);

export default Footer;