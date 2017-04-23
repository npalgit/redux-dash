import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHeader = styled(Header)
`
  margin-top: 30px !important;
`;

const StyledBanner = styled.div `
  padding: 5.25rem 5.25rem 3.25rem 5.25rem ;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  background-color: inherit;
  position: relative;
  text-align: center;
  overflow-x: hidden;
`;

const BannerContent = styled.div `
  padding: 5.25rem 5.25rem 3.25rem 5.25rem ;
  position: relative;
  width: 40rem;
  max-width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  z-index: 1;
`;

const BannerImage = styled.div `
-moz-flex-grow: 0;
-webkit-flex-grow: 0;
-ms-flex-grow: 0;
flex-grow: 0;
-moz-flex-shrink: 0;
-webkit-flex-shrink: 0;
-ms-flex-shrink: 0;
flex-shrink: 0;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
border-radius: 0;
`;

const BannerInnerImage = styled.img`
-moz-object-fit: cover;
-webkit-object-fit: cover;
-ms-object-fit: cover;
object-fit: cover;
-moz-object-position: center;
-webkit-object-position: center;
-ms-object-position: center;
object-position: center;
display: block;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 0;
`
export {
  StyledHeader,
  StyledBanner,
  BannerContent,
  BannerImage,
  BannerInnerImage,
};
