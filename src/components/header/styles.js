import styled from "styled-components";

export const Header = styled.header`
  background: ${(props) => props.theme.colors.topBackground};
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px 20px;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 100px;
  margin-bottom: -100px;

  @media (max-width: 375px) {
    display: block;
  }
`;

export const TitleWrapper = styled.div`
  @media (max-width: 375px) {
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
    margin-bottom: 15px;
    padding-bottom: 15px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
  font-size: 24px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  font-weight: 700;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 375px) {
    justify-content: space-between;
  }
`;

export const Switch = styled.label`
  margin-left: 10px;
  width: 55px;
  height: 26px;
  background: ${(props) => props.theme.colors.toggle};
  border-radius: 16px;

  ::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-top: 3px;
    margin-left: 3px;
    background: ${(props) => props.theme.colors.background};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${(props) =>
      props.checked ? "translateX(29px)" : "translateX(0px)"};
  }
`;

export const Input = styled.input`
  display: none;
`;
