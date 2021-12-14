import React, { FunctionComponent } from 'react';
import './Highlights.scss';

export type Alignment = "left" | "right";
export type HighlightProps = {
  caption: string,
  subtext: string,
  imageUrl: string,
  textAlignment: Alignment
}

export const Highlight = (props: HighlightProps) => (
  <div className={"highlight text-" + props.textAlignment}>
    <img src={props.imageUrl} />
    <div className="label">
      <div className="caption">{props.caption}</div>
      <div className="subtext">{props.subtext}</div>
    </div>
  </div>
);

type HighlightsProps = {
  title: string
};

export const Highlights : FunctionComponent<HighlightsProps> = (props) => (
  <div id="highlights">
    <div className="title">{props.title}</div>
    <div className="highlights-list">
      {props.children}
    </div>
  </div>
);