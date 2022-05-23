import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #000000;
  .list{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .item{
      display: flex;
      align-items:center;
      :not(:last-child){
        margin-right: 15px;
      }
      svg{
        margin-right: 5px;
        width: 24px;
        height: 24px;
      }
    }
  }
`
