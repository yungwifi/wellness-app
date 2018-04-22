import React, { Component } from 'react'
import styled from 'styled-components'
import Counter from './Counter'

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 10px auto;`

const Items = styled.div`
width: 100px;
height: 100px;
border: solid black 1px;
display: flex;
justify-content: center;
align-items: center;
margin: 10px auto;`

class CounterList extends Component {
    render() {
        return (
            <Container >
                <Items >
                    Coffee
                </Items>
                <Items >
                    Rest
                </Items>
                <Items >
                    Water
                </Items>
                <Items >
                    Meals
                </Items>
                <Items >
                    Breaks
                </Items>
            </Container>
        )
    }
}

export default CounterList