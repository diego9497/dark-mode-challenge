import React from "react";
import {
  Card,
  Followers,
  FollowersContainer,
  Username,
  UsernameContainer,
  Today,
} from "./styles";

const BorderCard = ({
  src = "/images/icon-facebook.svg",
  username = "diego9497",
  followers = 3222,
  followersChange = 30,
  increase = true,
  border = "red",
  borderHover,
}) => {
  return (
    <Card border={border} borderHover={borderHover ? borderHover : border}>
      <UsernameContainer>
        <img src={src} alt="" />
        <Username>{username}</Username>
      </UsernameContainer>
      <FollowersContainer>
        <Followers>{followers}</Followers>
        <span>Followers</span>
      </FollowersContainer>
      <Today increase={increase}>{followersChange} Today</Today>
    </Card>
  );
};
export default BorderCard;
