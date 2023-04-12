import React, { useEffect, useState } from 'react'
import { getPublicGists, getGistForUser } from '../services/gistService'
import { Container, Divider, Typography } from '@mui/material';
import styled from 'styled-components'
import Gist from './Gist';
import { formatDate } from './utills/utils';
import GistListSkeleton from './skeletons/gistList.skeleton';
import { memo } from 'react';

const GistList = (props) => {
    const { username } = props
    const [gists, setGists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //This useeffect runs conditionaly if user name than get same username lists otherwise get public list 
    useEffect(() => {
        setIsLoading(true);
        if (username) {
            getGistForUser(username)
                .then((response) => {
                    setGists(response.data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        else {
            getPublicGists()
                .then((response) => {
                    setGists(response.data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [username]);

    return (
        <Wrapper>
            <Container maxWidth='sm'>
                {
                    isLoading ?
                        <div className='pt-3'>
                            {Array.from(new Array(6)).map((_, i) => {
                                return <div key={i} className='mt-3 mb-3'><GistListSkeleton /></div>
                            })}
                        </div>
                        : null
                }
                {gists && gists.length > 0 ?
                    gists && gists.map((data, index) => {
                        return <div key={index} className='pt-3 mt-2 pb-3'>
                            <Gist
                                name={data && data.owner && data?.owner?.login}
                                image={data && data.owner && data?.owner?.avatar_url}
                                date={`Created at: ${formatDate(data?.created_at)}   Last update: ${formatDate(data?.updated_at)}`}
                                description={data?.description}
                                files={data && Object.values(data?.files)}
                            />
                            <Divider />
                        </div>
                    }) :
                    error ?
                        <Typography sx={{ height: '90vh' }} variant='h6' className='w-100 d-flex justify-content-center align-items-center text-danger'>Error: {error}</Typography>
                        :
                        <Typography sx={{ height: '90vh' }} variant='h6' className='w-100 d-flex justify-content-center align-items-center text-dark'>No Data Found</Typography>
                }
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  height:100%
`;

export default memo(GistList)