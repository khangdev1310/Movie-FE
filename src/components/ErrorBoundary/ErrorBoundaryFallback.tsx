import { FC } from 'react';
import styled from 'styled-components';

type IProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const StyledDivParent = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleDivChild = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 100%;
  width: 100%;
  text-align: center;
`;

const StyledH2 = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
`;
const StyledH1 = styled.h1`
  font-size: 230px;
  margin: 0px;
  font-weight: 900;
  background: url(${process.env.PUBLIC_URL + '/background.jpg'}) no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #a12abd;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #fff !important;
  font-weight: 700;
  -webkit-box-shadow: 0px 4px 15px -5px #a12abd;
  box-shadow: 0px 4px 15px -5px #a12abd;
  cursor: pointer;
  margin-top: 30px;
`;

const ErrorBoundaryFallback: FC<IProps> = ({ error, resetErrorBoundary }) => {
  return (
    <StyledDivParent id="notfound">
      <StyleDivChild className="notfound">
        <div className="notfound-404 h-[280px] relative">
          <StyledH1>Error</StyledH1>
        </div>
        <StyledH2>{error.message}</StyledH2>
        <StyledLink className="errorLink" onClick={resetErrorBoundary}>
          Quay trở lại trang chủ
        </StyledLink>
      </StyleDivChild>
    </StyledDivParent>
  );
};

export default ErrorBoundaryFallback;
