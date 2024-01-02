import React from 'react'
import Skill from './Skill'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
// import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";


const Services = () => {
    return (
        <div className='services w-4/5 m-auto'>
            <h1 className='text-2xl text-left ml-8 text-white font-bold '>Skills Set</h1>
            <hr className='w-[50px] h-[2px] ml-8 mb-4'/>
            <div className="skill-container flex flex-wrap justify-center gap-10 p-3">
                <Skill color="#E44D26" icon={FaHtml5} text="HTML (HyperText Markup Language) is the standard language used to create and design web pages. It consists of a series of elements, or tags, that define the structure and content of a web page. HTML uses a markup system to organize and format text" />

                <Skill color="#1572B6" icon={SiCss3} text="CSS (Cascading Style Sheets) is a styling language used to define the visual presentation of a web page written in HTML. It allows developers to control the layout, colors, fonts, and other visual aspects of a web page." />

                <Skill color="#F0DB4F" icon={IoLogoJavascript} text="JavaScript is a versatile and powerful programming language primarily used for web development. It allows developers to add interactive and dynamic features to websites, such as user interfaces, animations, and client-side functionality. " />

                <Skill color="#0868AC" icon={FaReact} text="React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of a web application. React uses a declarative approach to describe the UI and provides a virtual DOM for optimizing performance." />

                <Skill color="#5B4282" icon={FaBootstrap} text="Bootstrap is a front-end framework that provides a collection of pre-built HTML, CSS, and JavaScript components for creating responsive and mobile-first web pages. It simplifies the process of designing and styling web applications by offering a set of standardized" />

                <Skill color="#0868AC" icon={DiJqueryLogo} text="jQuery is a fast, lightweight, and feature-rich JavaScript library that simplifies client-side scripting and DOM manipulation. It provides a wide range of utilities for interacting with the Document Object Model (DOM), handling events, making AJAX requests" />

                <Skill color="#43853D" icon={FaNode} text="Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is commonly used for server-side scripting and building scalable network applications" />

                <Skill color="#080808" icon={SiExpress} text="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating APIs and handling HTTP requests by offering a simple and intuitive interface" />

                <Skill color="#57B547" icon={SiMongodb} text="MongoDB is a popular open-source NoSQL database that uses a document-oriented data model. It is designed to be flexible, scalable, and high-performance, making it suitable for a wide range of applications. MongoDB stores data in flexible" />

                <Skill color="#1F2328" icon={FaGithubSquare} text="GitHub is a web-based platform for version control using Git. It provides hosting for software development and collaboration tools for managing projects, code, and documentation. GitHub allows developers to store, share, and track changes to their code" />

                <Skill color="#FC7B12" icon={FaNpm} text="npm (Node Package Manager) is the default package manager for Node.js, used to install, manage, and share packages of code with other developers. It provides access to a vast ecosystem of open-source JavaScript libraries and tools" />

                <Skill icon={FaFigma} text="Figma is a cloud-based design and prototyping tool used for creating user interfaces, interactive prototypes, and collaborative design projects. It enables designers and teams to work together in real time, allowing for seamless collaboration on design projects." />
            </div>
        </div>
    )
}

export default Services