import React, {Fragment} from 'react';
import WorkExperienceDownloadButton from "components/work-experience/WorkExperienceDownloadButton";
import WorkExperience from "components/work-experience/WorkExperience";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/styles";
import ContentWrapper from "components/common/ContentWrapper";
import ContentTitle from "components/common/ContentTitle";
import MetaInfo from "components/common/MetaInfo";

import senderos from "assets/img/compressed/work-experience/senderos.jpeg";
import mulesoft from "assets/img/compressed/work-experience/mulesoft.jpeg";
import fiuba from "assets/img/compressed/work-experience/fiuba.jpeg";
import ibm from "assets/img/compressed/work-experience/ibm.jpeg";
import ministerio from "assets/img/compressed/work-experience/ministerio.jpeg";
import american from "assets/img/compressed/work-experience/american.png";
import preview from "assets/img/compressed/previews/experiencia_laboral.png";


const workExperience = [
    {
        title: "Software Engineer",
        workplace: "Mulesoft",
        city: "Buenos Aires",
        from: new Date("2021 02"),
        description:
            "",
        logo: mulesoft
    }, {
        title: "Desarrolador PHP y SQL",
        workplace: "Asociación Mutual Senderos",
        city: "Buenos Aires",
        from: new Date("2020 02"),
        to: new Date("2021 01"),
        description:
            "Desarrollador PHP y SQL del sistema de gestión de afiliaciones, atención " +
            "médica y auditoría de Mutual Senderos. En este proyecto también configuré " +
            "los dominios y certificados SSL, la compilación del Front-end, el conjunto de " +
            "pruebas y los pasos de despliegue de la aplicación implementando delívery " +
            "continuo.",
        logo: senderos
    }, {
        title: "Ayudante de Cátedra",
        workplace: "FIUBA",
        city: "Buenos Aires",
        from: new Date("2019 08"),
        description:
            "Ayudante de cátedra ad honorem en la materia \"Algoritmos y Programación " +
            "III\" de la Facultad de Ingeniería de la Universidad de Buenos Aires. Algunos " +
            "de los temas centrales de la materia son: programación orientada a objetos, " +
            "desarrollo orientado a pruebas y métodos ágiles.",
        logo: fiuba
    }, {
        title: "Desarrollador RPA",
        workplace: "IBM",
        city: "Buenos Aires",
        from: new Date("2018 08"),
        to: new Date("2020 01"),
        description:
            "Desarrollador en RPA (Automatización Robótica de Procesos) utilizando " +
            "WinAutomation y Automation Anywhere. En este trabajo también desarrollé " +
            "una API REST utilizando Python y el respectivo FrontEnd utilizando " +
            "React.Js. Asimismo en dicha aplicación incorporé optimizaciones empleando " +
            "Nginx, consultas SQL y delívery continuo.",
        logo: ibm
    }, {
        title: "Analista de procesos",
        workplace: "Ministerio de Producción",
        city: "Buenos Aires",
        from: new Date("2016 04"),
        to: new Date("2016 09"),
        description:
            "Asistente en relevamientos de procesos y soporte en el sector Pyme. Dicho " +
            "soporte se realizó sobre una aplicación funcionando con PHP y Bootstrap " +
            "en el FrontEnd.",
        logo: ministerio
    }, {
        title: "Analista de calidad",
        workplace: "American Express",
        city: "Buenos Aires",
        from: new Date("2015 11"),
        to: new Date("2016 04"),
        description:
            "Desarrollo de herramientas de optimización en procesos de atención al " +
            "cliente y soporte para controles masivos de calidad. En su gran mayoría " +
            "dichas herramientas fueron realizadas en Java, conectándose con servicios " +
            "en Cobol.",
        logo: american
    }, {
        title: "Analista en Atención al Cliente",
        workplace: "American Express",
        city: "Buenos Aires",
        from: new Date("2015 04"),
        to: new Date("2015 11"),
        description:
            "Procesamiento de tareas de Back Office (atención al cliente) y resolución " +
            "de solicitudes de clientes de la empresa.",
        logo: american
    }
];

export default () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.only('xs'));

    return (
        <Fragment>
            <MetaInfo
                title={'Experiencia laboral'}
                description='Experiencia laboral de Sebastián Blázquez.'
                relativeUrl='/experiencia_laboral'
                image={preview}
            />
            <ContentWrapper>
                <Container maxWidth="md" disableGutters={matchesXs}>
                    <ContentTitle title="Experiencia laboral"/>
                    <Grid container spacing={2}>
                        {workExperience.map((workExp, index) =>
                            <Grid item key={index} xs={12}>
                                <WorkExperience {...workExp}/>
                            </Grid>
                        )}
                        <WorkExperienceDownloadButton/>
                    </Grid>
                </Container>
            </ContentWrapper>
        </Fragment>
    )
}
