import React from 'react';
import WorkExperience from "components/WorkExperience";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles, useTheme} from "@material-ui/styles";
import ContentWrapper from "./ContentWrapper";
import ContentTitle from "../components/ContentTitle";
import Button from "@material-ui/core/Button";

import senderos from "assets/img/senderos.jpg";
import fiuba from "assets/img/fiuba.png";
import ibm from "assets/img/ibm.webp";
import ministerio from "assets/img/ministerio.jpg";
import american from "assets/img/american.png";
import curriulum from "assets/Curriculum_Vitae.pdf";


const workExperience = [
    {
        title: "Desarrolador PHP y SQL",
        workplace: "Asociación Mutual Senderos",
        city: "Buenos Aires",
        from: new Date("2020 02"),
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
        to: new Date("2020 02"),
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
        to: new Date("2016 11"),
        description:
            "Procesamiento de tareas de Back Office (atención al cliente) y resolución " +
            "de solicitudes de clientes de la empresa.",
        logo: american
    }
];

const useStyles = makeStyles(theme => ({
    downloadButtonWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    downloadButton: {
        color: 'white',
        margin: theme.spacing(2, 0)
    }
}));

export default () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.only('xs'));
    const classes = useStyles();

    return (
        <ContentWrapper>
            <Container maxWidth="md" disableGutters={matchesXs}>
                <ContentTitle title="Experiencia laboral"/>
                <Grid container spacing={2}>
                    {workExperience.map((workExp, index) =>
                        <Grid item key={index} xs={12}>
                            <WorkExperience {...workExp}/>
                        </Grid>
                    )}
                    <Grid item xs={12} className={classes.downloadButtonWrapper}>
                        <Button
                            variant="contained"
                            color="primary"
                            href={curriulum}
                            download="Curriculum Sebastián Blázquez.pdf"
                            size="large"
                            className={classes.downloadButton}
                        >
                            Descargar curriculum
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </ContentWrapper>
    )
}
