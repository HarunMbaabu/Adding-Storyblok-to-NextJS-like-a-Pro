## **Adding Storyblok to NextJS Like A Pro**

The official website describes **Storyblok** in the following terms:

> Storyblok is the only Headless Content Management System with a Visual Editor. It provides developers with all the flexibility they need to build reliable and fast websites, while giving content creators with no coding skills the ability to edit content independently of the developer.

A **Headless CMS** is a back-end only content management system that delivers content as data to any platform or device via API, rather than having it tightly coupled to a specific website or mobile app. In practice, this means that content creators are able to use a single content repository to deliver content from a single source to endless frontend platforms via API, such as websites, mobile apps, TVs, smart watches etc. In this tutorial we are going to use Storyblok as our preferred headless CMS for our examples. 

 ![Features from officaila website](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3k7adxv6wou7olscbq9f.png)  *Storyblok features as stated in the official website  (Source: storyblok.com).*
 
Storyblok combines its straightforward developing environment for developers and ease of use for content editors to make content creation seamless and interesting.

### Why use headless CMS? 
Because a Headless CMS doesn't restrict you to a specific technology, like PHP and MySQL in the case of WordPress, you and your team are free to build projects with preferred options like having a CMS for React, Angular, Vue, and so on.

### **What is NextJS?** 

NextJS is a ReactJS frontend framework created by [Vercel](https://vercel.com/) team that enables server side rendering and static site generation, it helps software engineers to create fast search engine optimised react apps with zero configuration, so we can view it as a wrapper around react framework that enables reactJS to run on the server. 

Am not the gatekeeper but to understand NextJS you need to have the basic understanding of HTML, CSS, JavaScript and reactJS because it contains a lot of reactJS code and reactJS best practices.  

In layman's language NextJS is a framework that enables developers to build reactJS apps but render the content in advance on the server so that the first thing rendered to the user is the fully rendered HTML and after rendering this initial page, client side takes over and works just  like the traditional reactJS applications. 

> One of the greatest feature that i love in NextJS **routers** that makes the navigation seamless.

Use [this](https://medium.com/@auth0/next-js-practical-introduction-navigation-and-routing-17c9be65bb12) article to read more about navigation and routing in NextJS.

### **Requirements**

To follow this tutorial here is a list of requirements that you need to have:

- Basic understanding of [Next.js](https://docs.nestjs.com/) and [React](https://beta.reactjs.org/)

- Node, yarn (or npm) and npx installed. 

- An account on Storyblok to manage content, if you don't have one already sign up here sign up for a free account [here](https://app.storyblok.com/#!/) 🚀. 

- A new Storyblok space, a space in storyblok is a content repository, a place to keep all the content related to one project. 

