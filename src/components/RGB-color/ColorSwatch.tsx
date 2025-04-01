import React, { useContext } from 'react';
import { RGBContext } from '../../context/RGB-context';
import './RGB-color.scss';

const ColorSwatch: React.FC = () => {
    const { red, green, blue } = useContext(RGBContext);

    return (
        <div
            className="color-swatch"
            style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        ></div>
    );
};

export default ColorSwatch;