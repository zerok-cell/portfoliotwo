import nextjs from "~/public/iconsStack/nextjs-icon.svg";
import react from "~/public/iconsStack/react-js-icon.svg";
import css from "~/public/iconsStack/css-icon.svg";
import django from "~/public/iconsStack/django-icon.svg";
import html from "~/public/iconsStack/html-icon.svg";
import javascript from "~/public/iconsStack/javascript-programming-language-icon.svg";
import python from "~/public/iconsStack/python-programming-language-icon.svg";
import redux from "~/public/iconsStack/redux-icon.svg";
import sass from "~/public/iconsStack/sass-icon.svg";
import tailwind from "~/public/iconsStack/tailwind-css-icon.svg";
import typescript from "~/public/iconsStack/typescript-programming-language-icon.svg";

import { ImagesTextData } from "@/components/MyStack/types.mystack";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

const dataStack: ImagesTextData<StaticImport>[] = [
    {
        imageIcon: react,
        text: 'React',
        description: 'I use React to create dynamic and interactive user interfaces. It helps me quickly develop applications by utilizing components and hooks, which speeds up the development process.'
    },
    {
        imageIcon: nextjs,
        text: 'NextJs',
        description: 'Next.js is a framework for React that allows me to build server-side rendered applications. I use it for SEO optimization and faster page rendering from the server side.'
    },
    {
        imageIcon: css,
        text: 'CSS',
        description: 'CSS is a style sheet language that I use to style web pages. It helps me make applications look nice and responsive on different devices.'
    },
    {
        imageIcon: django,
        text: 'Django',
        description: 'Django is a Python framework that I use to build the backend of web applications. It helps me quickly build secure and reliable web apps using models and views.'
    },
    {
        imageIcon: html,
        text: 'HTML',
        description: 'HTML is the foundation of any web application. I use it to create the structure of pages, add text, images, and other elements to websites.'
    },
    {
        imageIcon: javascript,
        text: 'JavaScript',
        description: 'JavaScript is the programming language I use to write logic on the client-side. It helps me create interactive elements on web pages, like forms, buttons, and dynamic content updates.'
    },
    {
        imageIcon: python,
        text: 'Python',
        description: 'Python is my main language for backend development and scientific applications. I use it for scripting, automating tasks, and working with big data.'
    },
    {
        imageIcon: redux,
        text: 'Redux',
        description: 'Redux is a state management library that I use with React. It helps me centralize the state and makes it easier to pass data between components.'
    },
    {
        imageIcon: sass,
        text: 'Sass',
        description: 'Sass is a CSS preprocessor that I use for writing more convenient and powerful styles. It allows me to use variables, mixins, and other features, making it easier to maintain styles in large projects.'
    },
    {
        imageIcon: tailwind,
        text: 'Tailwind CSS',
        description: 'Tailwind CSS is a utility-first CSS framework that helps me quickly create styled components. I use it to avoid writing extra CSS and work with pre-built classes for faster development.'
    },
    {
        imageIcon: typescript,
        text: 'TypeScript',
        description: 'TypeScript is an enhanced version of JavaScript that adds type checking. I use it to make the code more reliable and easier to maintain, preventing many errors during the compilation phase.'
    },
];

dataStack.map(item=> (item.alt = `${item.text} logotype` ) )

export default dataStack