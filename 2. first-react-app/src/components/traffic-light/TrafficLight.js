import React, { Component } from 'react';
import './TrafficLight.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.currentColor = RED;
    }

    getNextColor(Color) {
        switch(color){
            case GREEN:
                return YELLOW;
            case YELLOW:
                return RED;
            case RED:
                return GREEN;
            default:
                return RED;
        }
    }

    render(){
        return <div className='TrafficLight'>
            <div className='light red'/>
            <div className='light yellow'/>
            <div className='light green'/>
        </div>
    }
}

export default TrafficLight;