//@ts-nocheck
'use client';

import React, { useEffect, useState } from 'react';
import { usePrepareContractWrite, useContractWrite, useContractRead, useAccount } from "wagmi";
import Loading from './loading';
import { Arbitrum,  } from "../constants/addresses/minimized"
import SingleAssetPage from './singleAssetPage';

export default function SSOV() {
    const [isLoading, setLoading] = useState(false)
    const [activeAsset, setActiveAsset] = useState("Ethereum")
    const { address, isConnecting, isDisconnected } = useAccount()




    /*****************************************************************
    * HELPER FUNCTIONS *
    *****************************************************************/

    

    /*****************************************************************
    * The following functions are used to render components *
    *****************************************************************/

    function SingleAsset(asset) {
       


        return (
           <div></div>
        )

    }


    



    /*****************************************************************
    * MAIN RENDER *
    ******************************************************************/
    if (isLoading) return (
        <Loading />
    )

   

    return (
        <div className="py-4 px-8 w-full">
            <div className='max-w-2xl'>
                <SingleAssetPage asset={activeAsset} />

            </div>
        </div>
    )


}
