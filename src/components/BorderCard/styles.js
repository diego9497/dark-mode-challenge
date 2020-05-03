import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
    background: ${(prop) => prop.border};
  }

  &:hover {
    background: ${(props) => props.theme.colors.cardBackgroundHover};

    ::before {
      background: ${(prop) => prop.borderHover};
    }
  }
`;

export const UsernameContainer = styled.p`
  display: flex;
  align-items: center;
`;
export const Username = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 12px;
  margin-left: 13px;
`;

export const FollowersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
    font-size: 11.5px;
    letter-spacing: 4px;
  }
`;
export const Followers = styled.p`
  font-size: 2.7em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.title};
`;

export const Today = styled.p`
  position: relative;
  font-size: 13px;
  padding: 0 15px;
  font-weight: 700;
  color: ${(props) =>
    props.increase
      ? props.theme.colors.limeGreen
      : props.theme.colors.brightRed};

  ::before {
    content: "";
    background: ${(props) =>
      props.increase
        ? "url(/images/icon-up.svg)"
        : "url(/images/icon-down.svg)"};
    display: block;
    background-repeat: no-repeat;
    height: 5px;
    width: 11px;
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
  }
`;
