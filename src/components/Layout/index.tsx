import React from 'react';

 import { Container, Wrapper} from './styles';

 import Main from "../Main/Index";
 import MenuBar from "../MenuBar"
 import SideBar from "../SideBar"

 
const Layout: React.FC = () => {
  return (
      <Container>
          <Wrapper>
         <MenuBar/>
           <Main/>
           <SideBar/>
         </Wrapper>
      </Container>
  );
}

export default Layout;

