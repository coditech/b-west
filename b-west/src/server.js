import App from './App';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
import express from 'express';
import {renderToString} from 'react-dom/server';
import api from './api';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const tempData = {
    menu: {
        menuItems: [
            {
                name: "Home",
                url: "/",
            },
            {
                name: "About Us",
                url: "/about-us",
            },
            {
                name: "Villagers",
                url: "/villagers",
            },
            {
                name: "Products",
                url: "/products",
            },
            {
                name: "Contact Us",
                url: "/contact-us",
            },
            {
                name: "Find A Store",
                url: "/find-a-store",
            }
        ],
        logo: {
            src: '/b-west-latin-logo.png'
            , alt: 'B-West Logo'
        },
    },
    homeHeader: {
        image: {
            src: "/header.jpg",
            alt: "Header Image"
        }
        , title: "Hello world this is a title"
        , subTitle: "Hello world this is a subtitle",
        content: '<p>Hello world</p>'
        , actionButton: {
            text: "Hello World"
            , url: ""
        }
    },
    aboutUsHomeSection: {
        title: 'B-West Title',
        subTitle: 'B-West Title Section',
        content: 'content content content',
        imageOne: {
            src: '/b-westLogo.png',
            alt: 'Beity Logo'
        },
        imageTwo: {
            src: '/b-westAboutImage2.jpg',
            alt: 'Beity About Image'
        },
    },
    featuredStories: {
        firstStory: {
            title: "THE ZAP - BEST PSD TEMPLATE",
            slug: 'slug',
            slogan: "slogan here",
            content:
                "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
            image: "/villagers1.jpg",
            alt: "",
        },
        secondStory: {
            title: "THE ZAP - BEST PSD TEMPLATE 2",
            slug: 'slug',
            slogan: "slogan here 2",
            content:
                "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
            image: "/villagers2.jpg",
            alt: "",
        }
    },
    villagersStories: [
        {
            title: 'THE ZAP - BEST PSD TEMPLATE',
            slug: 'story-1',
            slogan: 'slogan here (subtitle)',
            content: {
                full: '<p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.<br/>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p>',
                short: 'Short content 1 paragraph Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risu'
            },
            images: [
                {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }, {
                    src: '/villagers2.jpg',
                    alt: 'Villagers 2'
                }, {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }
            ]
        },
        {
            title: 'THE ZAP - BEST PSD TEMPLATE',
            slug: 'story-2',
            slogan: 'slogan here (subtitle)',
            content: {
                full: '<p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.<br/>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p>',
                short: 'Short content 1 paragraph Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risu'
            },
            images: [
                {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }, {
                    src: '/villagers2.jpg',
                    alt: 'Villagers 2'
                }, {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }
            ]
        }, {
            title: 'THE ZAP - BEST PSD TEMPLATE',
            slug: 'story-3',
            slogan: 'slogan here (subtitle)',
            content: {
                full: '<p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p><p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p>',
                short: 'Short content 1 paragraph Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risu'
            },
            images: [
                {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }, {
                    src: '/villagers2.jpg',
                    alt: 'Villagers 2'
                }, {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }
            ]
        },
        {
            title: 'THE ZAP - BEST PSD TEMPLATE',
            slug: 'story-4',
            slogan: 'slogan here (subtitle)',
            content: {
                full: '<p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p><p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p>',
                short: 'Short content 1 paragraph Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risu'
            },
            images: [
                {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }, {
                    src: '/villagers2.jpg',
                    alt: 'Villagers 2'
                }, {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }
            ]
        },
        {
            title: 'THE ZAP - BEST PSD TEMPLATE',
            slug: 'story-5',
            slogan: 'slogan here (subtitle)',
            content: {
                full: '<p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p><p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p>',
                short: 'Short content 1 paragraph Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risu'
            },
            images: [
                {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }, {
                    src: '/villagers2.jpg',
                    alt: 'Villagers 2'
                }, {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }
            ]
        },
        {
            title: 'THE ZAP - BEST PSD TEMPLATE',
            slug: 'story-6',
            slogan: 'slogan here (subtitle)',
            content: {
                full: '<p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p><p>You’ve probably heard of <a href="/tools/lorem-ipsum-generator/">Lorem Ipsum</a> before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly normal distribution of letters and words (making it look like normal English), but it’s also Latin, which means your average reader won’t get distracted by trying to read it. It’s perfect for showcasing design work as it should look when fleshed out with text, because it allows viewers to focus on the design work itself, instead of the text. It’s also a great way to showcase the functionality of programs like word processors, font types, and more.</p>',
                short: 'Short content 1 paragraph Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risu'
            },
            images: [
                {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }, {
                    src: '/villagers2.jpg',
                    alt: 'Villagers 2'
                }, {
                    src: '/villagers1.jpg',
                    alt: 'Villagers 1'
                }
            ]
        }
    ],
    instaBanner: {
        backgroundImage: '/followus.jpg'
    },
    products: [
        {
            status: 'sale',
            slug: 'productUr1l',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUr2l',
            name: 'ASD',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUr3l',
            name: 'Jrnfd',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUr4l',
            name: 'Jebneg',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUr5l',
            name: 'lame',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl1',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl2',
            name: 'asdfsd',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl3',
            name: 'fosto2',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl4',
            name: 'rttry',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl5',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl6',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl7',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl8',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl9',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl10',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl11',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl12',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl13',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl14',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl15',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl16',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl17',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl18',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl19',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl20',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl21',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl22',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl23',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl24',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl25',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl26',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl27',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUrl28',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
    ],
    productsPageHeader: {
        title: 'productsPageHeader title',
    },
    featuredProducts: [
        {
            status: 'sale',
            slug: 'productUr1l',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_1.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUr2l',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_2.jpg', alt: 'product 2'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        },
        {
            status: 'sale',
            slug: 'productUr3l',
            name: 'Labneh',
            price: "32",
            image: {src: '/product_3.jpg', alt: 'product 1'},
            classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
        }
    ],
    subscriberBanner: {
        display: true,
        mailcimpUrl: ''
    },
    aboutUs: [
        {
            title: 'about Us',
            content: '<p>Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.<strong> Donec rutrum congue</strong> leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, e</p>',
            image: {
                src: '/about.jpg',
                alt: 'About Us pic'
            }
        },
        {
            title: "Titles",
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</p>",
            image: {
                src: '/about.jpg',
                alt: "about us"
            }
        },
        {
            title: "Titles",
            content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</p>",
            image: {
                src: '/about.jpg',
                alt: "about us"
            }
        }
    ],
    findAStore: {
        stores: [
            {
                location: 'Mount Lebanon',
                name: "Super Market X",
                address: '<p>Address 1 Near x</p><p>Address 2 Near Y</p>',
                content: '',
                lat: '33.33',
                long: '33.33'
            }, {
                location: 'Mount Lebanon',
                name: "Super Market X",
                address: '<p>Address 1 Near x</p><p>Address 2 Near Y</p>',
                content: '',
                lat: '33.33',
                long: '33.33'
            }, {
                location: 'Mount Lebanon',
                name: "Super Market X",
                address: '<p>Address 1 Near x</p><p>Address 2 Near Y</p>',
                content: '',
                lat: '33.33',
                long: '33.33'
            },
        ],
        googleMapAPI: '',
        title: 'Find Our Products',
        bannerBackgroundImage: '/find-a-store.jpg'

    },
    villagersStoriesHeader: {
        title: 'We helped each family to have better life '
    },
    contactUs: {
        headerTitle: 'How can we help you?',
        title: 'HIT US UP',
        content: `<p>Mr Michel Skaff<br/>Saghbine - District of West Bekaa, Abu Ha<br/>mad building<br/>Saghbine, West Bekaa<br/>Lebanon<br/><a href="+9613334121">+961 3 334 121</a><br/><a href="mailto:skaff.michel@gmail.com">skaff.michel@gmail.com</a></p>`
    }

}

const server = express();
const uploads = express();
//const uploadsStaticServer = express.static('/Users/gabykaram/Desktop-2/codi/b-westProject/b-west/uploads/public')
uploads.use((req, res, next) => {
    const url = req.url
    const path = './uploads' + url
    const realPath = require('path').resolve(path)
    try {
        const fileExists = require('fs').statSync(realPath)
        console.log('file', realPath, 'exists')
    } catch (e) {
        console.log('file', realPath, 'does not exist')
    }
    console.log(process.env.RAZZLE_MAN)
    next()
})
uploads.use(express.static('./uploads'));
uploads.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    next();
});
server.use('/api', api);
server.use('/uploads', uploads);
server
    .disable('x-powered-by')
    // .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use(express.static('./public'))
    .get('/*', (req, res) => {
        const context = {};

        // console.log('App Data ==>', tempData);
        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App appData={tempData}/>
            </StaticRouter>
        );

        if (context.url) {
            res.redirect(context.url);
        } else {

            res.status(200).send(
                `<!doctype html>
        <html lang="en">
        <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
         <!-- FontsOnline -->
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Crimson+Text:400,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'>
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <!-- JavaScripts -->
        <script>
            var ___STATE___ = ${JSON.stringify(tempData)}
        </script>
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
      <script
            src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
            crossorigin="anonymous">
            
        </script>  
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="/assets/js/vendors/own-menu.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.5.0/jquery.flexslider-min.js"></script>
        <script src="/assets/js/vendors/jquery.countTo.js"></script>
        <script src="/assets/js/vendors/jquery.isotope.min.js"></script>
        <script src="/assets/js/vendors/jquery.bxslider.min.js"></script>
        <script src="/assets/js/vendors/owl.carousel.min.js"></script>
        <script src="/assets/js/vendors/jquery.sticky.js"></script>
        
         <!--SLIDER REVOLUTION 4.x SCRIPTS  -->
        <script src="/assets/js/zap.js"></script>
                
        <script>
       /*-----------------------------------------------------------------------------------*/
       /*    Parallax
       /*-----------------------------------------------------------------------------------*/
       
       var makeSlider = () => $('.images-slider').flexslider({
         animation: "fade",
         controlNav: "thumbnails"
       });
       
       // setTimeout(makeSlider,1000)
       
       </script>
    </body>
</html>`
            );
        }

    });
export default server;
