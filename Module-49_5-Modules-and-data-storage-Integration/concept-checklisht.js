/* 
Modules= প্রত্যেকটি ফাইল হচ্ছে একেকটি module । 
এটি React Component হতে পারে। JavaScript এর যে কোন কোড বা ফাংশন হতে পারে। যা ভিন্ন ভিন্ন ফোল্ডারে থাকতে পারে। আমরা প্রয়োজনের সময় যেখানে ইচ্ছা import করে ব্যবহার করতে পারি।
কোন ফাইল import করতে হলে প্রথমে ঐ ফাইলকে export করতে হবে। না হলে import করা যাবে না।

export দুই ধরণের হয়ে থাকে = 
1. export default functionName = একটি ফাইল থেকে শুধুমাত্র একটি ফাংশন বা কোড কে export default করা যাবে। 
2. export = একটি ফাইল থেকে একাধিক ফাংশন বা কোড কে export করা যাবে।
{} কার্লি ব্র্যাসের মধ্যে ফাংশনের নাম লিখে  export {add, multiply} লিখতে হবে।

import দুই ধরণের হয়ে থাকে = 
1. export default ফাইলকে সরাসরি নাম দিয়ে import করা যায়।
2. export ফাইলকে কার্লি { } ব্যাসের মধ্যে নাম দিয়ে import করা যায়। যদি একাধিক কোড import করতে হয়, তাহলে কমা (,) দিয়ে import করতে হবে।


export default = একটি ফাইল থেকে শুধুমাত্র একটি ফাংশন বা কোড কে export default করা যাবে। 


’./’  ডট স্লেশ এর অর্থ হলো একই ফোল্ডার এ ফাইলটি রয়েছে।
’./’  ডট স্লেশ না থাকা মানে ফাইলটি node_modules থেকে import করা হয়েছে।

=================================================
How to Create Event handler with parameters

onClick={} এর মধ্যে মানে Event handler এর মধ্যে শুধুমাত্র ফাংশনের নাম দিতে হয়। 
আর যদি কোন parameters দিয়ে ডাটা পাঠাতে হলে ‍arrow function দিয়ে ফাংশনকে wrap করে দিতে হয়। না হলে কোড লোড হওয়ার সাথে সাথে ফাংশন রান হয়ে যায়। পরে আর handler কাজ করে না। 

===============================================
Intro to Local storage to store data just one item

ওয়েব সাইটে কোন Event এর দ্বারা কোন ডাটা স্টোর করার জন্য ৩টি পদ্ধতি আছে।
১. আমাদের কোড এর রাখতে পারি।
২. ডাটাবেজে স্টোর করে রাখতে পারি।
৩. ব্রাউজারের লোকাল স্টোরেজে রাখতে পারি।

ডাটা স্টোর করার কয়েকটি ধাপ রয়েছে:
আমরা চাইলে handler function এর মধ্যে সরাসরি localStorage.setItem() দিয়ে ডাটা স্টোর করতে পারি। যেহেতু এটি ভিন্ন ভিন্ন ফাইলে দরকার পড়বে, তাই আমরা central একটা জায়গায় নতুন ফাংশন তৈরি করে export করে দিবো। আর প্রয়োজনমত import করে ফাংশনটি ব্যবহার করবো।

===============================================
Intro to Local storage to store data just one item

addToDb ফাংশনের ভিতরের কাজ = Single value এর ক্ষেত্রে
১। id প্যারামিটার সহ একটি ফাংশন তৈরি করতে হবে, 
২। const quantity = localStorage.getItem(id) দিয়ে চেক করতে হবে, ডাটা অলরেডি আছে কি না?
৩। if কন্ডিশন দিয়ে, যদি ডাটা থাকে, তাহলে পূর্বের ভ্যালুর সাথে নতুন ডাটা যোগ করতে হবে।
    const newQuantity = parseInt(quantity) + 1
    -> ভ্যালুকে নাম্বারে কনভার্ট করে localStorage.setItem(id, newQuantity) এর ২য় প্যারামিটারে দিতে হবে।
৪। else ব্লকে localStorage.setItem(id, 1) দিয়ে নতুন ডাটা সেট করতে হবে।

addToDb কে export করতে হবে।
handler function এর মধ্যে addToDb ফাংশনকে id প্যারামিটার দিয়ে কল করতে হবে।

============================================
Store multiple data in an Object with local storage

addToDb ফাংশনের ভিতরের কাজ = multiple data এর ক্ষেত্রে
১। id প্যারামিটার সহ একটি ফাংশন তৈরি করতে হবে, 
২। let shoppingCart; নামে একটি blank variable declare করতে হবে।
৩। const storedCart = localStorage.getItem('key-name') দিয়ে ডাটা নিয়ে আসতে হবে।
৪। if কন্ডিশন দিয়ে storedCart এর ডাটা চেক করতে হবে।
    -> যদি storedCart এ ডাটা থাকে, তাহলে shoppingCart এর মান সেট করতে হবে।
    shoppingCart = JSON.parse(storedCart) 
৫। else ব্লকের মধ্যে shoppingCart = {} সেট করে দিতে হবে।
৬। quantity পাওয়ার জন্য const quantity = shoppingCart[id] দিতে হবে। (ডাইনামিকভাবে shoppingCart অবজেক্ট এর property তে একসেস করার জন্য shoppingCart[id] ব্যবহার করে তার ভ্যালু নেয়া হয়েছে। যার মধ্যে quantity আছে। )
৭। if কন্ডিশন দিয়ে quantity এর ডাটা চেক করতে হবে।
    -> যদি quantity এর মধ্যে সংখ্যা থাকে, তাহলে shoppingCart[id] এর মান ১ যোগ করে সেট করতে হবে। 
    const newQuantity = quantity + 1
    shoppingCart[id] = newQuantity
৮। else ব্লকের মধ্যে shoppingCart[id] এর মান ১ দিয়ে সেট করতে হবে। 
    shoppingCart[id] = 1
৯। shoppingCart কে JSON.stringify দিয়ে কনভার্ট করে লোকাল স্টোরেজে এ স্টোর করতে হবে। 
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


==============================================
Remove data to the local storage and delete shopping cart
localStorage থেকে ডাটা ডিলেট করার জন্য id প্যারামিটার দিয়ে ফাংশন তৈরি করতে হবে।
ফাংশনের ভিতরে কয়েক ধাপে কাজ হবে:
১। localStorage থেকে ডাটা নিয়ে আসে ভ্যারিয়েবলে সেট করতে হবে। 
    const storedCart = localStorage.getItem('shopping-cart')
২। if কন্ডিশন দিয়ে storedCart এর ডাটা চেক করতে হবে।
    -> যদি storedCart এ ডাটা থাকে, তাহলে storedCart কে JSON.perse() করে shoppingCart এর মান হিসেবে সেট করতে হবে।
    const shoppingCart = JSON.parse(storedCart) 
৩। if কন্ডিশন এর ভিতরে আবার if কন্ডিশন দিয়ে চেক করতে হবে shoppingCart অবজেক্ট এর মধ্যে id আছে কি না? যদি থাকে, তাহলে ডিলেট করতে হবে এবং সর্বশেষ localStorage.setItem() করতে হবে।
    if(id in shoppingCart){
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }

*/



