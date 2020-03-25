import React from 'react';
import Aux from "../../hoc/Aux/Aux";
import styled from 'styled-components';
import ImageStrip from '../ImageStrip/ImageStrip';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column
`;

const ImageStripSection = styled.section`
`;


const StyledDetailSection = styled.section`
`;

const RowWrapperDiv = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;

    &:after {
        content:' ';
        display:block;
        border: 0.5px solid black;
    }
`;

const RowKeyDiv = styled.div`
    color: grey;
`;

const RowValueDiv = styled.div`
    color: orange;
`;

const loadRows = (row) => {
    let allRows = [];
    for (let [key, value] of Object.entries(row)) {
        allRows.push(
            <RowWrapperDiv key={key}>
                <RowKeyDiv>{key}</RowKeyDiv>
                <RowValueDiv>{value}</RowValueDiv>
            </RowWrapperDiv>
        )
    }
    return allRows;
}

const Card = props => {
    let {status, species, gender, origin, location} = props;
    let valueMapper = {'STATUS' : status, 'SPECIES': species, 'GENDER': gender, 
    'ORIGIN' : origin.name, 'LAST LOCATION': location.name};

    return (
        <Aux>
            <StyledArticle> 
                <ImageStripSection><ImageStrip {...props}/></ImageStripSection>
                <StyledDetailSection>
                    {loadRows(valueMapper)}
                </StyledDetailSection>
            </StyledArticle>
        </Aux>
    );
};

export default Card;
