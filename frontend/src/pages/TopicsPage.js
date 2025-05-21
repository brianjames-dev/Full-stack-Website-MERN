import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#design">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#javascript">Javascript</a>

            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    <strong>Index</strong>, as it relates to websites and servers, refers to a default document or file served to a user when attempting 
                    to access a website's root URL. This eliminates the requirement for a general user to specify exactly which file to 
                    access when searching for a website (example: www.index.com/home.html)
                </p>

                <p>
                    The difference between the file's details on the <strong>web server</strong> versus the <strong>local computer</strong> is generally whether it's hosted 
                    on a server. On the web, the browser uses the computer to receive files sent by the server, whereas on a computer, 
                    there is no server interaction, and the user can work with the files locally. Also, on a web server, the user can 
                    inspect the file in real-time using a browser, while on a computer, the code must be loaded separately into a browser 
                    to see how it looks.
                </p>

                <p>
                    The <strong>favicon.ico</strong> file has a status of 200 because the request succeeded and the response body has the needed information. 
                    On the other hand, <strong>themain.css</strong> and <strong>main.js</strong> files do not because they do not exist within the webpage. 
                </p>

                <p>
                    The URL to my web file is: file:///Users/brianjames/Desktop/OSU%20Fall%20Semester%202023/CS%20290%20-%20Web%20Development/Assignments/M1/a1-jamebria/index.html

                    The schema is 'file', there is no subdomain or host domain (www.example.com), and the resources part of the URL is /Users/brianjames/Desktop/OSU%20Fall%20Semester%202023/CS%20290%20-%20Web%20Development/Assignments/M1/a1-jamebria/index.html
                </p>
            </article>

            <article id="design">
                <h3>Frontend Design</h3>
                <p>
                    The concept of <strong>frontend design</strong> pertains to the visual aspects of a website or application and how user-friendly 
                    it is. Exceptional frontend design delivers a seamless user experience combined with an attractive user interface. It also encompasses 
                    the principles of Efficiency, Effectiveness, Engagement, Error Tolerance, and Ease of Learning, often referred to as the 5 Es. These 
                    core concepts focus on optimizing the user experience by ensuring streamlined processes, accurate goal achievement, user involvement, 
                    error forgiveness, and ease of comprehension. By prioritizing these aspects, frontend designers create interfaces that are not only 
                    visually appealing but also intuitive, interactive, and user-friendly, ultimately enhancing user satisfaction and engagement.
                </p>

                <dl>
                    <dt><strong>Efficiency:</strong></dt>
                    <dd>Efficiency in usability refers to the ability of users to perform tasks quickly and with minimal effort. A well-designed 
                        frontend ensures streamlined processes and reduces user effort.</dd>
                    
                    <dt><strong>Effectiveness:</strong></dt>
                    <dd>Effectiveness measures how accurately and completely users can achieve their goals using the website or application. 
                        It assesses the success rate of user interactions and tasks.</dd>
                    
                    <dt><strong>Engagement:</strong></dt>
                    <dd>Engagement refers to the level of user involvement and interactivity within the frontend. Engaging designs capture users' 
                        attention, keeping them interested and invested in the content or services provided.</dd>
                    
                    <dt><strong>Error Tolerance:</strong></dt>
                    <dd>Error tolerance assesses how forgiving a frontend design is when users make mistakes. A user-friendly interface anticipates 
                        common errors and provides clear feedback, guiding users to correct their actions.</dd>
                    
                    <dt><strong>Ease of Learning:</strong></dt>
                    <dd>Ease of learning evaluates how quickly users, especially new ones, can grasp how to use the frontend features. Intuitive 
                        design and clear, consistent navigation contribute to a user's ability to learn and understand the system efficiently.</dd>
                </dl>

                <p>
                    <code>&lt;header&gt;</code> defines introductory content, often containing logos, navigation, and headings.
                    <code>&lt;nav&gt;</code> represents a section of the page dedicated to navigation links.
                    <code>&lt;main&gt;</code> contains the central content of the document, excluding headers, footers, and sidebars.
                    <code>&lt;section&gt;</code> groups related content together and typically includes a heading.
                    <code>&lt;article&gt;</code> defines independent, self-contained content that can be reused and distributed.
                    <code>&lt;aside&gt;</code> represents content that is tangentially related to the content around it, often presented as a sidebar.
                    <code>&lt;figure&gt;</code> used to encapsulate media content such as images, illustrations, diagrams, and code snippets.
                    <code>&lt;blockquote&gt;</code> indicates that the enclosed text is a quotation from another source.
                    <code>&lt;footer&gt;</code> contains information about the document's author, copyright, or links to related documents.
                    <code>&lt;div&gt;</code> a generic container used for styling purposes or when no other semantic element is suitable.
                </p>

                <ol>
                    <li>Anchors linking to <strong>external content</strong> (<code>&lt;a href="https://developer.mozilla.org/en-US/"&gt;MDN's Developer Website&lt;/a&gt;</code>) direct users to web pages outside the current site, providing external resources.</li>
                    <li><strong>Internal content</strong> links (<code>&lt;a href="#topic"&gt;Topic&lt;/a&gt;</code>) navigate within the same webpage, allowing users to jump to specific sections or elements on the page.</li>
                    <li><strong>Page-to-page</strong> anchors (<code>&lt;a href="page2.html#section-id"&gt;Page-to-Page Link&lt;/a&gt;</code>) connect different web pages, enabling navigation between related content.</li>
                </ol>
            </article>
            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    1. The 6 major specifications of images for the web are a descriptive file name to improve search engine optimization, a small 
                    file size for fast load times, exact dimensions in order to fit the webpage perfectly, correct file format for the type of 
                    photo being utilized, reduced resolution for correct monitor sizes, and color mode for all the different image formats.
                </p>
                <p>
                    2. The file formats most appropriate for photos are .JPG and WebP. This is because it supports millions of colors and provides 
                    good compressions, allowing for smaller file sizes. The most common file formats for line art on the web are .GIF, .PNG, and .SVG. 
                    This is because it is a lossless image format that supports transparency, making it ideal for images with sharp edges, solid 
                    colors, and areas of transparency.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    1. Browsers and devices use favicons or "favorite icons," which are small images associated with a website, that are displayed 
                    on browser tabs, windows, bookmarks, and favorites. 
                </p>
            </article>
            <article id="javascript">
                <h3>Javascript</h3>
                <p>1. The main data types in JavaScript include:</p>
                <ul>
                    <li><strong>Numbers:</strong> for numeric data.</li>
                    <li><strong>Booleans:</strong> for true/false values.</li>
                    <li><strong>Strings:</strong> for text data.</li>
                    <li><strong>Special:</strong> undefined and null values.</li>
                    <li><strong>Objects:</strong> for storing key-value pairs.</li>
                    <li><strong>Symbols:</strong> specific non-alphanumeric characters.</li>
                </ul>
                <p>2. Objects, arrays, and JSON are used as follows:</p>
                <ul>
                    <li><strong>Objects:</strong> A JavaScript object is a set of name-value pairs. The names of these pairs are also called properties of the object.</li>
                    <li><strong>Arrays:</strong> Arrays in JavaScript are objects whose property names are the strings '0', '1', '2', etc. JavaScript requires that the properties of an object must be of string data type.</li>
                    <li><strong>JSON (JavaScript Object Notation):</strong> JSON stands for JavaScript Object Notation and is a very widely used format for exchanging data between applications. Using JSON, we can map an object in a program to a string in the JSON format, as well as create an object in a program from a string in the JSON format.</li>
                </ul>
                <p>3. Conditionals and loops are used as follows:</p>
                <ul>
                    <li><strong>Conditionals (if, else if, else):</strong> Used to make decisions in code based on specified conditions. They allow different code blocks to be executed depending on whether a condition is true or false.</li>
                    <li><strong>Loops (for, while, do-while):</strong> Used to repeatedly execute a block of code. They help automate repetitive tasks by iterating over a set of data or executing code until a certain condition is met.</li>
                </ul>
                <p>4. <strong>Object-oriented programming (OOP)</strong> in JavaScript is a set of name-value pairs. The names of the these pairs are also called properties of the object. We can add, read, modify and delete properties of the object.</p>
                <p>5. <strong>Functional programming</strong> in JavaScript includes higher order functions, the built-in map function, closure, function arguments, exceptions, and the finally block. Functional programming focuses on the composition of functions to enhance code clarity and maintainability.</p>         
            </article>
        </>
    );
}

export default TopicsPage;