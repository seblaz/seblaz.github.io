import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from 'components/ProjectCard';

import matrix from 'assets/img/proyects/snake/matrix.jpg';
import predictingUserConversions from 'assets/img/proyects/predicting-user-conversions.jpg';
import finalFight from 'assets/img/proyects/final fight.png';
import winAutomation from 'assets/img/proyects/winautomation.svg';
import cuadernosYa from 'assets/img/proyects/cuadernos ya.jpg';
import ContentWrapper from "./ContentWrapper";
import ContentTitle from "../components/ContentTitle";


const projects = [
    {
        title: 'Retro Snake',
        imgSource: matrix,
        description: 'El clásico juego snake proyectado en una matriz de leds, controlable a través de Wi-Fi.',
        namespace: 'seblaz',
        repo: 'retro-snake',
        anchor: 'retro-snake'
    }, {
        title: 'Prediciendo compras de usuarios',
        imgSource: predictingUserConversions,
        description: 'Desarrollo de algoritmos de Machine Learning para calcular la probabilidad de que un usuario realice una compra en la plataforma de Trocafone.',
        namespace: 'seblaz',
        repo: 'Predicting-user-conversions',
        anchor: 'Predicting-user-conversions'
    }, {
        title: 'Final Fight',
        imgSource: finalFight,
        description: 'Juego multijugador similar a Final Fight creado por Capcom, desarrollado como una aplicación de tipo cliente-servidor para funcionar sobre Linux.',
        namespace: 'seblaz',
        repo: 'Final-Fight',
        anchor: 'final-fight'
    }, {
        title: 'Controlador de versiones para WinAutomation',
        imgSource: winAutomation,
        description: 'Herramienta para importar y exportar proyectos de WinAutomation, lo cual facilita la utilización de un controlador de versiones.',
        namespace: 'seblaz',
        repo: 'WinAutomation-version-control',
        anchor: 'winautomation-version-control',
        backgroundOpacity: 0.1
    }, {
        title: 'Cuadernos Ya',
        imgSource: cuadernosYa,
        description: 'Diseño de un nuevo tema para utilizar en Prestashop, una plataforma de ventas online.',
        namespace: 'seblaz',
        repo: 'CuadernosYa',
        anchor: 'CuadernosYa'
    }];

export default () => {
    const spacing = 3;

    return (
        <ContentWrapper>
            <ContentTitle title="Proyectos"/>
            <Grid
                container
                alignItems="flex-start"
                spacing={spacing}
            >
                {projects.map((projectData, key) =>
                    <Grid container item xs={12} md={4} sm={6} key={key} style={{position: 'relative'}}>
                        <ProjectCard {...projectData} spacing={spacing}/>
                    </Grid>)}
            </Grid>
        </ContentWrapper>
    )
}
