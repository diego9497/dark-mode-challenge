import React, { useContext } from "react";
import {
  Header,
  Title,
  Text,
  TitleWrapper,
  HeaderContent,
  SwitchContainer,
  Switch,
  Input,
} from "./styles";
import { Context } from "../../ContextTheme";

const HeaderComponent = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(Context);
  return (
    <Header>
      <HeaderContent>
        <TitleWrapper>
          <Title>Social Media Dashboard</Title>
          <Text>Total Followers: 23,004</Text>
        </TitleWrapper>
        <SwitchContainer>
          <Text>Dark mode</Text>
          <Switch htmlFor="dark-mode" checked={isDarkMode} />
          <Input
            type="checkbox"
            id="dark-mode"
            onChange={() => {
              setIsDarkMode();
            }}
          />
        </SwitchContainer>
      </HeaderContent>
    </Header>
  );
};
export default HeaderComponent;
