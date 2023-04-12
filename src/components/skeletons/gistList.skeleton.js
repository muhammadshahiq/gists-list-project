import { Skeleton } from '@mui/lab';
import React from 'react';

function GistListSkeleton() {
    return (
        <div>
            <div className="w-100 border p-1 card-style">
                <div className='d-flex justify-content-between'>
                    <div className='w-100 d-flex align-items-center'>
                        <Skeleton variant='circle' className="rounded-circle py-1" width="5%" />
                        <Skeleton className="py-1 ml-2" width="20%" />
                    </div>
                    <Skeleton width="60%" />
                </div>
                <div className='pt-2'>
                    <Skeleton width='80%' />
                    <Skeleton width="60%" />
                    <Skeleton width="80%" />
                </div>
            </div>
            {/* <Skeleton variant="text" width={80} /> */}
        </div>
    )
}

export default GistListSkeleton;