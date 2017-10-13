import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import {About} from "./About";
import Stories from "./Stories"; 
import Banner from "./Banner";

import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const passedProps = {
  aboutData: {
    title: {
      name: "kevin",
      id: "123"
    },
    subTitle: "Sub Title",
    content:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. ",
    imageOne: "",
    imageTwo: "",
    altOne: "",
    altTwo:"",
    span: "hhhhhhh",
  }
};

const passedStory = {
  story: {
    firstStory: {
      title: "THE ZAP - BEST PSD TEMPLATE",
      slogan: "allahu akbar",
      desc:
        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
      image: "",
      alt: "",
    },
    secondStory: {
      title: "THE ZAP - BEST PSD TEMPLATE 2",
      slogan: "allahu akbar 2",
      desc:
        "Lorem ipsum dolor sit amet, voluptatem consectetuer donec nullam velit pretium, libero morbi commodo vel, adipiscing dui nibh, a quis ipsum neque praesent magnis. Amet ante varius vitae integer sollicitudin nisl, rutrum a sit accumsan ut orci. Turpis lacus eget in pede eros sit, justo ipsum ipsum natoque in in delectus. Non nam nulla blandit at wisi, consectetuer risus ultrices in amet malesuada, tellus ultricies, nunc nonummy nonummy. Ligula quisque eleifend consequat vehicula pharetra eu, amet vitae eget vestibulum imperdiet, fermentum est pellentesque, morbi nec at metus pede. Tellus fames elit metus varius, est ante, ligula hendrerit egestas suspendisse, urna non amet tortor scelerisque dui vestibulum, ullamcorper sed. Pharetra lectus nec, a egestas id gravida, viverra molestie sed, ligula quam ridiculus. Eros tempus hendrerit nec vitae mollis nisl. Rhoncus tincidunt.",
      image: "",
      alt: "",
    },
  }
};

const passedBanner = {
  banner: {
    title: "sssss",
    subtitle: "sssddddd",
    image: "",
    },
  };

const App = () => (
  <div style={styles}>
    <About {...passedProps} />
    <Stories {...passedStory} />
    <Banner {...passedBanner} />
  </div>
);

render(<App />, document.getElementById("root"));
