# About

This is pretty much just a web app that allows you to use a less distracting version of youtube by minimizing the features
and design choices youtube uses to pull you in.

# How to setup

I have a public site hosting it [here](https://distractless.netlify.app) if your just looking to try it out.

**Otherwise if you're looking to edit/use the code for yourself follow the instructions below:**

### Install

You can install all the files you'll need by downloading the zip from this repository and unzipping the files to wherever
you'd like

*or*

You can copy the files to your own repository by using this repository as a "template".

### Start

To start the site there's two options:

#### *Local Only*

Open a terminal and navigate to the app's main folder (if not changed manually it should be "distractless").

Inside of the terminal run:

> ``npm start``

If done correctly it should show a message in the terminal with the ip to access the site on your current network.

#### *Public Access*

For the sake of simplicity im going to suggest you use [netlify](https://app.netlify.com) for this option.

**(Assuming you have the files inside your own github repository)**
On the netlify homepage select "Import project from git..."

If you haven't connected your github yet it will request you to do so, once your github is connected select the repository
you placed the site files into.

It should automatically fill in the deploy options to:

>Build Command: npm run build

>Publish Directory: build

If all goes well the site should be up and running within a minute or so!

*Side note: **If you choose to host the site publicly on your own server/computer i assume you know how to serve files 
on your own via apache for example***

# Recent Changes
*. Fixed "npm run build" not working on netlify
