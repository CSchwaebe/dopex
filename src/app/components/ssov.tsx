//@ts-nocheck
'use client';

import React, { useEffect, useState } from 'react';
import { usePrepareContractWrite, useContractWrite, useContractRead, useAccount } from "wagmi";
import Loading from '../components/loading';

export default function SSOV() {
    const [isLoading, setLoading] = useState(true)
    const [arbitrumSSOVs, setArbitrumSSOVs] = useState([])
    const [polygonSSOVs, setPolygonSSOVs] = useState([])

    const { address, isConnecting, isDisconnected } = useAccount()

    /*
    useEffect(() => {
        setLoading(true)
        fetch('https://api.dopex.io/v2/ssov', { next: { revalidate: 10 } })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setArbitrumSSOVs(data['42161'])
                setPolygonSSOVs(data['137'])
                data['42161'].map((ssov) => {
                    console.log(ssov.underlyingSymbol)
                })
                setLoading(false)
            })
    }, [])
    */


    /*****************************************************************
    * HELPER FUNCTIONS *
    *****************************************************************/

    

    /*****************************************************************
    * The following functions are used to render components *
    *****************************************************************/

    function SSOVCard(ssov) {

    }


    



    /*****************************************************************
    * MAIN RENDER *
    ******************************************************************/
    if (isLoading) return (
        <Loading />
    )

   

    return (
        <div className="p-8 w-full">
            
           
        </div>
    )


}
