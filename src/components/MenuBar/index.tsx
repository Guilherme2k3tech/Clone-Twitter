import React from 'react';

import Button from '../Button';


import { Container, Topside, Logo, HomeIcon, MenuButton, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, ProfileData, ExitIcon, Botside, Avatar} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
          <Logo/>

        
        <MenuButton> 
            <HomeIcon/>
            <span>Página Inicial</span>

        </MenuButton>
              
        <MenuButton> 
            <BellIcon/>
            <span>Notificações</span>

        </MenuButton>
              
        <MenuButton> 
            <EmailIcon/>
            <span>Mensagens</span>

        </MenuButton>
              
        <MenuButton> 
            <FavoriteIcon/>
            <span>Favoritados</span>

        </MenuButton>
              
        <MenuButton> 
            <ProfileIcon className="active"/>
            <span>Perfil</span>

        </MenuButton>
          
        <Button>
        <span>Tweetar</span>
        </Button>
        </Topside>


      <Botside>

      <Avatar/>


      <ProfileData>

          <strong>Ermes</strong>
          <span>@oErmes</span> 
       </ProfileData>


        <ExitIcon/>
      </Botside>
        
      </Container>

  );
}

export default MenuBar;           