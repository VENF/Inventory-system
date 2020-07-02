import React from 'react';
import styled from 'styled-components';

import useWindowsDimensions from '../hooks/useWindowsDimensions';

export default function PageContainer(props) {
  const { isSmall, isMedium } = useWindowsDimensions(600, 900);
  const Container = styled.div`
    width: ${isSmall ? '90%' : '80%'};
    max-width: 850px;
    margin: auto;
    border: 1px solid red;
  `;
  return <Container>{props.children}</Container>;
}
