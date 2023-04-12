import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { getImageUrl } from './utills/utils'

const SiteText = (props) => {
    const { label, image, iconSrc } = props
    return (
        <Wrapper className='d-flex align-items-center'>
            {image ?
                <img className='rounded-circle d-flex align-items-center' src={getImageUrl(image)} alt='random-avatars' width='35px' />
                :
                iconSrc ?
                    <img className='d-flex align-items-center cursor-pointer' src={getImageUrl(iconSrc)} alt='random-icons' width='16px' />
                    : null}
            <Typography className='pl-2 pr-3 d-flex align-items-center cursor-pointer' variant='body1'>{label}</Typography>
        </Wrapper>
    )
}

const Wrapper = styled.div`
 color:#3366CC;
`;

export default SiteText

//This component get props of image, icon and label