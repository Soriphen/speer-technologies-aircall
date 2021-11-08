import styled from "styled-components";
import { Phone, User, Settings } from "@styled-icons/feather";
import { Grid3x3GapFill } from "@styled-icons/bootstrap";
import { DotCircle } from "@styled-icons/fa-regular";

let ControlBarStyle = styled.div`
  border-top: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-color: white;
`;

let PhoneStyle = styled(Phone)`
  padding: 14px 10px;
  cursor: pointer;
  width: 22px;
  min-width: 16px;
  transition: box-shadow 0.2s ease, transform 0.07s ease,
    background-color 0.07s ease;
`;

let PhoneContainer = styled.div`
  position: relative;

  &::after {
    content: "";
    width: 50%;
    ${(props) => props.isActive && props.greenHighlight}
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: rgb(42, 196, 32);
    position: absolute;
    bottom: 1px;
    left: calc(50% / 2);
    transition: all 0.1s ease;
  }

  svg {
    ${(props) =>
      props.isActive
        ? "fill: #333333;"
        : "fill: rgba(51, 51, 51, 0.3); color: rgba(51, 51, 51, 0.3);"}
  }
`;

let ContactsStyle = styled(User)`
  cursor: pointer;
  stroke-width: 2;
  width: 22px;
  min-width: 16px;
  padding: 14px 10px;
`;

let ContactsContainer = styled.div`
  position: relative;
  margin-right: 45px;

  &::after {
    content: "";
    width: 50%;
    ${(props) => props.isActive && props.greenHighlight}
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: rgb(42, 196, 32);
    position: absolute;
    bottom: 1px;
    left: calc(50% / 2);
    transition: all 0.1s ease;
  }

  svg {
    ${(props) =>
      props.isActive ? "color: #333333;" : "color: rgba(51, 51, 51, 0.5);"}
  }
`;

let GreenContainer = styled.div`
  background: linear-gradient(145deg, #2dd222, #26b01d);
  border-radius: 50%;
  padding: 15px;
  transition: background 0.1s ease;

  &:hover {
    background: linear-gradient(145deg, #28bd1d, #219f18);
  }

  &:active {
    background: linear-gradient(145deg, #26b01d, #2dd222);
  }
`;

let GridStyle = styled(Grid3x3GapFill)`
  width: 30px;
  color: #333333;
  fill: white;
  min-width: 16px;
`;

let GridContainerStyle = styled.div`
  position: absolute;
  transform: translateY(-16px);
  border-radius: 50%;
  border: 1px solid lightgrey;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
`;

let SettingsStyle = styled(Settings)`
  width: 22px;
  stroke-width: 2;
  min-width: 16px;
  padding: 14px 10px;
  cursor: pointer;
`;

let SettingsContainer = styled.div`
  position: relative;
  margin-left: 45px;

  &::after {
    content: "";
    width: 50%;
    ${(props) => props.isActive && props.greenHighlight}
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: rgb(42, 196, 32);
    position: absolute;
    bottom: 1px;
    left: calc(50% / 2);
    transition: all 0.1s ease;
  }
  svg {
    ${(props) =>
      props.isActive ? "color: #333333;" : "color: rgba(51, 51, 51, 0.5);"}
  }
`;

let DotStyle = styled(DotCircle)`
  width: 22px;
  color: rgb(42, 196, 32);
  min-width: 16px;
  padding: 14px 10px;
  cursor: pointer;
`;

let DotContainer = styled.div`
  position: relative;

  &::after {
    content: "";
    width: 50%;
    ${(props) => props.isActive && props.greenHighlight}
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: rgb(42, 196, 32);
    position: absolute;
    bottom: 1px;
    left: calc(50% / 2);
    transition: all 0.1s ease;
  }
`;

export {
  PhoneStyle,
  PhoneContainer,
  ControlBarStyle,
  ContactsStyle,
  ContactsContainer,
  GreenContainer,
  GridStyle,
  GridContainerStyle,
  SettingsStyle,
  SettingsContainer,
  DotStyle,
  DotContainer
};
