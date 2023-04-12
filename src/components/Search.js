import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { IsMobileWidth } from './utills/utils';
import clsx from 'clsx';

const Search = (props) => {
  const { onChange } = props
  const mobileWidth = IsMobileWidth()
  return (
    <Wrapper>
      <InputBox style={{ width: mobileWidth ? '260px' : '400px' }}>
        <Octicon className='text-dark d-flex align-items-center pr-2' name="search" />
        <Input className='w-100' placeholder="Search Gists for the username" onChange={onChange} />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
