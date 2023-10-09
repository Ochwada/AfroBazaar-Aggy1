// Styles.js
import styled from "@emotion/styled";

const StyledRoot = styled.div`
  width: 100%;
`;

const StyledMedia = styled.img`
    paddingTop: 56.25%; // 16:9 aspect ratio
`;

const StyledCardContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledCardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;



export {
    StyledRoot,
    StyledMedia,
    StyledCardContent,
    StyledCardActions
};