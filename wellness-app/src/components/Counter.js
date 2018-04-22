import React, { Component } from 'react'
import styled from 'styled-components'

const Coffee = styled.div`
width: 100px;
height: 100px;
background-image: src='https://image.flaticon.com/icons/svg/633/633652.svg';
border: solid black 1px;`

class Counter extends Component {
    render() {
        return (
            <Coffee >
                Coffee
            </Coffee>
        )
    }
}

export default Counter 