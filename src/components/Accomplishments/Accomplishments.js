import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: "800+", text: 'Github Contributions in the last year' },
  { number: 2021, text: 'Certified AWS Cloud Practitioner' },
  { number: 2022, text: 'Started work as a full time developer' },
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
