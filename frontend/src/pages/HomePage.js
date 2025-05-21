import React from 'react';

function HomePage() {
    return (
        <div>
            <h2>Home Page</h2>
            <article>
                <p><strong>Career Goals:</strong></p>
                <p>My career goals involve becoming proficient in my understanding and implementation of code.
                    Beyond that, I would like to get a good junior role, preferebly in a web dev, frontend, or
                    backend position. Other than that, I would like to take my coding knowledge to the music
                    industry and improve the efficiency and convenience of music technology for either workers
                    behind-the-scenes, or the general listener (haven't fully decided yet).
                </p>
            </article>
            <section>
                <p><strong>Technologies Used:</strong></p>
                <dl>
                    <dt><strong>React:</strong></dt>
                    <dd>A JavaScript library for building a user interface with reusable UI components
                        that can manage the state of an application easily and efficiently.</dd>

                    <dt><strong>MongoDB:</strong></dt>
                    <dd>A NoSQL database that stores data in binary JSON. Its designed to be scalable,
                        flexible, and easy to work with.</dd>

                    <dt><strong>Express:</strong></dt>
                    <dd>A web application framwork for Node.js that simplifies the process of building 
                        web apps and APIs by providing a set of features for routing, middleware, and handling
                        HTTP requests/responses.</dd>

                    <dt><strong>Node.js:</strong></dt>
                    <dd>A JavaScript runtime build on Chrome's V8 JavaScript engine. It allows developers
                        to run JavaScript on the server-side, enabling scalable and high-preformance web apps.</dd>

                    <dt><strong>HTML:</strong></dt>
                    <dd>HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It uses elements
                        such as headings, paragraphs, images, etc.</dd>

                    <dt><strong>CSS:</strong></dt>
                    <dd>CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation
                        of a document written in HTML. It controls the layout, appearance, and style of web pages.</dd>

                </dl>
            </section>
        </div>
    );
}

export default HomePage;


