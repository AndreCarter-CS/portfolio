import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/projects.module.css";
import * as global from "../styles/global.module.css";

const Projects = () => (
  <Layout>
    <h1>PROJECTS</h1>

    <h2 className={styles.header}><a href='https://main.d2wlyf38dwd4er.amplifyapp.com/'>Angular Video Game Database</a></h2>
    <p>This web app displays a fully styled video game database with over 500,000 searchable games powered by the RAWG API. You can view the source files at this GitHub repo <a href='https://github.com/AndreCarter-CS/ng-video-game-db'>here</a>. It is deployed on AWS at this link <a href='https://main.d2wlyf38dwd4er.amplifyapp.com/'>here</a>.</p>

    <hr />

    <h2 className={styles.header}><a href='https://main.d1rwhnhyww0m2n.amplifyapp.com/'>Personal React Notes Web App with AWS Backend:</a></h2>
    <p>This project was created using React and AWS Amplify. This app contains user authentication which allows for individual account creation and management. This app also contains a scalable GraphQL API that has been configured with an Amazon DynamoDB database, which provides users with a platform to create or delete notes. Additionally, file storage has been added using Amazon S3 enabling users to upload images and view them in the app. Disclaimer: There is currently a small bug that restricts the user from submitting a note. This will be fixed in an upcoming update. You can view the source files at this GitHub repo <a href='https://github.com/AndreCarter-CS/amplify-react-graphql'>here</a>. It is deployed on AWS at this link <a href='https://main.d1rwhnhyww0m2n.amplifyapp.com/'>here</a>.</p>

    <hr />

    <h2 className={styles.header}>This Portfolio Site</h2>
    <p>This web app was built in React using the Gatsby framework and functions as a simple way to put all of my accomplishments/experience in one easily accessible place. It is deployed using Netlify and can be installed as a Progressive Web App (PWA) on any device which provides a multitude of benefits including blazing fast speed and offline access. It can be installed to a mobile phone and ran like a native application, while remaining extremely lightweight. The GitHub source files can be found <a href='https://github.com/AndreCarter-CS/portfolio'>here</a>.</p>

    <hr />

    <h2 className={styles.header}>Portfolio V2 - COMING SOON</h2>
    <p>This portfolio is currently undergoing a major overhaul to vastly improve the UI of the app and make it more visibly appealing.</p>
    
    <hr />

    <h2 className={styles.header}>Youlama Fantasy Sports - COMING SOON</h2>
    <p>A fantasy sports dashboard combining all of your platforms in one, easy to manage dashboard. Created with React and deployed with AWS Amplify using AppStack dashboard.</p>

    <hr />

    <h2 className={styles.header}>Restaurant Saviors - COMING SOON</h2>
    <p>We are a team of web development wizards who specialize in creating mouthwatering websites for restaurants. Are you a restaurant owner struggling to attract customers online? Let us help you spice up your online presence and bring in hungry customers. Our team has a passion for food and a knack for creating visually appetizing websites that will make your restaurant stand out from the competition.</p>

    <hr />

    <h2 className={styles.header}>Carter & Maldonado Consulting Group - COMING SOON</h2>
    <p>Landing page for CMCG IT Consulting Group coming soon.</p>

    <hr />

    <h1 className={global.mt15}>WEBSITES</h1>
    <p>Listed below are some of the websites that I have developed for clients in WordPress and DNN.</p>
    <p><a href='https://www.crystalglassny.com/'>Crystal Glass NY</a></p>
    <p><a href='https://www.talleysmitharch.com/'>Talley & Smith Architecture Inc.</a></p>
    <p><a href='https://www.syprine.com/'>Syprine</a></p>
    <p><a href='https://www.cuprimine.com/'>Cuprimine</a></p>

    <hr />

    <h1 className={global.mt15}>TUTORIALS</h1>
    <h2 className={styles.header}><a href='https://medium.com/@andrecarter_76875/getting-started-with-angular-7-7ae1cfba689f'>Getting Started with Angular 7</a></h2>
    <p>New to Angular? No problem! By the time you finish this article, you’re going to walk away having created your first Angular 7 app and you’ll at least know the basics to get you going on future projects. You can find the link to this tutorial <a href='https://medium.com/@andrecarter_76875/getting-started-with-angular-7-7ae1cfba689f'>here</a> and you can find the GitHub source files <a href='https://github.com/AndreCarter-CS/Angular7-Tutorial/tree/ef5b22c3d6b98ccd98c5109893bc91988de1609f'>here</a>.</p>

    <h2 className={styles.header}><a href='https://medium.com/@andrecarter_76875/create-a-restful-api-in-asp-net-mvc-9701f2600900'>Create a RESTful API in ASP.NET MVC</a></h2>
    <p>In this tutorial, we will be creating a RESTful API using Docker and ASP.NET MVC. This API will be tied together with the Angular application we created in "Getting Started with Angular 7". You can find the link to this tutorial <a href='https://medium.com/@andrecarter_76875/create-a-restful-api-in-asp-net-mvc-9701f2600900'>here</a> and you can find the GitHub source files <a href='https://github.com/AndreCarter-CS/Create-RESTful-API'>here</a>.</p>

    <h2 className={styles.header}><a href='https://medium.com/@andrecarter_76875/communicating-with-api-in-angular-7-app-9a18b339c3a9'>Communicating with API in Angular 7 App</a></h2>
    <p>In this tutorial we are going to have the Angular 7 app that we created in the tutorial, “Getting Started with Angular 7", communicate with the API that we created in the tutorial, “Create a RESTful API in ASP.NET MVC”. You can find the link to this tutorial <a href='https://medium.com/@andrecarter_76875/communicating-with-api-in-angular-7-app-9a18b339c3a9'>here</a> and you can find the GitHub source files <a href='https://github.com/AndreCarter-CS/Angular7-Tutorial/tree/2351e77516c70a5fb8768c01c91ad7ad50d88fa2'>here</a>.</p>

  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default Projects
