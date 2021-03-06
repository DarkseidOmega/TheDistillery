import React from "react";
import styled from "styled-components";
import { Button, A, Flex } from "../atoms";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ATheme } from "../atoms/links/A/types";
import { ComponentListContainer } from "../molecules/ComponentListContainer/ComponentListContainer";
import { Route } from "../constants";
import { useHistory } from "react-router-dom";
import {FlexProps} from "../atoms/layout/Flex";

// TODO: abstract as atom
const NavContainer = styled.div`
    width: 325px; //calc(100% - 20px);
    height: 52px;
    background-color: transparent;
    margin-top: 20px;
    border: solid 3px black;
    border-radius: 10px;
    display: inline-flex;
    box-shadow: 0px 15px 15px 0px #cfcfcf;
`;

const TopStuff = styled(Flex)`
    @media only screen and (max-width: 605px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const NavigationBar = () => {
    const history = useHistory();
    // TO DO: Abstract as molecule
    const buttonList = [
        <Button
            id="NavBar-Home-Button"
            key="NavBar-Home-Button"
            onClick={() => {
                history.push(Route.HOME);
            }}
        >
            Home
        </Button>,
        <Button
            id="NavBar-Resume-Button"
            key="NavBar-Resume-Button"
            onClick={() => {
                history.push(Route.RESUME);
            }}
        >
            Resume
        </Button>,
        <Button
            id="NavBar-OtherStuff-Button"
            key="NavBar-OtherStuff-Button"
            onClick={() => {
                window.alert("working on it...");
            }}
        >
            Other Stuff
        </Button>,
    ];

    const iconList = [
        <A
            key="LinkedIn-ButtonIcon"
            theme={ATheme.ICONLINK}
            href="https://www.linkedin.com/in/robert-mercado-30801990/"
        >
            <FaLinkedin />
        </A>,
        <A key="Github-ButtonIcon" theme={ATheme.ICONLINK} href="https://github.com/DarkseidOmega/">
            <FaGithub />
        </A>,
    ];
    return (
        <TopStuff>
            <NavContainer data-id="NavContainer">
                <ComponentListContainer data-id="ButtonListContainer">{buttonList}</ComponentListContainer>
            </NavContainer>

            <Flex margin="25px 0 0 15px" width="85px">
                <ComponentListContainer data-id="IconListContainer">{iconList}</ComponentListContainer>
            </Flex>
        </TopStuff>
    );
};
