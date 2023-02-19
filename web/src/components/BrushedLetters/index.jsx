import React, { useState } from "react";
import { StyledBrushedLetters } from './BrushedLetter.styled';


export function BrushedLetters({ text }) {

   //breaks the text into words and creates an array
   const words = text.split(" ");

   return (
       <>
       {//map over Letters array and takes each letter and its index
       words.map((word, index) => (
           <StyledBrushedLetters
           key={index}
           >
           {word+'\u00A0'}
           </StyledBrushedLetters>
          
       ))}
       </>
   );
}
