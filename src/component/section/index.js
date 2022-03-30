import './index.css';
import video from '../../assets/video.mp4'
import icon from '../../assets/WHITE.gif'
import logo from '../../assets/logo.png'

import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { useState } from 'react';
import Typed from 'react-typed';


function FirstSection() {
    const [volume, setVolume] = useState(false);
    const [visible, setVisible] = useState(true);
    function handleVolume(sound) {
        setVolume(!sound);
    }
    function handleVisibilty() {
        setVisible(visible);
    }


    return (
        <div className="main_container">
            <div className='top_bar'>
           
                <div className='logo_container'>
                    <img src={logo} alt='' />
                </div>
                <Typed
                    strings={['Coming Soon...']}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />
            </div>
            <div
                className='video_container'
                onMouseLeave={() => handleVisibilty(visible)}
                onMouseEnter={() => handleVisibilty(visible)}
            >

                {visible ? (
                    <span className="volume_buttton">
                        {volume ? (
                            <FiVolume2
                                className="icon_volume"
                                color="#fff"
                                onClick={() => handleVolume(volume)}
                            />
                        ) : (
                            <FiVolumeX
                                color="#fff"
                                className="icon_volume"
                                onClick={() => handleVolume(volume)}
                            />
                        )}
                    </span>
                ) : null}
                <video playsInline loop autoPlay='true' muted={!volume}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='bottom_bar'>
                <div className='img_wrapper' onClick={() => window.open('https://discord.link/PartyApesClub', '_blank')}>
                    <img src={icon} alt='' />
                </div>
                <span onClick={() => window.open('https://discord.link/PartyApesClub', '_blank')}>DISCORD</span>
            </div>
        </div>
    );
}

export default FirstSection;
