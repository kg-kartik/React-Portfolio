import React, {Component} from "react"
import "font-awesome/css/font-awesome.css";
import MetaTags from 'react-meta-tags';

class About extends Component {
    render() {
        return (
            <div className="about">
            <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta id="meta-description" name="description" content="Some description." />
            </MetaTags>
            <p> Hey There! My name is Kartik Goel.I have completed my schooling from 
            Delhi Public School, Haridwar.
            I am much addicted to technology,programming and 
            a cup of coffee with it!! Hehe,Jokes apart, I like to design 
            web pages in my free time, and beside this I also write poems.
            I have small collection of them and you can see it on my <a href="kartikgoelwords.blogspot.in"> Blog </a> . <br /> <br />
            I have worked in python, and with many of its libraies including numpy,scipy for data analysis
            , beautiful soup in scraping data from many online websites . I have also 
            created basic machine learning models. 
            Now, I am now currently updating myself to new technologies . I have worked in React JS 
            and have made a few web apps. I am now working in React Native to create android and 
            ios Apps. <br /> <br />
            I also contribute to open source. I am a member of Drupal Community
            where I made quite number of contributions, as a part of Google Code In contest
            held worldwide , in which i was adjuged as Finalist for completing 18 tasks.
            I also contribute  to github as well whose profile link can be found at home section.
             </p>
            </div>
        )
    }
}
export default About