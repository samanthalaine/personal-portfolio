import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There
      </SectionTitle>
      <SectionText>
        My name is Samantha and I am a full-stack software developer and recent graduate of Flatiron School's Bootcamp.
      </SectionText>
      
    </LeftSection>
    
  </Section>
);

export default Hero;