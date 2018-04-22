import React, { Component } from 'react';
import styled from 'styled-components'

const Math = styled.div`
display: flex;
flex-direction: row;`

class Counter extends Component {
    render() {
        return (
            <div>
                <Math >
                    <button> + </button>
                    <br />
                    <button> - </button>
                </Math>
            </div>
        );
    }
}

export default Counter;