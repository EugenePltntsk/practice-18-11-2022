import styled from "styled-components";

import {Link} from "react-router-dom"

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Lishka = styled.li`
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 15px;
  border: 2px solid transparent;
  border-radius: 11px;

  -webkit-box-shadow: 38px 33px 52px -12px rgba(118, 122, 115, 0.72);
  -moz-box-shadow: 38px 33px 52px -12px rgba(118, 122, 115, 0.72);
  box-shadow: 38px 33px 52px -12px rgba(118, 122, 115, 0.72);

  transition: all 400ms linear;
  &:hover {
    border: 2px solid gray;
    scale: 102%;
    -webkit-box-shadow: 49px 51px 52px -12px rgba(118, 122, 115, 0.72);
    -moz-box-shadow: 49px 51px 52px -12px rgba(118, 122, 115, 0.72);
    box-shadow: 49px 51px 52px -12px rgba(118, 122, 115, 0.72);

   
  }
`;

export const StyledLink = styled(Link)`
    appearance: auto;
    writing-mode: horizontal-tb !important;
    text-decoration: none;
    font-family: Arial;
    font-size: 13.333px;
    border-radius: 2.5px;
    
   
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: rgb(239, 239, 239);
    margin: 0em;
    padding: 2px 6px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(118, 118, 118);
    border-image: initial;


`
