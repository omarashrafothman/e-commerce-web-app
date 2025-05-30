import React from 'react'
import Banner from '../banner/Banner'
import { ListBannerProps } from "../../types/types";
function BannerList({ data }: ListBannerProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {data.map((item, index) => (
                <Banner key={index} bannerDescription={item.bannerDescription} bannerTitle={item.bannerTitle} link={item.link} />
            ))}





        </div>
    )
}

export default BannerList