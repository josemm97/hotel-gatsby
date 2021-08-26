import React from 'react';
import { graphql, useStaticQuery } from "gatsby";



const UseSeo = () => {
    const data = useStaticQuery(graphql`
    query {
        datoCmsSite {
            globalSeo {
                siteName
                titleSuffix
                fallbackSeo {
                    title
                    description
                }
            }
        }
    }
    
    `);
    const {siteName,titleSuffix,fallbackSeo:{title, description}} = data.datoCmsSite.globalSeo;
    console.log(data.datoCmsSite.globalSeo);
    return {
        siteName,
        titleSuffix,
        title,
        description
    };
}

export default UseSeo;
