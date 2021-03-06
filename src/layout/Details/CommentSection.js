import React from 'react';
import styled from 'styled-components';

import noDisplayPic from '../../assets/icon/noDisplayPic.svg';

const CommentWrapper = styled.div`
  height: 8rem;
  width: 16rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f2f2f2;
`

const CommentLine = styled.p`
  position: relative;
  margin: 0;
  padding-top: .25rem;
  padding-bottom: .25rem;
  padding-left: .5rem;
  padding-right: .5rem;
`

const commentSection = (props) => (
  <CommentWrapper className="shadow-4 mt3">
    <div className="flex items-center">
      <img src={ props.displayPic || noDisplayPic}
        className="relative left-0 pt1 pl1 di" />
      <span className="f4 di pl1 pt1">John Doe</span>
    </div>
    <CommentLine className="f6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor enim, bibendum sed justo quis...
    </CommentLine>
    <a className="relative ma0 f7 pl2 wg-blue">Read more</a>
  </CommentWrapper>
);

export default commentSection;  