import * as React from "react"
import * as global from "../styles/global.module.css";
import * as styles from "../styles/experience.module.css";
import Layout from "../components/layout"
import Seo from "../components/seo"

const Timeline = () => (
  <Layout>
    <h1>Experience</h1>

    {/* OnSolve */}
    <div className={styles.company}>
      <h2 className={styles.companyName}>OnSolve</h2>

      <div className={styles.role}>
        <h3>Software Engineer</h3>
        <div className={styles.subtext}>
          {"Mar 2022 - Feb 2023"}
        </div>
        <div className={styles.subtext}>
          {"Ormond Beach, Florida"}
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionLine}>- Developed and maintained three separate iOS and Android applications built using the React Native framework and capable of delivering high volumes of messages via multiple communication methods across 29 different locales/languages</div>
          <div className={styles.descriptionLine}>- Collaborated with a team of Software Engineers and Software QA Engineers daily as part of a remote, fast-paced Agile/Scrum team</div>
          <div className={styles.descriptionLine}>- Created a custom calendar component with a robust search functionality to help facilitate the selection of date ranges for travel itineraries</div>
          <div className={styles.descriptionLine}>- Resolved/Identified bugs and wrote detailed tickets for software engineers to pick up in the future</div>
          <div className={styles.descriptionLine}>- Authored Jest unit tests to standardize code submissions across development teams</div>
          <div className={styles.descriptionLine}>- Resolved customer reported defects within SLA guidelines</div>
          <div className={styles.descriptionLine}>- Authored Confluence documentation to provide team members with guidance for certain tasks or to be used for the training of future developers</div>
          <div className={styles.descriptionLine}>- Performed code reviews and code merges in a full CI/CD process within Gitlab</div>
          <div className={styles.descriptionLine}>- Maintained a high level of product quality by designing proper solutions and by resolving defects within defined SLA guidelines</div>
        </div>
      </div>
    </div>

    {/* Carter Solutions */}
    <div className={styles.company}>
      <h2 className={styles.companyName}>Carter Solutions, Inc.</h2>

      <div className={styles.role}>
        <h3>Web & Application Developer</h3>
        <div className={styles.subtext}>
          {"Feb 2018 - Aug 2020"}
        </div>
        <div className={styles.subtext}>
          {"Orlando, Florida"}
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionLine}>- Utilized VS Code to create new application components and debug and fix application issues</div>
          <div className={styles.descriptionLine}>- Developed a REST API Web Application as part of a team using ASP.NET MVC and developed front-end components for an Angular Progressive Web Application</div>
          <div className={styles.descriptionLine}>- Developed React Native Application as part of a team to help facilitate AT&T product sales</div>
          <div className={styles.descriptionLine}>- Installed and configured third-party PHP WordPress plugins and third-party C# DNN extensions</div>
          <div className={styles.descriptionLine}>- Cloned source code from git repository, created pull requests, merged development branches into main branch, and added detailed comments to summarize new changes to code</div>
        </div>
      </div>
      
      <div className={styles.role}>
        <h3>Web Developer</h3>
        <div className={styles.subtext}>
          {"Dec 2014 - Feb 2018"}
        </div>
        <div className={styles.subtext}>
          {"Orlando, Florida"}
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionLine}>- Responsible for utilizing Web Content Management Systems (CMS) such as WordPress and DNN to create over 15 SEO efficient, user-friendly, and high-performance websites</div>
          <div className={styles.descriptionLine}>- Worked directly with client’s design team to determine most effective UX/UI design for newly created websites</div>
          <div className={styles.descriptionLine}>- Performed website migrations and utilized FTP to facilitate the migration</div>
          <div className={styles.descriptionLine}>- Set up client web hosting, created accounts for control panels such as Plesk and cPanel, and installed MySQL and MS SQL Server databases to facilitate new customer onboarding process</div>
          <div className={styles.descriptionLine}>- Developed CSS standards for the development team to optimize site updates</div>
          <div className={styles.descriptionLine}>- Created responsive, mobile friendly websites using the Bootstrap framework and jQuery</div>
          <div className={styles.descriptionLine}>- Installed and configured WooCommerce open-source eCommerce plugin for various WordPress websites to facilitate online product and service sales</div>
        </div>
      </div>

      <div className={styles.role}>
        <h3>Marketing Lead</h3>
        <div className={styles.subtext}>
          {"Dec 2014 - Dec 2016"}
        </div>
        <div className={styles.subtext}>
          {"Orlando, Florida"}
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionLine}>- Established an online sales presence by creating online marketing strategies, developing a digital advertising campaign, and organizing an advertising budget</div>
          <div className={styles.descriptionLine}>- Developed a cross-channel social media platform across Twitter, YouTube, Facebook, Google+, and LinkedIn delivering news and custom content created using Adobe Photoshop and distributed using the Buffer platform</div>
          <div className={styles.descriptionLine}>- Implemented Google AdWords campaign that displayed targeted ads on Google’s Search and Search Partners’ Network as well as Google’s Display Network</div>
          <div className={styles.descriptionLine}>- Implemented a targeted social media ad campaign across Facebook and Twitter</div>
          <div className={styles.descriptionLine}>- Utilized Google’s PPC marketing platform to drive consumer traffic to website and implemented Google Analytics to track visitor flow and interaction on website with collected data used to improve SEO performance</div>
          <div className={styles.descriptionLine}>- Curated a template of researched keywords from various sources and tailored header tags, meta descriptions, URL structure, links, new posts and more on the company website to be optimized for top SEO standards</div>
          <div className={styles.descriptionLine}>- Created listings for the company Google Business Profile and Bing Places account</div>
          <div className={styles.descriptionLine}>- Directed leads to company President and brought in multiple contracts totaling over $100,000</div>
        </div>
      </div>

      <div className={styles.role}>
        <h3>Web Developmment Intern</h3>
        <div className={styles.subtext}>
          {"Aug 2012 - Dec 2014"}
        </div>
        <div className={styles.subtext}>
          {"Orlando, Florida"}
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionLine}>- Responsible for designing and developing websites as part of a team using best HTML 5 practices</div>
          <div className={styles.descriptionLine}>- Created custom CSS stylesheets for uniform styling throughout websites</div>
          <div className={styles.descriptionLine}>- Published multiple press releases and blogs used to drive traffic to website</div>
        </div>
      </div>
    </div>

    {/* Vector */}
    <div className={styles.company}>
      <h2 className={styles.companyName}>Vector Marketing</h2>

      <div className={styles.role}>
        <h3>Sales Representative</h3>
        <div className={styles.subtext}>
          {"Oct 2015 - Nov 2015"}
        </div>
        <div className={styles.subtext}>
          {"Orlando, Florida"}
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionLine}>- Scheduled appointments with potential customers through personal contacts and referrals</div>
          <div className={styles.descriptionLine}>- Presented Cutco products to prospective customers</div>
          <div className={styles.descriptionLine}>- Wrote up and submitted customer orders totaling several thousand dollars</div>
          <div className={styles.descriptionLine}>- Assisted existing customers with service requests</div>
          <div className={styles.descriptionLine}>- Attended advanced training sessions and optional conferences to increase knowledge and productivity</div>
          <div className={styles.descriptionLine}>- Reviewed personal performance with the local office manager at weekly meetings</div>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Timeline" />

export default Timeline
