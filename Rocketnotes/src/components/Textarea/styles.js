import styled from "styled-components";

export const Container = styled.textarea`

  width: 100%;
  height: 150px;


  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme}) => theme.COLORS.GRAY_300};

  border: none;
  resize: none;
  
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 10px;

  
  > svg {
      margin-left: 16px;
    }

    &:placeholder{
      color: ${({ theme}) => theme.COLORS.GRAY_300};
    }

`