import React, { Component } from 'react'
import styled from 'styled-components'
import Counter from './Counter';

const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 40px auto;
border-bottom: solid black 1px;`

class HomeView extends Component {
    state = {
        rest: 100,
        coffee: 0,
        water: 0,
        meals: 0,
        breaks: 0,
    }
    render() {
        return (
            <div>
                <Header >
                    <h1> Project Week Wellness Tracker </h1>
                    <h4> Track your coffee consumption, rest, and everything else during a busy week, </h4>
                </Header>
                <Counter />
            </div>
        )
    }
}

export default HomeView