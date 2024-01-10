import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


export const Typing = ({handleFinish}: {handleFinish:()=>void}) => {
  return (
    <TypeAnimation
      cursor = {false}
      sequence={[
        `bash-4.4# mysql -u kawachann -p portfolio
        Enter password:_______
        Welcome to the MySQL monitor.  Commands end with ; or \g.
        Your MySQL connection id is 9
        Server version: 8.2.0 MySQL Community Server - GPL

        Copyright (c) 2000, 2023, Oracle and/or its affiliates. 

        Oracle is a registered trademark of Oracle Corporation and/or its affiliates. 
        Other names may be trademarks of their respective owners.
        `,
        () => {
          handleFinish()
        },
        1000,
      ]}
        speed={90}
        style={{ 
        whiteSpace: 'pre-line', 
        display: 'inline-block'}}
    />
  );
};