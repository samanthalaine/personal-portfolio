import React from "react";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineDownload
} from "react-icons/ai";
import Button from '../../styles/GlobalComponents/Button';


import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:samanthalaine8@gmail.com">
            samanthalaine8@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Button onClick={()=> window.location = "https://docs.google.com/document/d/1MexZH3i2BR5AajOwX1hY-qzqZi0f3kbo5ey8jWGYQ3I/edit"}>View Resume</Button>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/samanthalaine">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/samantha-laine/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/samanthacodes">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
