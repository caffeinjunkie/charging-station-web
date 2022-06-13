import styled from 'styled-components';

import LoadingAnimation from '../../assets/images/LoadingAnimation';

export const StyledLoadingSpinner = styled(LoadingAnimation)`
  display: flex;
  width: 75px;
  height: 50px;
`;

export const StyledLoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
`;
