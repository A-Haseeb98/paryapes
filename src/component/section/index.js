import './index.css';
import video from '../../assets/video.mp4'
import icon from '../../assets/WHITE.gif'
import logo from '../../assets/logo.png'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { useState, useEffect } from "react";
import Typed from 'react-typed';
import audio from '../../assets/audio.wav'


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};


function FirstSection() {
    const [volume, setVolume] = useState(false);
    const [visible, setVisible] = useState(true);
    const [playing, toggle] = useAudio(audio);

    function handleVolume(sound) {
        setVolume(!sound);
        toggle();
    }
    function handleVisibilty() {
        setVisible(visible);
    }


    return (
        <div className="main_container">
            <div className='top_bar'>
                <div className='display_none'>
                 
                </div>
                <div className='top_bar_center'>
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
                <div className='icons_container'>
                    <span onClick={()=> window.open('https://www.instagram.com/partyapesclub/','_blank')}><FaInstagram /></span>
                    <span onClick={()=> window.open('https://twitter.com/PartyApesClub','_blank')}><FaTwitter /></span>
                </div>


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
                <video preload='true' playsInline loop autoPlay='true' muted={!volume}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='bottom_bar'>
                <div className='img_wrapper' onClick={() => window.open('https://discord.link/PartyApesClub', '_blank')}>
                    <img src={icon} alt='' />
                </div>
                <span onClick={() => window.open('https://discord.link/PartyApesClub', '_blank')}> VISIT OUR DISCORD</span>
            </div>
        </div>
    );
}

export default FirstSection;
