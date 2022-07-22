import React from "react";

import { FooterContainer } from "../styles";

export default function Header() {
  const [currentYear, yearImadeThis] = [new Date().getFullYear(), 2021];

  return (
    <FooterContainer>
      <p>
        © {currentYear === yearImadeThis
          ? yearImadeThis
          : `${yearImadeThis} - ${currentYear}`} UltiRequiem
      </p>
    </FooterContainer>
  );
}
