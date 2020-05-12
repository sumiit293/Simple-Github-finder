import React, { Component } from 'react'

export class Cross extends Component {
    render() {
        const test = this.props.Test;
        const setTest = this.props.set_Test;
        return (
            { test } && (<div style={{ width: '40%', padding: '10px', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }}>
                this is cross  <span style={{ marginLeft: '70%' }} id="close" onClick={setTest}>X</span></div>)
        )
    }
}

export default Cross



// <div style={{ width: '40%', padding: '10px', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }}>
//         this is cross  <span style={{ marginLeft: '70%' }} id="close" onClick={this.pros.setTest}>X</span></div>