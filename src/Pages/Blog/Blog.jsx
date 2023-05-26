import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='max-w-7xl mx-auto my-10 p-5'>
            <h1 className='text-center text-4xl font-bold text-secondary mb-10'>Blog Page</h1>
            <div className='space-y-3'>
                <h1 className='text-2xl text-blue-500 font-semibold'><span>1.</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <div className='space-y-2 text-lg'>
                    <p>An access token is a credential that allows a client to access a protected resource, such as an API. When a user logs in to a system, they are typically issued an access token that grants them permissions to perform certain actions or access certain resources. The access token is usually short-lived, and once it expires, the user must obtain a new one.</p>
                    <p>A refresh token is a credential used to obtain a new access token after the original token has expired. When a user logs in to a system, they are often issued both an access token and a refresh token. While the access token is used to perform API requests, the refresh token is used to request a new access token when the current one expires.</p>
                    <p>Access and refresh tokens are typically stored on the client-side in a secure manner, such as in an HTTP-only cookie or a local storage mechanism provided by the browser. The specific storage location will depend on the security requirements of your application and the type of client you're building. It's important to implement proper security measures when storing tokens on the client-side, including encryption and preventing cross-site scripting attacks.</p>
                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <h1 className='text-2xl text-blue-500 font-semibold'><span>2.</span> Compare SQL and NoSQL databases?</h1>
                <div className='space-y-2 text-lg'>
                    <p>SQL databases are mainly used for structured data, meaning the data is organized into tables with predefined relationships between them. SQL databases are great for handling complex queries because they have a well-defined structure making it easier to search through large amounts of data. SQL databases also enforce ACID (Atomicity, Consistency, Isolation, Durability) properties which makes them suitable for use cases where data integrity is critical such as financial transactions or healthcare information.</p>
                    <p>On the other hand, NoSQL databases are designed to handle unstructured, semi-structured, and rapidly changing data formats. They store data in collections or documents instead of tables and rows. NoSQL databases are scalable and can handle large volumes of data with high velocity. They are often used in big data, real-time web applications, and analytics where performance is a top priority.</p>
                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <h1 className='text-2xl text-blue-500 font-semibold'><span>3.</span> What is express js ?</h1>
                <div className='space-y-1 text-lg'>
                    <p>Express.js is a popular open-source web framework that is written in JavaScript and runs on Node.js. It is used for building robust and scalable web applications and APIs quickly and easily.Express.js provides a variety of features out of the box, including routing, middleware, and template engines. The routing feature allows developers to define endpoints and HTTP methods, and maps those requests to appropriate controller functions. The middleware feature enables developers to add functionality to the request-response cycle, such as authentication or error handling.</p>
                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <h1 className='text-2xl text-blue-500 font-semibold'><span>4.</span> What is Nest JS ?</h1>
                <div className='space-y-1 text-lg'>
                    <p>NestJS is a popular open-source back-end framework for building scalable and modular applications in Node.js. It is built on top of Express.js and provides a higher level of abstraction, making it easier to develop complex applications.NestJS is designed with server-side application architecture principles in mind, such as separation of concerns, dependency injection, and modularization. It uses TypeScript, a superset of JavaScript that adds optional static typing and other features that make code more maintainable and readable.One key feature of NestJS is its powerful module system, which allows developers to organize their code into reusable and testable modules. Each module encapsulates related functionality and dependencies, making it easy to maintain and scale the application over time.</p>
                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <h1 className='text-2xl text-blue-500 font-semibold'><span>5.</span> What is MongoDB aggregate and how does it work ?</h1>
                <div className='space-y-2 text-lg'>
                    <p>In MongoDB, the aggregate() method is used to perform complex data analysis tasks and to get statistical information about the data stored in a collection. The aggregate method allows you to process the data in multiple stages, with each stage consisting of one or more operations.</p>
                    <p>The pipeline used in aggregate() consists of multiple stages such as filtering, grouping, projecting, sorting, and others. Each stage takes an input document from the previous stage, applies some operation on it, and produces an output document which is then passed to the next stage in the pipeline.</p>
                    <p>Some common operations that can be performed using the aggregate() method include:</p>

                    <p>&#9733; $match: Filters documents in the collection based on specified criteria.</p>
                    <p>&#9733; $group: Groups documents by a specified field and performs some aggregations on those groups.</p>
                    <p>&#9733; $project: Manipulates the structure of the output documents by including, excluding, or renaming fields.</p>
                    <p>&#9733; $sort: Sorts the documents in the output based on specified criteria.</p>
                    <p> &#9733; $limit: Limits the number of documents returned in the output.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;