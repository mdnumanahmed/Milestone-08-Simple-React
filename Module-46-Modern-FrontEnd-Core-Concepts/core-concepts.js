/* 
Component ৪ ভাবে identify করা যায়------
1. Similar in look, different in data -  It called Component
2. Contain repeating components (similar in look, different in data) collection - It called Container Component
3. No Pattern, But breakdown for working purpose.
 প্রয়োজনের খাতিরে ভিন্ন ভিন্ন কয়েকটি Component কে একটি Component রাখা।
4. Stand Alone Component ওয়েব সাইটের যে েকোন অংশ, যার সাথে অন্য কোন অংশের মিল নাই।
*/

/* 

https://www.spiceworks.com/tech/devops/articles/what-is-single-page-application/

Single Page Application vs Multi-page Application 

SPA
A single-page application is defined as an application (web app or website) that loads only a single page and then rewrites the page with new content fetched from a web server as the user interacts with it instead of loading a new page for every interaction. 

MPA
Several page applications (MPA) contain multiple pages containing static data and links to other sites. HTML and CSS are the primary technologies used to develop MPA websites. They may use JavaScript to reduce load and increase speed.


SPA Benefits
Caching capabilities. ...
Fast and responsive. ...
Debugging with chrome. ...
Fast development. ...
Enhanced user experience. ...
Conversion to IOS and Android applications. ...
Cross-platform compatibility. ...
Search engine optimization (SEO)


*/

/* 
URL এর যে অংশের (pathname) উপর ভিত্তি করে ওয়েবসাইট এর আংশিক বা সম্পূর্ন ডাটা পবির্তনের পদ্ধতিকে route বলে। 

*/

/* 
Attributes are defined by HTML. Properties are accessed from DOM (Document Object Model) nodes.

While writing HTML code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.


Attribute: Attributes are defined by HTML and are used to customize a tag.
Properties: HTML DOM properties are values (of HTML Elements) that you can set or change.
So, the main differences between attributes and properties are:
Attributes are defined by HTML, but properties are defined by the DOM.
The value of an attribute is constant, but the value of a property is variable.
The attribute’s main role is to initializes the DOM properties. So, once the DOM initialization complete, the attributes job is done.
*/

/* 
Website এর কোন কিছু User interaction এর কারণে পরিবর্তন হওয়াকে state বলে।
*/

/* 
Create React App using vite
--> npm create vite@latest project-name
--> select framework React
--> select variant JavaScript
--> change directory to created application
--> npm install 
--> npm run dev
*/

/* 
Core Concept and Interview Questions

What are components in react?
-> Building block of the user interfaces.
-> Each component exists in the same space but work independently.
-> All of the components are being merged in a parent component. (final ui)
-> Splits UI into independent and reuseable pieces.
-> Accept input called props (optional) and return react element.
-> Re-useable having their own structure and methods.

Advantages of component
-> Re-useability
-> Fast Development
-> Design Consistency
-> Maintainability (Update just one component & get result in all spaces related to this component)

What are single page Application
1. Only one web page, and each time something happens, only part of the page is reloaded while the rest of the HTML remain unchanged.
2. All user interaction with this service is carried out using one screen (page)
3. Load all the necessary HTML, CSS and JavaScript in initial load, then dynamically update their DOM and retrieve extra data based on user interaction.
4. Give the users the illusion that they are accessing different pages or paths. 
5. Enable to combine a complex functionality of an MPA with the convenient navigation (a hybrid approach)



*/

/* 
SPA vs MPA 
                    SPA 
Structure           One page 
Shareable links     One link for the whole website 
Loading             Longer initial loading , but after that each piece
                     of content is instantly refreshed 
Security            Needs more data protection on client side 
UI and UX           Looks and feels like a native app 
Offline mode        Works with poor or non - existent internet
SEO friendliness    Not SEO friendly , but optimization can be improved 
Scalability         Difficult 




MPA 

Many pages 

Many links 

A bit quicker initial loading , but then the app reloads the whole page on each user's action which is time - consuming 

Each page is protected on the server 

Must be adapted for mobile 

Does not work without the internet 

Works with all search engines 

Almost unlimited 

*/