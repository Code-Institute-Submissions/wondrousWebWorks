# Testing & Bugs

- [Testing & Bugs](#testing--bugs)
  - [Testing](#testing)
    - [Responsiveness](#responsiveness)
      - [Desired Result](#desired-result)
      - [Steps Taken to Ensure Result](#steps-taken-to-ensure-result)
      - [Verdict](#verdict)
    - [Cross-browser Compatability](#cross-browser-compatability)
      - [Desired Result](#desired-result-1)
      - [Steps Taken to Ensure Result](#steps-taken-to-ensure-result-1)
      - [Verdict](#verdict-1)
    - [Behaviour of Shared Site Components](#behaviour-of-shared-site-components)
      - [Navbar (Navigation Bar)](#navbar-navigation-bar)
      - [Page Header and Call To Action](#page-header-and-call-to-action)
    - [Behaviour of Individual Pages](#behaviour-of-individual-pages)
      - [Home Page (index.html)](#home-page-indexhtml)
        - [About Summary](#about-summary)
        - [Skills](#skills)
        - [Projects](#projects)
        - [Qualifications](#qualifications)
        - [Experience](#experience)
      - [About Page (about.html)](#about-page-abouthtml)
      - [Projects Page (projects.html)](#projects-page-projectshtml)
      - [Project Page (project.html)](#project-page-projecthtml)
      - [Blog (blogs.html)](#blog-blogshtml)
      - [Blog Post (blog-post.html)](#blog-post-blog-posthtml)
      - [Contact (contact.html)](#contact-contacthtml)
      - [Login (login.html)](#login-loginhtml)
      - [Admin Dashboard (admin.html)](#admin-dashboard-adminhtml)
      - [Manage Skills (/admin/skills.html)](#manage-skills-adminskillshtml)
      - [Manage Projects (/admin/projects.html)](#manage-projects-adminprojectshtml)
      - [Manage Qualifications (/admin/qualifications.html)](#manage-qualifications-adminqualificationshtml)
      - [Manage Blogs (/admin/blogs.html)](#manage-blogs-adminblogshtml)
      - [Manage Experience (/admin/experience.html)](#manage-experience-adminexperiencehtml)
  - [Bugs](#bugs)
    - [Development Bugs](#development-bugs)
      - [Heroku Deployment Issue](#heroku-deployment-issue)
      - [Navigation Bar (navbar) alignment](#navigation-bar-navbar-alignment)
      - [Skills display on the landing page](#skills-display-on-the-landing-page)
      - [Non-URL values accepted as input in Projects and Blog forms](#non-url-values-accepted-as-input-in-projects-and-blog-forms)

## Testing

Manual testing was performed for this project, as form validation was used to present incorrect data being sent to the backend. All other behaviour, such as navigation, responsiveness, login and CRUD operations could also be assessed manually.

### Responsiveness

#### Desired Result

The site is displayed on any screen size without compromising legibility and eliminating screen and element overflow.

#### Steps Taken to Ensure Result

Materialize was used as a library to create wondrousWebWorks(). In particular, its grid system was used extensively to ensure responsiveness on any screen size. It proved necessary to use CSS media queries for width and height, as well as orientation to display the content as intended on mobile and tablet devices in both portrait and landscape mode.

In addition to testing using responsiveness using Chrome Developer Tools, these physical devices were also used for testing:

- Sony Xperia Xa2
- Samsung J5, Galaxy S10 Lite, Galaxy S20
- Apple iPhone XR, 11, iPad Pro
- Amazon Fire HD 7 Inch tablet
- Dell Inspiron 5490 Laptop

#### Verdict

wondrousWebWorks() adapts to all tested screen sizes and devices and displays as expected. :heavy_check_mark:

### Cross-browser Compatability

#### Desired Result

Display correctly in any browser users are likely to use, except for older versions of Internet Explorer.

#### Steps Taken to Ensure Result

A a range of browsers were used to test the site, and where I did not have access to it - such as Safari - I borrowed Apple devices to test for potential bugs.

As Firefox does not support the WebKit browser rendering engine, steps were taken to ensure an approximation of the same functionailty and styling in the Firefox browser. An exmaple of this would be custom scrollbar styling, where Firefox uses the more modern CSS scrollbar styling tool. Including this not only makes the scrollbars display correctly in Firefox, but also makes the site future proof as the WebKit spec has been abandoned by W3C (World Wide Web Consortium) and will be deprecated eventually.

Browsers tested include:

- [Chrome](https://www.google.com/chrome/) - desktop and mobile
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) - desktop and mobile
- [Opera](https://www.opera.com/computer/opera) - dekstop
- [Opera Mini](https://www.opera.com/mobile/mini) - mobile
- [DuckDuckGo](https://duckduckgo.com/app) - mobile

#### Verdict

No obvious bugs were detected in any of the tested browsers. :heavy_check_mark:

### Behaviour of Shared Site Components

#### Navbar (Navigation Bar)

- Click on navigation links to confirm correct redirection to the appropriate pages :heavy_check_mark:
- Verify correct transition of navigation links on hover :heavy_check_mark:
- Verify that the so-called **'burger'** menu icon displays on smaller screens :heavy_check_mark:
- Verify that on clicking of the **'burger** icon triggers visibility of the vertical navigation menu for smaller screens :heavy_check_mark:
- Verify that the the appropriate navigation bar is displayed for the **main** and **admin** sites respectively :heavy_check_mark:

#### Page Header and Call To Action

- Verify that page header displays at full page height on the **index.html** and **404.html** pages :heavy_check_mark:
- Verify that the page header displays at less than full page height on all other pages for the main site (excludes Admin pages) :heavy_check_mark:
- Confirm that the **Call To Action** text (name jumbotron in the HTML and CSS for this project) is displayed dynamically for each page (excludes Admin pages) :heavy_check_mark:
- Confirm that the **Call To Action** button text changes dynamically for each page (excludes Admin pages) :heavy_check_mark:
- Verify that the **Call To Action** button allows for scrolling to the desired page content on all main site pages excluding **index.html** :heavy_check_mark:
- Confirm that clicking the **Call To Action** button on the **index.html** page redirects to the Contact page :heavy_check_mark:

### Behaviour of Individual Pages

#### Home Page (index.html)

##### About Summary

- Text is rendered to resemble a tablet :heavy_check_mark:
- All colours display correctly :heavy_check_mark:
- The cursor animates as expected to resemble a terminal cursor :heavy_check_mark:

##### Skills

- All skills are displayed :heavy_check_mark:
- Three skill bars are present and animated for each skill :heavy_check_mark:
- Each of the three skill bars per skill is a different colour as expected :heavy_check_mark:
- No skill exceeds the 100% limit :heavy_check_mark:
- Each skill's **name** and **level** are displayed correctly :heavy_check_mark:
- Each skill's housing gives a 3D effect as intended :heavy_check_mark:
- Each skill's housing is circular in shape :heavy_check_mark:

##### Projects

- A maximum of **three** projects are displayed :heavy_check_mark:
- Each project card has an **image**, and that if no image is supplied, alt text it displayed :heavy_check_mark:
- Each project card has a **project title** :heavy_check_mark:
- Each project card has a clickable **icon** which opens the project's **GitHub repository** in a new tab :heavy_check_mark:
- Eeach project card has a clickable **icon** which opens the **deployed project** in a new tab :heavy_check_mark:
- Hovering over a project card **scales** that project card to be bigger, while other project cards are scaled smaller and less opaque :heavy_check_mark:

##### Qualifications

- All qualifications are listed :heavy_check_mark:
- **Hovering** over qualification name gives expected **colour transitioning effect** (lighter) :heavy_check_mark:
- **Clicking** on **qualification name** triggers the visibility of a qualification body to show additional information and set the qualification name (heading) background colour to a lighter shade of grey :heavy_check_mark:
- The qualification body contains the following components and behaviour :heavy_check_mark:
  - **Icon** and information for the **issuing Institute / Authority** are listed :heavy_check_mark:
  - **Icon** and information for the **issue date** are listed :heavy_check_mark:
  - **VIEW** and **MORE INFO** buttons are present :heavy_check_mark:
  - **Clicking** on the **VIEW** and **MORE INFO** buttons **redirects** to the relevant information in a new browser tab :heavy_check_mark:
- **Clicking** on a **qualification name** once expanded **hides** the qualification body as expected and sets the qualification name's background to the **default colour** :heavy_check_mark:

##### Experience

- All experience cards are present :heavy_check_mark:
- Each experience card shows a **tag icon** for the job title and the **job title** itself :heavy_check_mark:
- Each experiecne card shows a **calendar icon** for the job dates and the **job dates** themselves :heavy_check_mark:
- Cards scale on hover :heavy_check_mark:

#### About Page (about.html)

- **About**inforation is rendered to resemble a tablet (similar to About Summary) :heavy_check_mark:
- All **colours** display correctly :heavy_check_mark:
- The **cursor** animates as expected to resemble a **terminal cursor** :heavy_check_mark:
- The **list** and **image** display *side-by-side on bigger screens*, but *below each other on smaller screens* :heavy_check_mark:

#### Projects Page (projects.html)

- All projects are displayed :heavy_check_mark:
- Each project card has an **image**, and that if no image is supplied, alt text it displayed :heavy_check_mark:
- Each project card has the **project title** :heavy_check_mark:
- Each project card has a clickable **icon** which opens the project's **GitHub repository** in a new tab :heavy_check_mark:
- Each project card has a clickable **icon** which opens the **deployed project** in a new tab :heavy_check_mark:
- **Hovering** over a project card **scales** that project card to be bigger, while other project cards are scaled smaller and less opaque :heavy_check_mark:
- **Clicking** on a project card image or heading opens the **project.html** page with the relevant information for the specific project :heavy_check_mark:

#### Project Page (project.html)

- The correct **project image** is displayed :heavy_check_mark:
- The full **technology list** for the project is displayed :heavy_check_mark:
- **All paragraphs** for the project are displayed correctly :heavy_check_mark:
- The **project image** and **technology list** display *side-by-side o tablet devices* and *devices with bigger screens* :heavy_check_mark:
- The **project image** and **technology list** display *vertically* on *mobile devices in portrait mode* :heavy_check_mark:

#### Blog (blogs.html)

- **Cards** for **all blogs** are displayed :heavy_check_mark:
- Each card has the correct **image as background** :heavy_check_mark:
- The correct **blog title** is displayed on each card :heavy_check_mark:
- The **blog summary** is displayed on card *hover* :heavy_check_mark:
- The correct **published date** is displayed on each blog card :heavy_check_mark:
- **Clicking** on the **blog card text** opens the targeted *blog post in a new tab* :heavy_check_mark:

#### Blog Post (blog-post.html)

- The correct **image** displays for the relevant blog post :heavy_check_mark:
- The blog post's **image** displays on the **right** on *tablets and bigger screens* with text wraping around it :heavy_check_mark:
- The blog post's **image** displays **above** the blog text on *mobile devices in portrait orientation* :heavy_check_mark:
- The correct date displays for each blog post :heavy_check_mark:
- All paragraphs are displayed for each blog post :heavy_check_mark:

#### Contact (contact.html)

- The **Contact** form is loaded with *all input fields and labels rendered* :heavy_check_mark:
- Form validation functions as expected :heavy_check_mark:
  - A **valid email address** is required in the *email* input field :heavy_check_mark:
  - A **subject** is required in the *subject* input field :heavy_check_mark:
  - A **query** is required in the *query* textarea input :heavy_check_mark:

#### Login (login.html)

- The **Login** form is loaded with all input fields and labels rendered :heavy_check_mark:
- Form validation functions as expected :heavy_check_mark:
  - A **valid email address** is required in the *email* input field :heavy_check_mark: :heavy_check_mark:
  - A **password** is required in the *password* input field :heavy_check_mark:
  - The **password** input field has a type of *password* and does not display the password text on screen :heavy_check_mark:
  - With **valid** information entered, the user is logged in and *directed* to the **Admin** page :heavy_check_mark:

#### Admin Dashboard (admin.html)

- A user **must be logged** in to access the page :heavy_check_mark:
- If a user tries the access the page *without being logged in*, they are redirected to the **Login** page :heavy_check_mark:
- A *total document count* is displayed for *each database collection* (SKills, Projects, Qualifications, Blogs, Experience) :heavy_check_mark:
- The counter display housing is circular :heavy_check_mark:
- The *total document count text* for each collection has an animation that appears to *increase and decrease in brightness* :heavy_check_mark:
- Below each document counter is a **button** with the text *MANAGE* which will direct the user to the *relevant Admin page* when clicked :heavy_check_mark:

#### Manage Skills (/admin/skills.html)

- A user **must be logged** in to access the page :heavy_check_mark:
- The **ADD** button is displayed :heavy_check_mark:
- **Clicking** on the **ADD** button
  - Opens a modal with the **Skills admin form** :heavy_check_mark:
  - The input fields are empty :heavy_check_mark:
  - A **name** is **required** in the *Skill Name* input field :heavy_check_mark:
  - A **number** is **required** in the *Skill Level* input field :heavy_check_mark:
  - The *Skill Level* input has a **minimum** value of 0 and a **maximum** value of **100** :heavy_check_mark:
  - **Clicking** on the form **ADD button** creates a new document in the *skills* collection in the database :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *newly created skill* is listed with other existing skills on the *Manage Skills* page :heavy_check_mark:
- **All skills** are listed with **Edit** and **Delete** buttons for each skill :heavy_check_mark:
- **Clicking** on a skill's **Edit** button:
  - *Opens a modal* with the **Skills admin form** :heavy_check_mark:
  - The input fields are *populated with data for that particular skill* using data retrieved from the *skills* collection :heavy_check_mark:
  - The user can edit the data in the form so long as it does not violate the requirements for form validation :heavy_check_mark:
  - **Clicking** on the form **Update button** sends the form data to the backend and updates the document in the *skills* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *updated skill* is listed with other existing skills on the *Manage Skills* page :heavy_check_mark:
- **Clicking** on a skill's **Delete** button:
  - **Deletes** the skill from the *skills* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *deleted skill* is **no longer listed** with other skills retreived from the backend :heavy_check_mark:

#### Manage Projects (/admin/projects.html)

- A user **must be logged** in to access the page :heavy_check_mark:
- The **ADD** button is displayed :heavy_check_mark:
- **Clicking** on the **ADD** button
  - Opens a modal with the **Projects admin form** :heavy_check_mark:
  - The input fields are empty :heavy_check_mark:
  - A **project name** is **required** in the *Project Name* input field :heavy_check_mark:
  - A **url** is **required** in the *Project Image URL* input field :heavy_check_mark:
  - A **url** is **required** in the *Project GitHub URL* input field :heavy_check_mark:
  - A **url** is **required** in the *Project Live URL* input field :heavy_check_mark:
  - A **list of technologies** to choose from is displayed in the *Technologies* select input :heavy_check_mark:
  - **Choosing a technology** from the *Technologies* select input is **required** :heavy_check_mark:
  - At least **the first paragraph is required** for the *Project Description Paragraph* textareas :heavy_check_mark:
  - **Clicking** on the form **ADD button** creates a new document in the *portfolio* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *newly created project* is listed with other existing projects on the *Manage Projects* page :heavy_check_mark:
- **All projects** are listed with **Edit** and **Delete** buttons for each project :heavy_check_mark:
- **Clicking** on a project's **Edit** button:
  - *Opens a modal* with the **Projects admin form** :heavy_check_mark:
  - The input fields are *populated with data for that particular project* using data retrieved from the *portfolio* collection :heavy_check_mark:
  - The user can edit the data in the form so long as it does not violate the requirements for form validation :heavy_check_mark:
  - **Clicking** on the form **Update button** sends the form data to the backend and updates the document in the *projects* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *updated project* is listed with other existing projects on the *Manage Projects* page :heavy_check_mark:
- **Clicking** on a project's **Delete** button:
  - **Deletes** the project from the *portfolio* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *deleted project* is **no longer listed** with other projects retreived from the backend :heavy_check_mark:

#### Manage Qualifications (/admin/qualifications.html)

- A user **must be logged** in to access the page :heavy_check_mark:
- The **ADD** button is displayed :heavy_check_mark:
- **Clicking** on the **ADD** button
  - Opens a modal with the **Qualifications admin form** :heavy_check_mark:
  - The input fields are empty :heavy_check_mark:
  - A **qualification name** is **required** in the *Qualification Name* input field :heavy_check_mark:
  - A name is **required** for the **issuing authority** in the *Qualification Issued By* input field :heavy_check_mark:
  - A **qualification issue date** is **required** in the *Date Obtained* input field :heavy_check_mark:
  - A **url** is **required** in the *Qualification View URL* input field :heavy_check_mark:
  - A **url** is **required** in the *Qualification Info URL* input field :heavy_check_mark:
  - **Clicking** on the form **ADD button** creates a new document in the *qualifications* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *newly created qualification* is listed with other existing qualifications on the *Manage Qualifications* page :heavy_check_mark:
- **All qualifications** are listed with **Edit** and **Delete** buttons for each qualification :heavy_check_mark:
- **Clicking** on a qualification's **Edit** button:
  - *Opens a modal* with the **Qualifications admin form** :heavy_check_mark:
  - The input fields are *populated with data for that particular qualification* using data retrieved from the *qualifications* collection :heavy_check_mark:
  - The user can edit the data in the form so long as it does not violate the requirements for form validation :heavy_check_mark:
  - **Clicking** on the form **Update button** sends the form data to the backend and updates the document in the *qualifications* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *updated qualification* is listed with other existing qualifications on the *Manage Qualifications* page :heavy_check_mark:
- **Clicking** on a qualification's **Delete** button:
  - **Deletes** the qualification from the *qualifications* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *deleted qualification* is **no longer listed** with other qualifications retreived from the backend :heavy_check_mark:

#### Manage Blogs (/admin/blogs.html)

- A user **must be logged** in to access the page :heavy_check_mark:
- The **ADD** button is displayed :heavy_check_mark:
- **Clicking** on the **ADD** button
  - Opens a modal with the **Blogs admin form** :heavy_check_mark:
  - The input fields are empty :heavy_check_mark:
  - A **blog title** is **required** in the *Blog Title* input field :heavy_check_mark:
  - A **url** is **required** in the *Blog Image URL* input field :heavy_check_mark:
  - A **blog summary** is **required** in the *Blog Summary* input field :heavy_check_mark:
  - An **upload date** is **required** in the *Upload Date* input field :heavy_check_mark:
  - At least **the first paragraph is required** for the *Blog Paragraph* textareas :heavy_check_mark:
  - **Clicking** on the form **ADD button** creates a new document in the *blog_posts* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *newly created blog post* is listed with other existing blog posts on the *Manage Blogs* page :heavy_check_mark:
- **All blog posts** are listed with **Edit** and **Delete** buttons for each blog post :heavy_check_mark:
- **Clicking** on a blog post's **Edit** button:
  - *Opens a modal* with the **Blogs admin form** :heavy_check_mark:
  - The input fields are *populated with data for that particular blog post* using data retrieved from the *blog_posts* collection :heavy_check_mark:
  - The user can edit the data in the form so long as it does not violate the requirements for form validation :heavy_check_mark:
  - **Clicking** on the form **Update button** sends the form data to the backend and updates the document in the *blog_posts* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *updated blog post* is listed with other existing blog posts on the *Manage Blogs* page :heavy_check_mark:
- **Clicking** on a blog post's **Delete** button:
  - **Deletes** the blog post from the *blog_posts* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *deleted blog post* is **no longer listed** with other blog posts retreived from the *blog_posts* collection :heavy_check_mark:

#### Manage Experience (/admin/experience.html)

- A user **must be logged** in to access the page :heavy_check_mark:
- The **ADD** button is displayed :heavy_check_mark:
- **Clicking** on the **ADD** button
  - Opens a modal with the **Experience admin form** :heavy_check_mark:
  - The input fields are empty :heavy_check_mark:
  - A **job title** is **required** in the *Job Title* input field :heavy_check_mark:
  - **Job dates** are **required** in the *Job Dates* input field :heavy_check_mark:
  - **Clicking** on the form **ADD button** creates a new document in the *work_experience* collection in the database :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *newly created experience* is listed with other existing experience on the *Manage Experience* page :heavy_check_mark:
- **All experience** is listed with **Edit** and **Delete** buttons for each job :heavy_check_mark:
- **Clicking** on an experience's **Edit** button:
  - *Opens a modal* with the **Experience admin form** :heavy_check_mark:
  - The input fields are *populated with data for that particular experience* using data retrieved from the *work_experience* collection :heavy_check_mark:
  - The user can edit the data in the form so long as it does not violate the requirements for form validation :heavy_check_mark:
  - **Clicking** on the form **Update button** sends the form data to the backend and updates the document in the *work_experience* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *updated experience* is listed with other existing experience on the *Manage Experience* page :heavy_check_mark:
- **Clicking** on an experience's **Delete** button:
  - **Deletes** the experience from the *work_experience* collection :heavy_check_mark:
  - A *Success* or *Failure* message is flashed to the user *on page reload* :heavy_check_mark:
  - The *deleted experience* is **no longer listed** with other experience retreived from the backend :heavy_check_mark:

## Bugs

### Development Bugs

As with many a project, I encountered a few bugs during development which required squashing. These are listed below, along with their fixes.

#### Heroku Deployment Issue

- **Bug**

    Initially, there was great difficulty deploying the project to Heroku.  After viewing the project's Heroku log files, it was discovered that the **pkg-resources** package could not be located by Heroku for installation. This requirement was added to the **requirements.txt** file on running the command `pip3 freeze --local > requirements.txt` to create the file.

- **Fix**

    Modified the **requirements.txt** file by removing the **pkg-resources** dependancy before pushing to GitHub.

- **Verdict**

    Successfully deployed to Heroku with all dependancies installed.

#### Navigation Bar (navbar) alignment

- **Bug**

  Once I decided to stop using the Materialize navbar due to spacing issues, ran into an issue with my own custom navbar as well.  Despite setting teh navbar's display to flex and the direction to row with spacing set between, the logo and nanigation links did not display at both ends of the navbar as expected. Instead, the navigation links displayed near the center of the navbar, which was not the expected behaviour

- **Fix**

  I forgot to set the width of the wrapper containing the navigation links. A such, CSS did not enough information to affect the desired spacing as required. As a result, I set the width of both the logo wrapper and the navigation links wrapper explicitly.

- **Verdict**

  Navbar conmponents spaced as desired.

#### Skills display on the landing page

- **Bug**

  A logged-in user was able to enter a skill level of more than 100 on the Admin page. As such, the spacing and behaviour of skill bars were negatively affected and ruined the desired animation effect.

- **Fix**

  Added form validation and a maximum limit of 100 in the Skills Admin form.

- **Verdict**

  Users cannot enter a skill level of more than 100 as the form will not be submitted until all fields are validated.

#### Non-URL values accepted as input in Projects and Blog forms

- **Bug**

  A logged-in user could enter any non-URL string in input fields where a URL was expected.  As such, the desired functionality allowing a user to click on certain links to be redirected to a desired site or to load a required image from a URL was broken.

- **Fix**

  Added a **type** of **url** to all input fields in forms (Projects and Blogs) where a URL is expected.

- **Verdict**

  Users cannot submit a these forms unless URLs are proved in the input fiels with a **type** of **url**.
