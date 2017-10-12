import App from './App';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
import express from 'express';
import {renderToString} from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {
        const context = {};
        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        );

        if (context.url) {
            res.redirect(context.url);
        } else {
            res.status(200).send(
                `<!doctype html>
    <html lang="">
    <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
         <!-- FontsOnline -->
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Crimson+Text:400,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'>
    
        <!-- StyleSheets -->
        <link rel="stylesheet" href="/assets/css/ionicons.min.css">
        <link rel="stylesheet" href="/assets/css/bootstrap/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css">
        <link rel="stylesheet" href="/assets/css/main.css">
        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/css/responsive.css">
    
        <!-- SLIDER REVOLUTION 4.x CSS SETTINGS -->
        <link rel="stylesheet" type="text/css" href="/assets/rs-plugin/css/settings.css" media="screen" />
    
        <!-- COLORS -->
        <link rel="stylesheet" id="color" href="/assets/css/default.css">
    
        <!-- JavaScripts -->
        <script src="/assets/js/vendors/modernizr.js"></script>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        
       
        ${assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''}
        ${process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>
                
        <!-- JavaScripts -->
        <script src="/assets/js/vendors/jquery/jquery.min.js"></script>
        <script src="/assets/js/vendors/wow.min.js"></script>
        <script src="/assets/js/vendors/bootstrap.min.js"></script>
        <script src="/assets/js/vendors/own-menu.js"></script>
        <script src="/assets/js/vendors/flexslider/jquery.flexslider-min.js"></script>
        <script src="/assets/js/vendors/jquery.countTo.js"></script>
        <script src="/assets/js/vendors/jquery.isotope.min.js"></script>
        <script src="/assets/js/vendors/jquery.bxslider.min.js"></script>
        <script src="/assets/js/vendors/owl.carousel.min.js"></script>
        <script src="/assets/js/vendors/jquery.sticky.js"></script>
        
         <!--SLIDER REVOLUTION 4.x SCRIPTS  -->
        <script type="text/javascript" src="/assets/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
        <script type="text/javascript" src="/assets/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
        <script src="/assets/js/zap.js"></script>
    </body>
</html>`
            );
        }
    });

export default server;
