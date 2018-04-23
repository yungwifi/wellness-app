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
flex-direction: column;
align-items: center;
margin: 10px auto;`

class CounterList extends Component {

    render() {
        return (
            <Container >
                <Items >
                    Coffee
                    <Counter />
                </Items>
                <Items >
                    Rest
                    <Counter />
                </Items>
                <Items >
                    Water
                    <Counter />
                </Items>
                <Items >
                    Meals
                    <Counter />
                </Items>
                <Items >
                    Breaks
                    <Counter />
                </Items>
            </Container>
        )
    }
}

export default CounterList