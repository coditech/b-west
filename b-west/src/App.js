import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PublicApp from "./routes/PublicApp";
import {LoginPage} from "./routes/LoginPage";
import AdminApp from "./routes/AdminApp";
import './styles/App.css'
import {STATUS} from './commanConfig'

const mixProps = (passed_props_home) => (props) => ({...passed_props_home, ...props});

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
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
                status: STATUS.READY,
                image: {
                    src: "/header.jpg",
                    alt: "Header Image"
                }
                , title: "Hello world this is a title"
                , subTitle: "Hello world this is a subtitle",
                content: '<p>Hello world</p>'
                , actionButton: {
                    text: "Hello World"
                    , actionFunction: this.actionFunctionButton
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
                    desc:
                        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
                    image: "/villagers1.jpg",
                    alt: "",
                },
                secondStory: {
                    title: "THE ZAP - BEST PSD TEMPLATE 2",
                    slug: 'slug',
                    slogan: "slogan here 2",
                    desc:
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
                    slug: 'story-2',
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
                }, {
                    title: 'THE ZAP - BEST PSD TEMPLATE',
                    slug: 'story-1',
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
                    slug: 'story-2',
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
                },
                {
                    status: 'sale',
                    slug: 'productUr4l',
                    name: 'Labneh',
                    price: "32",
                    image: {src: '/product_1.jpg', alt: 'product 1'},
                    classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
                },
                {
                    status: 'sale',
                    slug: 'productUr5l',
                    name: 'Labneh',
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
                    name: 'Labneh',
                    price: "32",
                    image: {src: '/product_1.jpg', alt: 'product 1'},
                    classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
                },
                {
                    status: 'sale',
                    slug: 'productUrl3',
                    name: 'Labneh',
                    price: "32",
                    image: {src: '/product_2.jpg', alt: 'product 2'},
                    classContainer: 'col-sm-4 col-xs-6', description: '<p>This product is </p>'
                },
                {
                    status: 'sale',
                    slug: 'productUrl4',
                    name: 'Labneh',
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
            ]
            ,
            subscriberBanner: {
                display: true
            },
            findAStoereBanner: {
                backgroundImage: '/find-a-store.jpg'
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
                header: {
                    title: 'Find Our Products',
                }
            },
            villagersStoriesHeader: {
                title: 'We helped each family to have better life '
            }, productsPageHeader: {
                title: 'productsPageHeader title',
            }


        }
    }


    render() {
        const passedProps = this.state;
        const mix = mixProps(passedProps);

        return (
            <Switch>

                <Route path="/admin" component={AdminApp}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/"  render={(props) => {
                    window.scrollTo(0, 0)
                    return ( <PublicApp  {...mix(props)}/>)
                }
                }/>
            </Switch>
        )
    }
}

export default App;
