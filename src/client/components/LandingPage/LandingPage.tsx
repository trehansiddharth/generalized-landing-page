import React from 'react';
import HeaderBar from 'LandingPage/HeaderBar';
import Hero from 'LandingPage/Hero';
import { Highlight, Highlights } from 'LandingPage/Highlights';
import Footer from 'LandingPage/Footer';
import './LandingPage.scss';

/**
 * generalized-landing-page: All of the strings below need to be changed in
 * order to specialize this repository for your needs.
 */
var logoUrl = "public/image/logo.svg";
var companyName = "companyName";
var tagline = "Tagline";
var subtagline = "Subtagline";
var cta = "CALL TO ACTION";
var ctaUrl = "http://www.ctaUrl.com";
var heroImageUrl = "public/image/hero_image.png";
var highlightsTitle = "Title of highlights panel";
var footerTitle = "Title of footer panel";
var footerDetails = "Details in footer panel";
var highlights = [
  {
    caption: "Highlight 1",
    subtext: "Subtext for highlight 1",
    imageUrl: "public/image/highlight_image_1.svg",
    textAlignment: "right"
  },
  {
    caption: "Highlight 2",
    subtext: "Subtext for highlight 2",
    imageUrl: "public/image/highlight_image_2.svg",
    textAlignment: "left"
  },
  {
    caption: "Highlight 3",
    subtext: "Subtext for highlight 3",
    imageUrl: "public/image/highlight_image_3.svg",
    textAlignment: "right"
  }
];

const LandingPage = () => (
  <div>
    <HeaderBar
      logoUrl={logoUrl}
      companyName={companyName} />
    <Hero
      tagline={tagline}
      subtagline={subtagline}
      cta={cta}
      ctaUrl={ctaUrl}
      imageUrl={heroImageUrl} />
    <Highlights title={highlightsTitle}>
      {highlights.map((highlight, index) => {
        return <Highlight
          key={index}
          caption={highlight.caption}
          subtext={highlight.subtext}
          imageUrl={highlight.imageUrl}
          textAlignment={highlight.textAlignment} />;
      })}
    </Highlights>
    <Footer
      title={footerTitle}
      details={footerDetails}
      cta={cta}
      ctaUrl={ctaUrl}
    />
  </div>
);

export default LandingPage;