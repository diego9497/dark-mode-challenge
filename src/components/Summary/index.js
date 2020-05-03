import React from "react";
import BorderCard from "../BorderCard";

import { Container } from "./styles";

const Summary = (props) => {
  const data = [
    {
      id: 1,
      border: "#1CA0F2",
      src: "/images/icon-facebook.svg",
    },
    {
      id: 2,
      border: "#00BFFF",
      src: "/images/icon-twitter.svg",
    },
    {
      id: 3,
      border:
        "linear-gradient(to right, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
      borderHover:
        "linear-gradient(to right, hsl(329, 70%, 58%)  0%,  hsl(37, 97%, 70%) 100%)",
      src: "/images/icon-instagram.svg",
    },
    {
      id: 4,
      border: "#C4032A",
      borderHover: "#C4032A",
      src: "/images/icon-youtube.svg",
      increase: false,
      followersChange: 10,
    },
  ];

  return (
    <Container>
      {data.map((el) => (
        <BorderCard {...el} key={el.id} />
      ))}
    </Container>
  );
};
export default Summary;
