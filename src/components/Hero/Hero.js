import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Samantha
      </SectionTitle>
      <SectionText>
        I am a full-stack software developer and recent graduate of Flatiron School's Bootcamp.
      </SectionText>
      
    </LeftSection>
    
  </Section>
);

export default Hero;