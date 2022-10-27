import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-5 mb-5 our-courses'>Blog</h2>
            <div className='container blog-post mb-5 p-3'>
                <h3>what is cors?</h3>
                <p className='text-dark'><b>Ans:</b> CORS - Cross Origin Resource Sharing. It allows us to specify (on our server) what other servers can have access, by adding a couple headers to HTTP responses. This makes it possible to serve our front-end app from one server, and our back-end API from a different server, without sacrificing security. </p>
            </div>
            <div className='container blog-post mb-5 p-3'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='text-dark'><b>Ans:</b>  Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.I also want to consider leveraging this tool, I eventually wish to host and manage my app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.As a Google Cloud service, it also gives me access to other Google products and features, like Google Drive and Sheets. For instance, I can import dummy data from Google Sheets and use it temporarily to serve my app.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. </p>
                <p className='text-dark' ><b>Other authentication Method:</b> <br />  1. STYTCH <br />2. Ory <br /> 3. Authress <br /> 4. Auth0 <br /> 5. Amazon Cognito etc.</p>
            </div>

            <div className='container blog-post mb-5 p-3'>
                <h3>How does the private route work?</h3>
                <p className='text-dark'><b>Ans:</b> Private routes are hidden routes in a web app. They contain sensitive information of the website and users. These info are not safe to show publicly. So we set private route with react router dom. When user are logged in they can see the private route otherwise not. Private routes are also called protected routes. </p>
            </div>
            <div className='container blog-post mb-5 p-3'>
                <h3>What is Node? How does Node work?</h3>
                <p className='text-dark'><b>Ans:</b> Node.js is an open source server environment.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. </p>
                <br />
                <p className='text-dark'><b>How does node work?</b><br />First of all just like other languages node comes with packages and modules. These are libraries of functions that we can import from npm (node package manager) into our code and utilize. If you have node installed on your computer, then you already have some basic modules installed. These are how we create a simple server, but I’ll get to that later.If you are familiar with JavaScript, then you know it is asynchronous and single threaded. The single thread is the event loop which is responsible for running all functions and requests. The asynchronous behavior is extremely important when using node, because it guarantees that the event loop is never blocked by a synchronous function.Even though there is only one event loop, when a request is made the loop passes the request to an asynchronous function which does the work. When this function is done and a response is returned, it can then be passed back to the event loop to be executed by the callback and sent to the user. If the functions were synchronous then the event loop would get locked up with one clients request and response, and all other clients would have to wait till that client was done. Because of the the asynchronous nature of JavaScript, the applications using node can handle many requests happening at the same time. This means that when programming in Node.js it is important to always keep in mind that the functions being written are not synchronous. It is also very important to catch errors on the server before it is passed back to the client. This prevents any errors from getting to the event loop which could crash the program and all clients would suffer.</p>
            </div>
        </div>
    );
};

export default Blog;