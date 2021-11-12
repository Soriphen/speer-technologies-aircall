import styled from "styled-components";
import {
  PhoneIncoming,
  PhoneMissed,
  Voicemail,
  MoreVertical
} from "@styled-icons/feather";
import { Undo, Archive } from "@styled-icons/fa-solid";

let ArchiveIcon = styled(Archive)`
  width: 20px;
  stroke-width: 2;
  padding: 0 15px;
`;

let CallBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .swipeable-list-item__content {
    margin-bottom: 10px;
  }

  .swipeable-list-item {
    display: flex;
    align-items: center;
  }

  .swipeable-list-item__trailing-actions {
    height: 52.4px;
    margin-top: 1.73px;
  }
`;

let CallDateStyle = styled.div`
  font-weight: 700;
  color: darkgrey;
  font-size: 0.6rem;
  position: relative;
  letter-spacing: 2px;
  margin-bottom: 10px;

  &:before {
    content: "";
    width: 190%;
    border-bottom: 1px dashed lightgrey;
    position: absolute;
    bottom: 3px;
    left: -180px;
  }

  &:after {
    content: "";
    width: 190%;
    border-bottom: 1px dashed lightgrey;
    position: absolute;
    bottom: 3px;
    right: -180px;
  }
`;

let CallDetailStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 100%;
  padding: 10px 0;
  transition: box-shadow 0.2s ease, transform 0.07s ease,
    background-color 0.07s ease;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:hover {
    box-shadow: 1px 2px 5px #d5d5d5, -1px -2px 5px #ffffff;
  }
  &:active {
    background-color: rgb(245, 245, 245);
    transform: translateY(2px);
    box-shadow: none;
  }
`;

let CallFromStyle = styled.div`
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  overflow-y: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

let PhoneIncomingStyle = styled(PhoneIncoming)`
  color: green;
  margin: 0 15px;
  min-width: 16px;
`;

let PhoneMissedStyle = styled(PhoneMissed)`
  color: red;
  margin: 0 15px;
  min-width: 16px;
`;

let VoicemailStyle = styled(Voicemail)`
  color: black;
  margin: 0 15px;
  min-width: 16px;
`;

let CallViaStyle = styled.div`
  color: darkgray;
  font-weight: 500;
  padding-top: 4px;
  font-size: 12px;
`;

let CallTimeStyle = styled.div`
  display: flex;
  font-weight: 700;
  color: darkgray;
  font-size: 12px;

  #ampm {
    border: 1px solid lightgrey;
    padding: 3px 5px;
    border-right: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 10px;
  }

  #time {
    display: flex;
    padding-right: 4px;
    padding-left: 5px;
    align-items: center;
  }
`;

let ThreeDotVertStyle = styled(MoreVertical)`
  margin-left: auto;
  color: darkgrey;
  min-width: 16px;
`;

let UndoStyle = styled(Undo)`
  padding: 0 15px;
`;

let ArchiveSwipeStyle = styled.div`
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  box-sizing: border-box;
  align-items: center;
  padding: 8px;

  color: rgb(238, 238, 238);
  user-select: none;
  border-radius: 10px;
  ${(props) =>
    props.isArchived
      ? "background-color: #147EFB;"
      : "background-color: #FECB2E;"}
`;

export {
  ArchiveIcon,
  CallBoxStyle,
  CallDateStyle,
  CallDetailStyle,
  CallFromStyle,
  PhoneIncomingStyle,
  PhoneMissedStyle,
  VoicemailStyle,
  CallViaStyle,
  CallTimeStyle,
  ThreeDotVertStyle,
  ArchiveSwipeStyle,
  UndoStyle
};
