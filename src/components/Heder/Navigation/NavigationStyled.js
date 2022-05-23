import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  .logoLink {
    margin-right: 87px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
  }

  .navList {
    margin: 0 auto;
    display: flex;
    align-items: center;

    .navItem:not(:last-child) {
      margin-right: 57px;
    }
    .itemLink{
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
    }
  }
`
