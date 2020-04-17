import React from "react";
import {Helmet} from "react-helmet";


export default ({title, description, image, relativeUrl = ''}) => {

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
                {property: 'og:image', content: baseUrl + image},

                // twitter card tags additive with the og: tags
                {name: "twitter:card", content: "summary"},
                {name: "twitter:domain", value: domain},
                {name: "twitter:title", value: title},
                {name: "twitter:description", value: description},
                {name: "twitter:image", content: baseUrl + image},
                {name: "twitter:image:alt", content: 'developer logo'},
                {name: "twitter:url", value: baseUrl},
                {name: "twitter:label1", value: "👨‍💻 GitHub"},
                {name: "twitter:data1", value: "github.com/seblaz"},
                {name: "twitter:label2", value: "💼 LinkedIn"},
                {name: "twitter:data2", value: "linkedin.com/in/sebastian-blazquez"},
            ]}
        />
    )
}