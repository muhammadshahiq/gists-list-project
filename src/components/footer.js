import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Wrapper>
            {`©${new Date().getFullYear()}. All rights reserved.`}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content:center
`;

export default Footer
