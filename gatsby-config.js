module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/minnesotatreats`,
            },
        },
		`gatsby-transformer-remark`
    ]
};