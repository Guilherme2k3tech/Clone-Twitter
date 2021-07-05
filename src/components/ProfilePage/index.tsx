import React from 'react';

import Feed from "../Feed/Index"

import { Container, Banner, Avatar, ProfileData,LocationIcon, CakeIcon, Fallowage, EditButton} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          
          <Banner>
            <Avatar>

            </Avatar>
          </Banner>

          <ProfileData>
           <EditButton outlined>Editar Perfil</EditButton>
          <h1>Ermes</h1>
          <h2>@oErmes</h2>

            <p>
                Content Creator at <a href='https://www.youtube.com/channel/UCc5h6tUGA6LfLma9_WZh8Pg'>YouTube</a>
            </p>

            <ul>
              <li>
                <LocationIcon/>
                    Joinville, SC.
              </li>
              <li>
                <CakeIcon/>
                    28 de Setembro de 2003
              </li>
            </ul>

            <Fallowage>
              <span>Seguindo <strong> 3</strong></span>
              <span>
                <strong>45 </strong> Seguidores
                </span>

            </Fallowage>
          </ProfileData>

    <Feed/>

      </Container>
  );
}

export default ProfilePage;