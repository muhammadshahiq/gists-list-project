import React from 'react';
import { Box, Typography } from "@mui/material"
import SiteText from './site.text';
import { IsMobileWidth } from './utills/utils';
import clsx from 'clsx';
//I didn't add typescript and other good to have task some work due to the time shortage and office work 
const Gist = (props) => {
    const { name, image, date, description, files } = props
    const mobileWidth = IsMobileWidth()
    return (
        <Box className='pt-2 pb-2 w-100 position-relative'>
            <Box className={clsx(!mobileWidth && 'flex-row align-items-center', mobileWidth && 'flex-column align-items-start', 'd-flex justify-content-between flex-wrap')}>
                <SiteText label={name} image={image ? image : ''} />
                <Box className={clsx(mobileWidth && 'pt-2 pb-2', 'd-flex justify-content-between align-items-center flex-wrap')}>
                    <SiteText label={`${files && files.length} Files`} iconSrc={`${process.env.PUBLIC_URL}/assets/images/arrows.svg`} />
                    <SiteText label='Folks' iconSrc={`${process.env.PUBLIC_URL}/assets/images/folks.svg`} />
                    <SiteText label='Comments' iconSrc={`${process.env.PUBLIC_URL}/assets/images/chat.svg`} />
                    <SiteText label='Stars' iconSrc={`${process.env.PUBLIC_URL}/assets/images/star.svg`} />
                </Box>
            </Box>
            <Typography className='text-dark pt-1 pb-1' variant='body2'>{date}</Typography>
            <Typography className='pt-2 pb-2 text-dark font-weight-normal text-ellipsis-clamp-3' variant='h6'>{description}</Typography>
            <div className='d-flex pl-2 pr-2 flex-wrap pt-2 pb-2'>
                {files && files.length > 0 && files.map((data, index) => {
                    return <div key={index}>
                        <SiteText label={data?.filename} iconSrc={`${process.env.PUBLIC_URL}/assets/images/file.svg`} />
                    </div>
                })}
            </div>
        </Box>
    )
}

export default Gist

//This is the common card component used to render the gist list