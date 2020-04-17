import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from 'components/proyects/ProjectCard';
import ContentWrapper from "components/common/ContentWrapper";
import ContentTitle from "components/common/ContentTitle";
import MetaInfo from "components/common/MetaInfo";

import matrix from 'assets/img/proyects/snake.jpg';
import predictingUserConversions from 'assets/img/proyects/predicting-user-conversions.jpg';
import finalFight from 'assets/img/proyects/final fight.png';
import winAutomation from 'assets/img/proyects/automation.svg';
import cuadernosYa from 'assets/img/proyects/cuadernos ya.jpg';
import ayudanteVirtual from 'assets/img/proyects/ayudante virutual.png';
import preview from 'assets/img/previews/proyectos.png';


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
        anchor: 'cuadernosya-tema-violeta'
    }, {
        title: 'Ayudante Virtual',
        imgSource: ayudanteVirtual,
        description: 'Bot de Slack que sirve como asistente virtual para realizar consultas que no pueden ser compartidas en canales públicos.',
        namespace: 'seblaz',
        repo: 'Ayudante-virtual',
        anchor: 'ayudante-virtual',
        linkedInUrl: 'https://www.linkedin.com/pulse/ayudante-virtual-en-fiuba-sebasti%C3%A1n-bl%C3%A1zquez/'
    }];

export default () => {
    const spacing = 3;

    return (
        <Fragment>
            <MetaInfo
                title={'Proyectos'}
                description='Proyectos de Sebastián Blázquez.'
                relativeUrl='/proyectos'
                image={preview}
            />
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
        </Fragment>
    )
};
