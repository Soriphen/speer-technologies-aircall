import styled from "styled-components";
import { MoreVertical } from "@styled-icons/feather";

let ArchiveSwitchStyle = styled.div`
  border: 1px solid lightgrey;
  border-bottom: none;
  background-color: rgb(250, 250, 250);
  position: relative;
  border-top-left-radius: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;

  #btn {
    ${(props) => (props.seeArchive ? "left: 57.5%;" : "left: 10.5%;")}
    top: 0;
    position: absolute;
    width: 30%;
    height: 5px;
    background-color: #ff4500;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: 0.2s;
    z-index: 2;
  }
`;

let ActivitySwitchBtn = styled.button`
  color: rgba(51, 51, 51, 0.5);
  transition: color 0.1s;
  font-weight: 700;
  ${(props) => !props.seeArchive && "color: #484848;"}
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  text-align: center;
  height: 100%;
  font-size: 14px;
  padding-left: 20px;
  height: 55px;
  transform: translateY(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`;

let ArchiveSwitchBtn = styled.button`
  color: rgba(51, 51, 51, 0.5);
  transition: color 0.1s;
  font-weight: 700;
  ${(props) => props.seeArchive && "color: #484848;"}
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  text-align: center;
  height: 100%;
  font-size: 14px;
  height: 55px;
  transform: translateY(10px);
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`;

let ThreeDotVertStyle = styled(MoreVertical)`
  height: 16px;
  min-width: 16px;
  border-radius: 0;
  padding: 0;
  box-shadow: none;
  outline: none;
  border: none;
  background-color: rgb(250, 250, 250);
  transform: translateY(10px);
  color: darkgrey;
  flex: 0 1 auto;
`;

export {
  ArchiveSwitchStyle,
  ActivitySwitchBtn,
  ArchiveSwitchBtn,
  ThreeDotVertStyle
};
