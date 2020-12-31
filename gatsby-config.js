module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/minnesotatreats`,
            },
        },
		`gatsby-transformer-remark`
    ]
};