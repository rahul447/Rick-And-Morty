import React from 'react';
import Aux from "../../hoc/Aux/Aux";

const ContainerDiv = styled.div`
    position: relative; 
    max-width: 800px; 
    margin: 0 auto;
`;

const ContainerImg = styled.img`
    vertical-align: middle;
`;

const ContainerContent = styled.div`
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
`;

const getCreatedSince = (date) => {
    return date;
}

const ImageStrip = props => {
    return (
        <Aux>
            <ContainerDiv>
                <ContainerImg src={props.image} alt={props.name} />
                <ContainerContent>
                    <h1>{props.name}</h1>
                    <p>id - {props.id} created {getCreatedSince(props.created)}</p>
                </ContainerContent>
            </ContainerDiv>
        </Aux>
    );
};

export default ImageStrip;
