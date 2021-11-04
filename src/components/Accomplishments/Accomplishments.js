import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: "220+", text: 'Github Contributions in the last quarter', },
  { number: null, text: 'Certified AWS Cloud Practitioner', }
];

const Accomplishments = () => (
 <Section>
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes>
     {data.map((card, index) => (
       <Box key={index}>
         <BoxNum>{card.number}</BoxNum>
         <BoxText>{card.text}</BoxText>
       </Box>
     ))}
   </Boxes>

 </Section>
);

export default Accomplishments;
