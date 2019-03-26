import React from 'react';
import lightLogo from '../images/medium_light.png';
import darkLogo from '../images/medium_dark.png';
import lightImage from "../images/media-light.jpg";
import darkImage from "../images/media-dark.jpg";

export const themeConfig = {
    light: {
        headerBg: '#F7B30C',
        fontColor: '#3c3c3c',
        bodybg: 'white',
        logo: lightLogo,
        media: lightImage
    },
    dark: {
        headerBg: '#3c3c3c',
        fontColor: 'white',
        bodybg: '#3c3c3c',
        logo: darkLogo,
        media: darkImage
    }
};
const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;
