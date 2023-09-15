import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = ({card}) => {
    return (
    Array(card).fill(0).map((_,index) => 
        <div className='box-2' key={index}>
        <div className='coin-img'>
            <Skeleton circle width={50} height={50}/>
        </div>
        <h2 className="coin-heading">
          <Skeleton count={4} style={{marginBottom:'1.2rem'}}/>
        </h2>
    </div>
    
    )
    )
}

  
    // <div className='box-2'>
    //     <div className='coin-img'>
    //         <Skeleton circle width={50} height={50}/>
    //     </div>
    //     <h2 className="coin-heading">
    //       <Skeleton count={4} style={{marginBottom:'1.2rem'}}/>
    //     </h2>
    // </div>
  

export default CardSkeleton