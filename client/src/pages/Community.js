import React from 'react';
import styled from 'styled-components';
import "./style.css"
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #15202B; /* Twitter's dark background color */
  color: #fff;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const Header = styled.div`
  background-color: #192734; /* Slightly lighter background color */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #1da1f2; /* Twitter's blue color */
`;

const SearchBar = styled.input`
  width: 300px;
  background-color: #253341;
  border: none;
  padding: 5px;
  border-radius: 8px;
  color: #fff;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url('https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697718062.webp');
  background-size: cover;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Sidebar = styled.div`
  background-color: #253341;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
  overflow-y: auto;
`;

const Channels = styled.div`
  background-color: #253341;
  flex: 1;
  padding: 20px;
  margin-left: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const ChannelList = styled.ul`
  list-style: none;
  padding: 6px;
  font-size: 0.9em;
`;

const ChannelListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const ChannelLink = styled.a`
  color: #1da1f2;
  text-decoration: none;
  font-size: 1.5em;
`;

const ChannelDetails = styled.div`
  font-size: large;
  margin-left: 10px;
`;

const ChannelDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: small;
`;

const RelatedGroups = styled.div`
  background-color: #253341;
  width: 300px;
  padding: 20px;
  margin-left: 10px;
  border-radius: 8px;
  height: 100%;
  overflow-y: auto;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const GroupPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const GroupName = styled.div`
  margin-left: 10px;
  color: #1da1f2;
`;

export const Community = () => {
  return (
    <PageWrapper>
      <Header>
        <Title>ProjectX</Title>
        <SearchBar type="text" placeholder="Search..." />
        <ProfilePicture />
      </Header>
      <Container>
        <Sidebar>
          <h2>Community name</h2>
          <p>the info for the community</p>
        </Sidebar>
        <Channels>
          <ChannelList>
            <ChannelListItem>
              <ChannelLink href="#">NodeJs</ChannelLink>
              <ChannelDetails>
                <ChannelDescription>Discussion on Node.js and related topics.</ChannelDescription>
                <ChannelDescription>Active Members: 500</ChannelDescription>
              </ChannelDetails>
            </ChannelListItem>
            <ChannelListItem>
              <ChannelLink href="#">goLang</ChannelLink>
              <ChannelDetails>
                <ChannelDescription>For Go programming language enthusiasts.</ChannelDescription>
                <ChannelDescription>Active Members: 350</ChannelDescription>
              </ChannelDetails>
            </ChannelListItem>
          </ChannelList>
        </Channels>
        <RelatedGroups>
          <h2>Related Groups</h2>
          <Group>
            <GroupPicture
              src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697718062.webp"
              alt="Related Group 1"
            />
            <GroupName>Related Group 1</GroupName>
          </Group>
          <Group>
            <GroupPicture
              src="https://www.taskade.com/images/avatars/avatar_placeholder_9_pink.png"
              alt="Related Group 2"
            />
            <GroupName>Related Group 2</GroupName>
          </Group>
          {/* Add more related groups as needed */}
        </RelatedGroups>
      </Container>
    </PageWrapper>
  );
};
