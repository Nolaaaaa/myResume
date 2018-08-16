!function() {
    fetch('/json/project.json')   
        .then(response => response.json()) 
        .then(json => json.data.projects)
        .then(renderProject)   

    function renderProject(lists) {
        document.querySelector('.section_body').innerHTML = lists.map(list => 
            `<section class="project">
            <div class="project_intro">
                <header class="project_intro_header clearfix">
                    <h4 class="project_intro_header_title">${list.title}<span>${list.Etitle}</span></h4>
                    <ul class="tech-tag-list">${skillLists(list.skills)}</ul>
                </header>
                <div class="project_intro_header_content">
                    <p>${list.describe}</p>
                    <ul class="list">${functionLists(list.functions)}</ul>
                    <p class="project_intro_links">
                        <a href="${list.preview}" target="_blank">预览地址</a>
                        <a href="${list.code}" target="_blank">源码地址</a>
                    </p>
                </div>
            </div>
            <div class="project_thumb">
                <img src="${list.image}" alt="${list.imageAlt}">
            </div>
        </section>`
        ).join('') 
        function skillLists(lists) {
            return lists.map(list => {
                `
                <li class="tech-tag-list_item ">${list.skill}</li>
                `
            }).join('') 
        }
        
        function functionLists(lists) {
            return lists.map(list => {
                `
                <li>${list.function}</li>
                `
            }).join('') 
        }
} 
}.call()