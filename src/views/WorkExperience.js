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
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BulletPoint = () => <FontAwesomeIcon icon={faAngleRight}/>

const workExperience = [
    {
        title: "Senior Software Engineer",
        workplace: "Mulesoft",
        city: "Buenos Aires",
        from: new Date("2022 08"),
        description:
          <>
              <BulletPoint /> Continued with the development of core features in Flex Gateway coding in Golang. <br/>
              <BulletPoint /> Coached new members of the team.<br/>
              <BulletPoint /> Collaborated with cross functional teams like Product Management, Documentation and Infrastructure to release new features.<br/>
              <BulletPoint /> Collaborated with other Engineering teams as well coding in React.JS and Java.<br/>
              <br/>
              Main technology stack: Go, Rust, Node.JS, React.JS, Kubernetes, Envoy, AWS, Jenkins.
          </>,
        logo: mulesoft
    },
    {
        title: "Software Engineer",
        workplace: "Mulesoft",
        city: "Buenos Aires",
        from: new Date("2021 02"),
        to: new Date("2022 07"),
        description:
          <>
              <BulletPoint /> Worked in 3 different teams developing the Flex Gateway and Anypoint for Service Mesh products. <br/>
              <BulletPoint /> Developed a WASM Extension coded in Rust for Envoy.<br/>
              <BulletPoint /> Also developed core features of the Flex Gateway coded in Golang.<br/>
              <BulletPoint /> Led the release process of a new on premise product (that included a docker image, linux repositories and a helm chart).<br/>
              <BulletPoint /> Delivered a live presentation to over 150 people on the latest product capabilities.<br/>
              <br/>
              Main technology stack: Go, Rust, Node.JS, React.JS, Kubernetes, Envoy, AWS, Jenkins.
          </>,
        logo: mulesoft
    }, {
        title: "PHP and SQL developer",
        workplace: "Asociación Mutual Senderos",
        city: "Buenos Aires",
        from: new Date("2020 02"),
        to: new Date("2021 01"),
        description:
        <>
          PHP and SQL developer of the internal systems of Mutual Senderos. In this project, I also: <br/>
          <BulletPoint /> Set up the DNS records and TLS certificates.<br/>
          <BulletPoint /> Set up the Front-end using React.JS.<br/>
          <BulletPoint /> Set up the testing framework and implemented unit and integration tests missing in the project.<br/>
          <BulletPoint /> Implemented continuous delivery for the application deployment steps.<br/>
          <br/>
          Main technology stack: PHP, SQL, Javascript (React.JS), Bitbucket Pipelines.
        </>,
        logo: senderos
    }, {
        title: "Ayudante de Cátedra",
        workplace: "FIUBA",
        city: "Buenos Aires",
        from: new Date("2019 08"),
        to: new Date("2022 03"),
        description:
            <>
              Teaching Assistant in the class "Algorithms and Programming III" at the
              Faculty of Engineering of the University of Buenos Aires. Some of the
              main topics of the subject are: object-oriented programming,
              test-driven development, and agile methods.<br/>
              <br/>
              Main technology stack: Smalltalk, Java and Github Actions.
            </>,
        logo: fiuba
    }, {
        title: "RPA (Robotic Process Automation) Developer",
        workplace: "IBM",
        city: "Buenos Aires",
        from: new Date("2018 08"),
        to: new Date("2020 01"),
        description:
            <>
                RPA (Robotic Process Automation) Developer using WinAutomation and Automation Anywhere.
                In this job I also developed a REST API using Python and it's FrontEnd using React.Js.
                Additionally, for this application I:<br/>
                <BulletPoint /> Coded SQL queries.<br/>
                <BulletPoint /> Added optimizations using Nginx.<br/>
                <BulletPoint /> Implemented continuous delivery.<br/>
                <br/>
                Main technology stack: Python, React.JS, Nginx and SQL.
            </>,
        logo: ibm
    }, {
        title: "PHP Developer",
        workplace: "Ministerio de Producción",
        city: "Buenos Aires",
        from: new Date("2016 04"),
        to: new Date("2016 09"),
        description:
            <>
                PHP developer for the systems in the Pyme area.<br/>
                <br/>
                Main technology stack: PHP, HTML and CSS using Bootstrap 5.
            </>,
        logo: ministerio
    }, {
        title: "Analista de calidad",
        workplace: "American Express",
        city: "Buenos Aires",
        from: new Date("2015 11"),
        to: new Date("2016 04"),
        description:
            <>
                Development of optimization tools in customer service processes and automation of large-scale quality controls.<br/>
                <br/>
                Main technology stack: Java interfacing with Cobol mainframes.
            </>,
        logo: american
    }, {
        title: "Analista en Atención al Cliente",
        workplace: "American Express",
        city: "Buenos Aires",
        from: new Date("2015 04"),
        to: new Date("2015 11"),
        description:
            <>
                Processed Back Office tasks and resolved requests from external clients.
            </>,
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
