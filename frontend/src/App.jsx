import React from 'react';
export default function App() { 
    return (
        <div>
            <h1>🎧 My Online Radio</h1>
            <audio controls autoPlay><source src='/stream' type='audio/mpeg'/>Your browser does not support the audio element.</audio>
        </div>);
    }