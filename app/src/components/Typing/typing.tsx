import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


export const Typing = ({handleFinish}: {handleFinish:()=>void}) => {
  return (
    <TypeAnimation
      cursor = {false}
      sequence={[
        `bash-4.4# kawasql -u kawachann -p
        Enter password:_________
        Welcome to the KawaSQL monitor.  Commands end with ;.
        Your KawaSQL connection id is 9
        Server version: 1.0.0 KawaSQL Community Server - GPL

        Copyright (c) 2024 Yuta Kawamura. 

        This console refer to MySQL.
        `,
        () => {
          handleFinish()
        },
        1000
      ]}
        speed={90}
        style={{ 
        whiteSpace: 'pre-line', 
        display: 'inline-block'}}
    />
  );
};