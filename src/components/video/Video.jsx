import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src='https://yt3.ggpht.com/a_tTPCFe6hi1HbD-Tq-Y2RqL5slysQRM0ZdefHluGBHXOQvNEtxQPl9fUGr9U3mF59y2tyrTtedc_go=s640-nd-v1' alt=''/>
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create App in 5 Minutes #madebyHanzo
            </div>
            <div className="video__details">
                <span><AiFillEye /> 5m Views •&nbsp;</span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img src='https://yt3.googleusercontent.com/ytc/AOPolaS1dMCWQTnCeKEWYr_7p6cwa-P2UnhB8uijun_D=s176-c-k-c0x00ffffff-no-rj' alt='' />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
