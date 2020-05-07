/*jshint esversion: 6 */
/* PORTFOLIO HOME PAGE */
const cursorRectangle = document.querySelectorAll('.cursor-rectangle');
const skillBarsWrappers = document.querySelectorAll('.skill-bars-wrapper');
const skillBars = document.querySelectorAll('.skill-bar');
const projects = document.querySelectorAll('.project-col');

/* NAVBAR */
const toggleMenuIcon = document.querySelector('.menu-toggle-icon');
const sideNav = document.querySelector('.nav-display-col');

/* ADMIN SHARED */
const buttons = document.querySelectorAll('button');

    /**
     * Animates the terminal-like cursor in the
     * About Summary section in index.html and the
     * about.html pages
     */
    function animateCursor() {
        setInterval(() => {
            cursorRectangle.forEach(cursor => {
                cursor.classList.toggle('cursor-hide');
            });

        }, 800);
    }

    /**
     * Sets a random height in percentage for
     * each skill bar and also sets an attribute
     * as either rising or falling
     */
    function randomizeInitialSkillBarHeight() {
        skillBarsWrappers.forEach(skillBarsWrapper => {
            const skillLevel = parseInt(skillBarsWrapper.getAttribute('data-skill-level'));
            const skillBars = skillBarsWrapper.children;

            for (let i = 0; i < skillBars.length; i++) {
                if (skillLevel == 0) {
                    continue;
                } else {
                    const skillBarRandomHeight = Math.floor(Math.random() * (skillLevel - 3) + 3);
                    skillBars[i].style.height = `${skillBarRandomHeight}%`;
                    const skillBarRisingOrFalling = Math.random();
                    if (skillBarRisingOrFalling < 0.5) {
                        skillBars[i].setAttribute('data-rising-falling', 'falling');
                    } else {
                        skillBars[i].setAttribute('data-rising-falling', 'rising');
                    }
                }
            }
        });
    }

    /**
     * Loops through Skills and animates each skill bar
     * so that it does not exceed the set skill level
     */
    function animateSkillBars() {
        let skillBarRising = true;
        setInterval(() => {
            skillBarsWrappers.forEach(skillBarsWrapper => {
                
                const skillLevel = parseInt(skillBarsWrapper.getAttribute('data-skill-level'));
                const skillBarsWrapperChildren = skillBarsWrapper.children;

                for (let i = 0; i < skillBarsWrapperChildren.length; i++) {
                    let currentSkillBarHeight = parseInt(skillBarsWrapperChildren[i].style.height.replace("%", ""));
                    let risingOrFalling = skillBarsWrapperChildren[i].getAttribute('data-rising-falling');
                    
                    if (risingOrFalling == 'rising') {
                        if (currentSkillBarHeight + 3 <= skillLevel) {
                            skillBarsWrapperChildren[i].style.height = `${currentSkillBarHeight + 3}%`;
                        } else {
                            skillBarsWrapperChildren[i].setAttribute('data-rising-falling', 'falling');
                        }
                    } else if (risingOrFalling == 'falling') {
                        if ((currentSkillBarHeight - 3) >= (skillLevel / 1.5)) {
                            skillBarsWrapperChildren[i].style.height = `${currentSkillBarHeight - 3}%`;
                        } else {
                            skillBarsWrapperChildren[i].setAttribute('data-rising-falling', 'rising');
                        }
                    }
                }
            });
        }, 40);
    }

    /**
     * Upon hovering over a project,
     * enlarge the project card whilst
     * shrinking and increasing the opacity
     * of other projects
     */
    function scaleProject() {
        projects.forEach(project => {
            project.classList.add('project-scale-smaller-and-opage');
        });
        this.classList.remove('project-scale-smaller-and-opage');
        this.classList.add('project-scale-bigger');
    }

    /**
     * Upon the mouse leaving a project,
     * restore project card to normal size
     * and opacity
     */
    function restoreProjectCardSize() {
        projects.forEach(project => {
            project.classList.remove('project-scale-smaller-and-opage');
            project.classList.remove('project-scale-bigger');
        });
    }

    /**
     * Toggles the side nav visibility on smaller screens
     */
    function toggleSideNav() {
        this.classList.toggle('menu-toggle-icon-expand');
        sideNav.classList.toggle('nav-slide');
    }

    /**
     * Redirects to a given Admin URL based on the redirect parameter
     * @param {string} redirect 
     */
    function reloadTargetURL(redirect) {
        window.location.replace(`${window.origin}/admin/${redirect}`);
    }

    /**
     * Flashes a success or failure message for CRUD operations on relevant Admin screens
     * @param {string} targetDocument - skills/projects/qualifications/blogs/experience
     * @param {string} successOrFailure - success or failure of CRUD operation
     * @param {string} whichCrudOperation - added, updated, deleted 
     */
    function flashAlert(targetDocument, successOrFailure, whichCrudOperation) {
        let targetElement;
        let redirect;
        switch (targetDocument) {
            case 'skills':
                targetElement = skillsAlert;
                redirect = 'skills';
                break;
            case 'projects':
                targetElement = projectsAlert;
                redirect = 'projects';
                break;
            case 'qualifications':
                targetElement = qualificationsAlert;
                redirect = 'qualifications';
                break;
            case 'blogs':
                targetElement = blogAlert;
                redirect = 'blogs';
                break;
            case 'experience':
                targetElement = experienceAlert;
                redirect = 'experience';
                break;
            default: console.log('Failed to set target document');
        }

        if (successOrFailure === "success") {
            targetElement.classList.add('alert-success');
            targetElement.children[0].innerText = `Document successfully ${whichCrudOperation}`;
        } else if (successOrFailure === "failure") {
            targetElement.classList.add('alert-failure');
            targetElement.children[0].innerText = `Document failed to be ${whichCrudOperation}`;
        }
        
        setTimeout(() => {
            targetElement.style.display = 'none';
            reloadTargetURL(redirect); 
        }, 1500);

        targetElement.style.display = 'block';
    }

    /**
     * Reset any form to its original empty state
     * @param {string} formTarget 
     */
    function resetForm(formTarget) {
        let formInputElements;
        let formLabels;
        changeFormButton('add', formTarget);

        switch (formTarget) {
            case 'skills':
                formLabels = skillFormLabels;
                skillFormInputs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                });
                break;
            case 'projects':
                formLabels = projectFormLabels;
                projectFormInputs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                });
                projectDescriptionParagraphs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                });
                break;
            case 'qualifications':
                formLabels = qualificationFormLabels;
                qualificationFormInputs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                });
                break;
            case 'blogs':
                formLabels = blogFormLabels;
                blogFormInputs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                });
                blogParagraphs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                })
                break;
            case 'experience':
                formLabels = experienceFormLabels;
                experienceFormInputs.forEach(input => {
                    input.value = null;
                    input.classList.remove('valid');
                });
                break;
            default: console.log('Failed to reset form');
        }

        Array.from(formLabels).forEach(label => {
            label.classList.remove('active');
        });
    }

    /**
     * Changes the button classes and text for any admin form
     * @param {string} type - add/update
     * @param {string} formTarget - skills/projects/qualifications.blogs/experience
     */
    function changeFormButton(type, formTarget) {
        let formTargetButton;
        let formTargetClass = formTarget;
        switch (formTarget) {
            case 'skills': 
                formTarget = skillFormSubmitButton;
                formTargetButton = skillFormSubmitButtonText;
                break;
            case 'projects':
                formTarget = projectFormSubmitButton;
                formTargetButton = projectFormSubmitButtonText;
                break;
            case 'qualifications':
                formTarget = qualificationFormSubmitButton;
                formTargetButton = qualificationFormSubmitButtonText;
                break;
            case 'blogs':
                formTarget = blogFormSubmitButton;
                formTargetButton = blogFormSubmitButtonText;
                break;
            case 'experience':
                formTarget = experienceFormSubmitButton;
                formTargetButton = experienceFormSubmitButtonText;
                break;
            default: formTarget = formTarget; 
        }

        if (type === 'add') {
            formTarget.classList.remove(`${formTargetClass}-form-btn-update`);
            formTarget.classList.add(`${formTargetClass}-form-btn-add`);
            formTargetButton.innerText = 'Add';
        } else if (type === 'update') {
            formTarget.classList.remove(`${formTargetClass}-form-btn-add`);
            formTarget.classList.add(`${formTargetClass}-form-btn-update`);
            formTargetButton.innerText = 'Update';
        }
    }

    /**
     * 
     * @param {string} urlTarget - skills/projects/qualifications/blogs/experience
     * @param {string} addOrUpdate - states whether a document is being added or updated (add/update)
     * @param {Object} requestBody - the request body
     * @param {string} docId - the document Id
     */
    function sendData(urlTarget, addOrUpdate, requestBody, docId = '1') {
        let urlString;
        let requestMethod;
        let flashAction;
        if (addOrUpdate === 'add') {
            urlString = `${window.origin}/admin/${urlTarget}/add`;
            requestMethod = 'POST';
            flashAction = 'added';
        } else if (addOrUpdate === 'update') {
            urlString = `${window.origin}/admin/${urlTarget}/update/${docId}`;
            requestMethod = 'PUT';
            flashAction = 'updated';
        }

        fetch(urlString, {
            method: requestMethod,
            credentials: 'include',
            body: JSON.stringify(requestBody),
            cache: 'no-cache',
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then(response => {
            if (response.status !== 200) {
                console.log(`Response status not 200: ${response.status}`);
                flashAlert(urlTarget, 'failure', flashAction);
                return;
            }
            response.json().then(data => {
                console.log(data);
                flashAlert(urlTarget, 'success', flashAction);
            });
        });   
    }

    /**
     * POSTs Skill form data to backend
     */
    function addSkillData() {
        const skillEntry = {
            skill_name: skillName.value,
            skill_level: skillLevel.value
        };

        sendData('skills', 'add', skillEntry);
    }

    /**
     * POSTs Project form data to backend
     */
    function addProjectData() {
        const projectTechnologiesValues = M.FormSelect.getInstance(projectTechnologies);
        const projectDescription = Array.from(projectDescriptionParagraphs).map(paragraph => paragraph.value);
        const projectEntry = {
            project_name: projectName.value,
            project_img_url: projectImgUrl.value,
            project_github_url: projectGithubUrl.value,
            project_deployed_url: projectDeployedUrl.value,
            project_technologies: projectTechnologiesValues.getSelectedValues(),
            project_description: projectDescription
        };

        sendData('projects', 'add', projectEntry);
    }

    /**
     * POSTs Qualification form data to backend
     */
    function addQualificationData() {
        const qualificationEntry = {
            qualification_name: qualificationName.value,
            qualification_from: qualificationFrom.value,
            qualification_issue_date: qualificationIssueDate.value,
            qualification_view_url: qualificationViewUrl.value,
            qualification_info_url: qualificationInfoUrl.value
        };

        sendData('qualifications', 'add', qualificationEntry);
    }

    /**
     * POSTs Blog Post form data to backend
     */
    function addBlogPostData() {
        const blogPostParagraphs = [];
        blogParagraphs.forEach(paragraph => {
            blogPostParagraphs.push(paragraph.value);
        });

        const blogPost = {
            blog_title: blogTitle.value,
            blog_img_url: blogImgUrl.value,
            blog_summary: blogSummary.value,
            blog_date: blogDate.value,
            blog_body: blogPostParagraphs
        };

        sendData('blogs', 'add', blogPost);
    }

    /**
     * POSTs Experience form data to backend
     */
    function addExperienceData() {
        const experienceEntry = {
            job_title: experienceJobTitle.value,
            job_dates: experienceJobDates.value
        };

        sendData('experience', 'add', experienceEntry);
    }

    /**
     * Fetches a specific Skill's data and populates 
     * the Skills form fields with it
     */
    function getSkillData() {
        dataTarget = this.getAttribute('data-id');
        skillFormDocId.setAttribute('data-id', dataTarget);
        changeFormButton('update', 'skills');
        
        fetch(`${window.origin}/admin/skills/update/${dataTarget}`)
        .then(response => {
            response.json()
            .then(data => {
                skillName.value = data.skill_name;
                skillLevel.value = data.skill_level;
            });
            skillModalInstance.open();
            Array.from(skillFormLabels).forEach(label => {
                label.classList.add('active');
            });
        });
    }

    /**
     * Fetches a specific Project's data and populates 
     * the Projects form fields with it
     */
    function getProjectData() {
        dataTarget = this.getAttribute('data-id');
        projectFormDocId.setAttribute('data-id', dataTarget);
        changeFormButton('update', 'projects');
        
        fetch(`${window.origin}/admin/projects/update/${dataTarget}`)
        .then(response => {
            response.json()
            .then(data => {
                projectName.value = data.project_name;
                projectImgUrl.value = data.project_img_url;
                projectGithubUrl.value = data.project_github_url;
                projectDeployedUrl.value = data.project_deployed_url;
                projectTechnologiesSelectOptions.forEach(selectOption => {
                    if (data.project_technologies.includes(selectOption.getAttribute('value'))) {
                        selectOption.setAttribute('selected', "");
                    }
                });
                for (let i = 0; i < projectDescriptionParagraphs.length; i++) {
                    projectDescriptionParagraphs[i].value = data.project_description[i];
                }
            });
            projectModalInstance.open();
            Array.from(projectFormLabels).forEach(label => {
                label.classList.add('active');
            });
        });
    }

    /**
     * Fetches a specific Qualification's data and populates 
     * the Qualifications form fields with it
     */
    function getQualificationData() {
        dataTarget = this.getAttribute('data-id');
        qualificationFormDocId.setAttribute('data-id', dataTarget);
        changeFormButton('update', 'qualifications');
        
        fetch(`${window.origin}/admin/qualifications/update/${dataTarget}`)
        .then(response => {
            response.json()
            .then(data => {
                qualificationName.value = data.qualification_name;
                qualificationFrom.value = data.qualification_from;
                qualificationIssueDate.value = data.qualification_issue_date;
                qualificationViewUrl.value = data.qualification_view_url;
                qualificationInfoUrl.value = data.qualification_info_url;
            });
            qualificationModalInstance.open();
            Array.from(qualificationFormLabels).forEach(label => {
                label.classList.add('active');
            });
        });
    }

    /**
     * Fetches a specific Blog Post's data and populates 
     * the Blogs form fields with it
     */
    function getBlogPostData() {
        dataTarget = this.getAttribute('data-id');
        blogFormDocId.setAttribute('data-id', dataTarget);
        changeFormButton('update', 'blogs');
        
        fetch(`${window.origin}/admin/blogs/update/${dataTarget}`)
        .then(response => {
            response.json()
            .then(data => {
                blogTitle.value = data.blog_title;
                blogImgUrl.value = data.blog_img_url;
                blogSummary.value = data.blog_summary;
                blogDate.value = data.blog_date;

                for (i = 0; i < blogParagraphs.length; i++) {
                    blogParagraphs[i].value = data.blog_body[i];
                }
            });
            blogModalInstance.open();
            Array.from(blogFormLabels).forEach(label => {
                label.classList.add('active');
            });
        });
    }

    /**
     * Fetches specific Experience data and populates 
     * the Experience form fields with it
     */
    function getExperienceData() {
        dataTarget = this.getAttribute('data-id');
        experienceFormDocId.setAttribute('data-id', dataTarget);
        changeFormButton('update', 'experience');
        
        fetch(`${window.origin}/admin/experience/update/${dataTarget}`)
        .then(response => {
            response.json()
            .then(data => {
                experienceJobTitle.value = data.job_title;
                experienceJobDates.value = data.job_dates;
            });
            experienceModalInstance.open();
            Array.from(experienceFormLabels).forEach(label => {
                label.classList.add('active');
            });
        });
    }

    /**
     * Gets Skills form data and PUTs it to the backend. 
     */
    function updateSkillData() {
        dataTarget = skillFormDocId.getAttribute('data-id');
        const skillEntry = {
            skill_name: skillName.value,
            skill_level: skillLevel.value
        };

        sendData('skills', 'update', skillEntry, dataTarget);
    }

    /**
     * Gets Projects form data and PUTs it to the backend. 
     */
    function updateProjectData() {
        dataTarget = projectFormDocId.getAttribute('data-id');
        const projectTechnologiesValues = M.FormSelect.getInstance(projectTechnologies);
        const projectDescription = [];
        projectDescriptionParagraphs.forEach(paragraph => {
            projectDescription.push(paragraph.value);
        });

        const projectEntry = {
            project_name: projectName.value,
            project_img_url: projectImgUrl.value,
            project_github_url: projectGithubUrl.value,
            project_deployed_url: projectDeployedUrl.value,
            project_technologies: projectTechnologiesValues.getSelectedValues(),
            project_description: projectDescription
        };

        sendData('projects', 'update', projectEntry, dataTarget);
    }

    /**
     * Gets Qualifications form data and PUTs it to the backend. 
     */
    function updateQualificationData() {
        dataTarget = qualificationFormDocId.getAttribute('data-id');
        const qualificationEntry = {
            qualification_name: qualificationName.value,
            qualification_from: qualificationFrom.value,
            qualification_issue_date: qualificationIssueDate.value,
            qualification_view_url: qualificationViewUrl.value,
            qualification_info_url: qualificationInfoUrl.value
        };

        sendData('qualifications', 'update', qualificationEntry, dataTarget);
    }

    /**
     * Gets Blogs form data and PUTs it to the backend. 
     */
    function updateBlogPostData() {
        dataTarget = blogFormDocId.getAttribute('data-id');
        const blogPostParagraphs = [];
        blogParagraphs.forEach(paragraph => {
            blogPostParagraphs.push(paragraph.value);
        });

        const blogPost = {
            blog_title: blogTitle.value,
            blog_img_url: blogImgUrl.value,
            blog_summary: blogSummary.value,
            blog_date: blogDate.value,
            blog_body: blogPostParagraphs
        };

        sendData('blogs', 'update', blogPost, dataTarget);
    }

    /**
     * Gets Experience form data and PUTs it to the backend. 
     */
    function updateExperienceData() {
        dataTarget = experienceFormDocId.getAttribute('data-id');
        const experienceEntry = {
            job_title: experienceJobTitle.value,
            job_dates: experienceJobDates.value
        };

        sendData('experience', 'update', experienceEntry, dataTarget);
    }


    /**
     * Deletes a document by ID by sending a DELETE request to the backend
     * @param {HTMLElement} target - the Delete button which was clicked on 
     */
    function deleteDocument(target) {
        const dataTarget = target.getAttribute('data-id');
        let redirect;

        if (target.classList.contains('delete-skill-btn')) {
            redirect = 'skills';
        } else if (target.classList.contains('delete-project-btn')) {
            redirect = 'projects';
        } else if (target.classList.contains('delete-qualification-btn')) {
            redirect = 'qualifications';
        } else if (target.classList.contains('delete-blog-post-btn')) {
            redirect = 'blogs';
        } else if (target.classList.contains('delete-experience-btn')) {
            redirect = 'experience';
        }

        fetch(`${window.origin}/admin/${redirect}/delete/${dataTarget}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: new Headers()
        })
        .then(response => {
            if (response.status !== 200) {
                console.log(`Response status not 200: ${response.status}`);
                flashAlert(redirect, 'failure', 'deleted');
                return;
            }

            response.json().then(data => {
                console.log(data);
                flashAlert(redirect, 'success', 'deleted');
            });
        });
    }

    /**
     * Resets and toggles any of the Admin forms
     * @param {string} formTarget - skills/projects/qualifications/blogs/experience
     */
    function toggleAddModal(formTarget) {
        changeFormButton('add', formTarget);
        resetForm(formTarget);
        setTimeout(() => {
            switch (formTarget) {
                case 'skills':
                    skillModalInstance.open();
                    break;
                case 'projects':
                    projectModalInstance.open();
                    break;
                case 'qualifications':
                    qualificationModalInstance.open();
                    break;
                case 'blogs':
                    blogModalInstance.open();
                    break;
                case 'experience':
                    experienceModalInstance.open();
                    break;
                default: console.log('Failed to open modal.');
            }     
        }, 400); 
    }

    /**
     * Calls either an Add op Update function for all Admin forms
     * @param {HTMLElement} target - The form submit button which was clicked
     */
    function addOrUpdateFormData(target) {
        if (target.classList.contains('skills-form-btn-add')) {
            addSkillData();
        } else if (target.classList.contains('skills-form-btn-update')) {
            updateSkillData();
        } else if (target.classList.contains('projects-form-btn-add')) {
            addProjectData();
        } else if (target.classList.contains('projects-form-btn-update')) {
            updateProjectData();
        } else if (target.classList.contains('qualifications-form-btn-add')) {
            addQualificationData();
        } else if (target.classList.contains('qualifications-form-btn-update')) {
            updateQualificationData();
        } else if (target.classList.contains('blogs-form-btn-add')) {
            addBlogPostData();
        } else if (target.classList.contains('blogs-form-btn-update')) {
            updateBlogPostData();
        } else if (target.classList.contains('experience-form-btn-add')) {
            addExperienceData();
        } else if (target.classList.contains('experience-form-btn-update')) {
            updateExperienceData();
        }
    }

    /* EVENT LISTENERS */
    Array.from(projects).forEach(project => {
        project.addEventListener("mouseover", scaleProject);
        project.addEventListener("mouseout", restoreProjectCardSize);
      });

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
        });
    });

    toggleMenuIcon.addEventListener('click', toggleSideNav);

    /* INITIALIZE MATERIALIZE COMPONENTS */
    const selectElems = document.querySelectorAll('select');
    const selectInstances = M.FormSelect.init(selectElems);

    const collapsibleElems = document.querySelectorAll('.collapsible');
    const collapsibleInstances = M.Collapsible.init(collapsibleElems, {
        onOpenStart: el => {
            el.querySelector('.custom-collapsible-header').classList.add('custom-collapsible-header-hover');
            el.querySelector('.custom-collapsible-header i').style.transform = 'scaleY(-1)';
        },
        onCloseStart: el => {
            el.querySelector('.custom-collapsible-header').classList.remove('custom-collapsible-header-hover');
            el.querySelector('.custom-collapsible-header i').style.transform = 'scaleY(1)';
        }
    });

    /* FUNCTIONS CALLED ON PAGE LOAD */
    animateCursor();
    randomizeInitialSkillBarHeight();
    animateSkillBars();