import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
  } from "./InfosecElements";

function InfoSection(props){
        return(
            <div>
                <InfoSec lightBg={props.lightBg}>
                    <Container>
                        <InfoRow imgStart={props.imgStart}>
                            <InfoColumn>
                                <TextWrapper>
                                    <TopLine lightTopLine={props.lightTopLine}>{props.topLine}</TopLine>
                                    <Heading lightText={props.lightText}>{props.headline}</Heading>
                                    <Subtitle lightTextDesc={props.lightTextDesc}>{props.description}</Subtitle>
                                    <Link to='/login'>
                                        <Button big fontBig primary={props.primary}>
                                            {props.buttonLabel}
                                        </Button>
                                    </Link>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                                <ImgWrapper start={props.start}>
                                    <Img src={props.path} alt={props.alt} width="100%" />
                                </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </div>
        );

    }
        

export default InfoSection;