import React, { useCallback, useEffect, useRef } from 'react';
import md5 from './md5/md5.min';

const Identicon = (props) => {
    const canvas = useRef({});
    
    /**
     * Generates an identicon based on a given
     * string and draws it to the canvas.
     */
    const updateCanvas = useCallback(() => {
        let { fg, bg, count, palette, string, size, getColor, padding } = props;
        
        const hash = md5(string);
        const block = Math.floor(size / count);
        const hashColor = hash.slice(0, 6);
        
        const arr = hash.split('').map(el => (parseInt(el, 16) < 8) ? 0 : 1);
        
        if (palette && palette.length) {
            const colorIndex = Math.floor(parseInt(hash.slice(-3), 16) * palette.length / 4095);
            fg = palette[colorIndex];
        }
        
        if (getColor) {
            getColor(fg || hashColor);
        }
        
        canvas.current.width = block * count + padding;
        canvas.current.height = block * count + padding;
        
        let map = [];
        
        map[0] = map[4] = arr.slice(0, 5);
        map[1] = map[3] = arr.slice(5, 10);
        map[2] = arr.slice(10, 15);
        
        const ctx = canvas.current.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        
        map.forEach((row, i) => {
            row.forEach((el, j) => {
                if (el) {
                    ctx.fillStyle = fg ? fg : '#' + hashColor;
                    ctx.fillRect(block * i + padding, block * j + padding, block - padding, block - padding);
                } else {
                    ctx.fillStyle = bg;
                    ctx.fillRect(block * i + padding, block * j + padding, block - padding, block - padding);
                }
            });
        });
    }, [props]);
    
    /**
     * Updates the canvas every time updateCanvas changes,
     * which happens every time when the props change.
     */
    useEffect(() => {
        updateCanvas();
    }, [updateCanvas]);
    
    return <canvas ref={canvas} className={props.className} style={{ width: props.size, height: props.size }} />;
};

Identicon.defaultProps = {
    className: 'identicon',
    bg: 'transparent',
    count: 5,
    palette: null,
    fg: null,
    padding: 0,
    size: 400,
    getColor: null,
    string: ''
};

export default Identicon;