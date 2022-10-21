import { ContainerDashBoard } from "../../../pages/Dashboard/style";
import { PerfilDashBoard } from "./styles";
import { Text } from "../../../styles/TypograpyText";



export const DashBoardPerfil = ({ user }: any) => {
  return (
    <PerfilDashBoard>
      <ContainerDashBoard>
        <Text tag="h2" fontSize="title2">
          Olá, {user ? user.name : "..."}
        </Text>
        <Text tag="h1" fontSize="text1" color="grey">
          {user ? user.course_module : "..."}
        </Text>
      </ContainerDashBoard>
    </PerfilDashBoard>
  );
};
