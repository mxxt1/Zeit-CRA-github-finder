import React, { Component } from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
    border: 2px solid black; 
    width: 30%;
    margin: 0 auto;
    padding: 1%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 10px;                                                                                                                                                                    
`;

const StyledImg = styled.img`
    max-width: 50%;
    border-radius: 100%;
`;

const StyledH1 = styled.h1`
    text-decoration: none;
`;

export class UserCard extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <DivContainer>
                <StyledImg src={this.props.data.avatar_url} alt={this.props.data.login} />
              <a href={this.props.data.html_url}>  
                <StyledH1>{this.props.data.login}</StyledH1>
              </a>    
            </DivContainer>
        )
    }
}

export default UserCard
                                                                                                                                                                                         