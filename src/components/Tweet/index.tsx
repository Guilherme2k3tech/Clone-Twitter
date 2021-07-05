import React from 'react';

import { Container, Retweeted, Body, Avatar, Dot, Content, Header, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from "./styles"

const Tweet: React.FC = () => {
  return (
      <Container>
        <Retweeted>
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar/>

            <Content>
                <Header>
                    <strong>Ermes</strong>
                    <span>@oErmes</span>
                    <Dot/>
                    <time>5 de julho</time>
                </Header>

                <Description>
                    Sic Parvis Magna
                </Description>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        750
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        1060
                    </Status>
                    <Status>
                        <LikeIcon/>
                        3090
                    </Status>
                </Icons>

            </Content>
        </Body>
      </Container>
  );
}

export default Tweet; 