import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ContainerDashBoard } from "../../../pages/Dashboard/style";
import { Button } from "../../../styles/components/Button/style";
import { Text } from "../../../styles/TypograpyText";
import { HeaderDashboard } from "./styles";

export const DashBoardHeader = () => {
  const { logoutUser } = useContext(UserContext);

  return (
    <HeaderDashboard>
      <ContainerDashBoard>
        <Text tag="h1" fontSize="title1" color="primary">
          Kenzie Hub
        </Text>
        <Button onClick={() => logoutUser()}>Logout</Button>
      </ContainerDashBoard>
    </HeaderDashboard>
  );
};
