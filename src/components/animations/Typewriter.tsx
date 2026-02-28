import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
}

export default function Typewriter({ text, delay = 0, speed = 50 }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [displayedText, text, speed, started]);

    return (
        <span className="font-serif italic text-brand/80">
            {displayedText}
            <span className="inline-block w-[2px] h-[1.2em] bg-brand ml-1 animate-pulse align-middle" />
        </span>
    );
}
