import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import '../index.css';
import FadeIn from "../components/animations/FadeIn";

import paper from '../assets/images/Paper-note.svg';
import resume from '../assets/pdf/RutvikPandya.pdf';



function ExperiencePage(props){

    return(
        <div>
            
        <Container className="p-0 " fluid={true}>
            <Header/>
            <Hero title={props.title}/>
            <Content>
                <FadeIn>
                <h2 className="display-5 font-weight-bolder"> Resume </h2>
                <a href={resume} target="_blank">
                    <img className="r-svg-large" src={paper}></img>
                </a>
                <hr size="50"></hr>
                <h2 className="display-5 font-weight-bolder"> ANSYS Inc. </h2>
                <h4>Software Developer | Intern | April 2021 - August 2021 </h4>
                <h5 className="font-weight-lighter"> Ansys was the company that brought forth my realization and interest towards Software Development. 
                    Working with the Account and Store team, I was able to get a wide range of experiences ranging from Angular to Microsoft Azure.
                    Using these technologies I was able to help refactor portions of the admin website into reusable components. This included multiple 
                    analytics tables to various modals used to purchase additional products from Ansys. I also got to experience the customer service 
                    aspect of the business as I worked hand-in-hand with developers to add their applications to the Ansys catalog. I was able to
                    bring the efficiency of applications added to store from 3-4 apps/month to around 14-15 apps/month while improving customer satisfaction. 
                </h5>
                <hr size="50"></hr>
                <br></br>
                <h2 className="display-5 font-weight-bolder"> Electrovaya Inc. </h2>
                <h4> Firmware Engineer | Intern | September 2020 - December 2020 </h4>
                <h5 className="font-weight-lighter"> Through my many internships, I tried to apply to a variety of jobs to get a better
                    understanding of all the aspects of Mechatronics. At Electrovaya, I was also able to experience working on the Firmware
                    side. Here, I was given the opportunity to work on a project that could help reduce the cost of the testing equipment used
                    in the end of line battery testing. I designed a 2-layer PCB in Eagle that used "CAN Bus Logger with SD-Card" as a base, 
                    connects externally using a DB9 connecter, has micro-fit headers to allow further application and interaction with the MCU (STM32F405) 
                    and a coin-cell battery holder that maintains the internal RTC when the module is powered off. This reduced the cost of the testing equipment
                    from $200USD(previously used Wilke CAN-Bus I/O Modules) to $25USD a piece. I also modified the presently used testing equipment to send messages
                    at various baud rates, allowing for the testing capabilities on many different batteries. I also had the opportunity to work with LabVIEW and design 
                    a tool that can receive and transmit CAN data to batteries allowing employees to monitor and test the batteries in a much faster and precise manner.
                    The tool allowed for logging, error code identification, obtaining the V/I/T state of the battery as well as a search functionality for thousands of incoming messages.
                </h5>
                <hr size="50"></hr>
                <br></br>
                <h2 className="display-5 font-weight-bolder"> Bendix Commercial Vehicle System LLC. </h2>
                <h4> Mechatronics Product Developer | Intern | January 2020 - April 2020 </h4>
                <h5 className="font-weight-lighter"> At Bendix I had the chance to work on the assembly of an Air-Board that represented Bendix's brake systems, employed by over 70%
                    of trucks in North America. I also had the chance to design and make a PCB in PADS Layout that used an Arduino Pro Mini, NeoPixel Lights to promote STEM outreach for an event
                    designed for students. I cut an assembled 40 of these pieces improving my circuit design, soldering, coding and planning skills.  
                </h5>
                <hr size="50"></hr>
                <br></br>
                <h2 className="display-5 font-weight-bolder"> Loopio Inc. </h2>
                <h4> Automation Engineer | Intern | April 2019 - August 2019 </h4>
                <h5 className="font-weight-lighter"> At Loopio, I gained a better appreciation for testing in a Software environment as it can help design a very robust and efficent product. 
                    I had the opportunity to design 50+ automation scripts with Selenium and PHP to test various core features of the product. I maintained Bitbucket pipelines everyday to ensure 100%
                    of the automation test suite was successful. I also had the chance to implement FullStory (third-party analytics software) to allow for analysts to monitor the website without accessing private
                    customer data. One of the most interesting portions of the term was when I got to work on re-factoring React code. Additionally, I worked on resolving 50+ bugs and necessary design tweaks on the website. 
                </h5>
                <hr size="50"></hr>
                <br></br>
                <h2 className="display-5 font-weight-bolder"> Yulio Technologies Inc.</h2>
                <h4 > QA/Developer | Intern | April 2019 - August 2019 & September 2018 - December 8 </h4>
                <h5 className="font-weight-lighter"> As my first internship, I was able to gain a lot of experience working at a company here. At Yulio I got experience using Django to creat charts that gathered
                data on the website's activity based on thousand of active users, I added multiple features and fixed multiple bugs/issues found in the company's website. On the project side of things,
                I prepared and ran multiple meetings as a bridge between marketing and developers to introduce new fatures and realeases from both sides 
                </h5>
                <hr size="50"></hr>
                <br></br>
                </FadeIn>
            </Content>
            <Footer/>
        </Container>
        </div>
    );
}
export default ExperiencePage;
