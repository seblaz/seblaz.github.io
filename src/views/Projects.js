import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from 'components/proyects/ProjectCard';
import ContentWrapper from "components/common/ContentWrapper";
import ContentTitle from "components/common/ContentTitle";
import MetaInfo from "components/common/MetaInfo";

import matrix from 'assets/img/originals/proyects/snake.jpg';
import predictingUserConversions from 'assets/img/compressed/proyects/predicting-user-conversions.jpeg';
import finalFight from 'assets/img/compressed/proyects/final fight.jpeg';
import winAutomation from 'assets/img/originals/proyects/automation.svg';
import cuadernosYa from 'assets/img/compressed/proyects/cuadernos ya.jpeg';
import ayudanteVirtual from 'assets/img/originals/proyects/ayudante virutual.png';
import preview from 'assets/img/compressed/previews/proyectos.png';


const projects = [
    {
        title: 'Retro Snake',
        imgSource: matrix,
        description: 'The classic snake game projected on a LED matrix, controllable through Wi-Fi.',
        namespace: 'seblaz',
        repo: 'retro-snake',
        anchor: 'retro-snake'
    }, {
        title: 'Predicting user conversions',
        imgSource: predictingUserConversions,
        description: 'Development of machine learning algorithms to calculate the probability of a user making a purchase on the Trocafone platform.',
        namespace: 'seblaz',
        repo: 'Predicting-user-conversions',
        anchor: 'Predicting-user-conversions'
    }, {
        title: 'Final Fight',
        imgSource: finalFight,
        description: 'Multiplayer game similar to Final Fight created by Capcom, developed as a client-server type application to run on Linux.',
        namespace: 'seblaz',
        repo: 'Final-Fight',
        anchor: 'final-fight'
    }, {
        title: 'Version control system for WinAutomation',
        imgSource: winAutomation,
        description: 'Tool for importing and exporting WinAutomation projects, which facilitates the use of a version control system.',
        namespace: 'seblaz',
        repo: 'WinAutomation-version-control',
        anchor: 'winautomation-version-control',
        backgroundOpacity: 0.1
    }, {
        title: 'Cuadernos Ya',
        imgSource: cuadernosYa,
        description: 'Design of a new theme to be used on Prestashop, an e-commerce platform.',
        namespace: 'seblaz',
        repo: 'CuadernosYa',
        anchor: 'cuadernosya-tema-violeta'
    }, {
        title: 'Virtual Assistant',
        imgSource: ayudanteVirtual,
        description: 'Slack bot serving as a virtual assistant for making queries that cannot be shared in public channels.',
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
