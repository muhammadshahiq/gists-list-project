import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';

function Header(props) {
  const { onChange } = props
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search onChange={onChange} />
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
  width:100%
`;

export default Header
