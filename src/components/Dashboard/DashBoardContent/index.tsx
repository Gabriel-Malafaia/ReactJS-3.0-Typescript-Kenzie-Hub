import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ContainerDashBoard } from "../../../pages/Dashboard/style";
import { ContentCard } from "./components/ContentCards";
import { ContentContainer } from "./components/ContentContainer";
import { ContentHeader } from "./components/ContentHeader";

export const DashBoardContent = () => {
  const { user } = useContext(UserContext);

  return (
    <ContainerDashBoard>
      <ContentHeader />
      <ContentContainer>
        {user?.techs &&
          user.techs.map((elem) => {
            return (
              <ContentCard
                key={elem.id}
                id={elem.id}
                title={elem.title}
                status={elem.status}
              />
            );
          })}
      </ContentContainer>
    </ContainerDashBoard>
  );
};
