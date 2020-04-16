import React from "react";
import {Helmet} from "react-helmet";
import preview from 'assets/img/preview.png';


export default ({title, description, relativeUrl = ''}) => {

    const baseUrl = 'http://seblaz.github.io';
    const domain = 'seblaz.github.io';

    return (
        <Helmet
            title={`Seblaz${title ? ' | ' + title : ''}`}
            meta={[
                // Regular Meta tags
                {name: 'description', content: description},

                // facebook open graph tags
                {property: 'og:title', content: 'Seblaz'},
                {property: 'og:description', content: description},
                {property: 'og:url', content: baseUrl + relativeUrl},
                {property: 'og:type', content: 'website'},
                {property: 'og:locale', content: 'es_AR'},
                {property: 'og:image', content: baseUrl + preview},
                {property: 'og:image:type', content: 'image/png'},
                {property: 'og:image:width', content: 512},
                {property: 'og:image:height', content: 512},

                // twitter card tags additive with the og: tags
                {name: "twitter:card", content: "summary"},
                {name: "twitter:domain", value: domain},
                {name: "twitter:title", value: title},
                {name: "twitter:description", value: description},
                {name: "twitter:image", content: baseUrl + preview},
                {name: "twitter:image:alt", content: 'developer logo'},
                {name: "twitter:url", value: baseUrl},
                {name: "twitter:label1", value: "LinkedIn"},
                {name: "twitter:data1", value: "linkedin.com/in/sebastian-blazquez"},
                {name: "twitter:label2", value: "Correo electrónico"},
                {name: "twitter:data2", value: "sebastian.blazquez96@gmail.com"},
            ]}
        />
    )
}