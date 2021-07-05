import React from 'react';
import StickyBox from "react-sticky-box"


import List from "../List/Index"
import FollowSugestion from '../FollowSugestion';
import News from "../News"


import { Container, SearchWrapper, SearchIcon, SearchInput, Body} from './styles';

const SideBar: React.FC = () => {
  return (
    
    
    
    <Container>

    <SearchWrapper>


    <SearchInput placeholder="Buscar"/>
    <SearchIcon/>
    </SearchWrapper>
 
 <StickyBox>
    <Body>

            <List
            title="Talvez você ache interessante"
            elements={[
              <FollowSugestion
                name="Kratos"
                nickname="@fantasmadesparta"

              />,
              <FollowSugestion
              name="Carl Jhonson"
              nickname="@busta"

            />,
            <FollowSugestion
            name="Leon S. Kennedy"
            nickname="@helpleon"
          />
        ]}
            />

            <List
            title="Talvez você ache interessante"
            elements={[
              <News/>,
              <News/>,
              <News/>,

            ]}
            />




    </Body>
    </StickyBox>
    </Container>
    
    
    
    
    
    
    );
}

export default SideBar;