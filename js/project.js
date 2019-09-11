!function () {
  fetch('./json/project.json')
    .then(response => response.json())
    .then(json => json.data.projects)
    .then(renderProject)

  fetch('./json/skill.json')
    .then(response => response.json())
    .then(json => json.data.skills)
    .then(renderSkills)


  fetch('./json/companyAndHobby.json')
    .then(response => response.json())
    .then(json => json.data.companys)
    .then(renderCompanys)

  fetch('./json/companyAndHobby.json')
    .then(response => response.json())
    .then(json => json.data.hobbys)
    .then(renderHobbys)


  // 工作经历
  function renderCompanys(lists) {
    document.querySelector('.companys').innerHTML = lists.map(list =>
      `<section class="company">
          <h3>${list.name}</h3>
          <ul>${contentLists(list.contents)}</ul>
        </section>`
    ).join('')
    function contentLists(lists) {
      return lists.map(list =>
        `<li>${list.content}</li>`
      ).join('')
    }
  }

  // 自我描述
  function renderHobbys(lists) {
    document.querySelector('.hobbys').innerHTML = lists.map(list =>
      `<ul>${contentLists(list.contents)}</ul>`
    ).join('')
    function contentLists(lists) {
      return lists.map(list =>
        `<li>${list.content}</li>`
      ).join('')
    }
  }

  // 项目及描述
  function renderProject(lists) {
    document.querySelector('.sectionBody').innerHTML = lists.map(list =>
      `<section class="project">
            <div class="project_intro">
                <header class="project_intro_header clearfix">
                    <h4 class="project_intro_header_title">${list.title}<span>（${list.Etitle}）</span></h4>
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
                <img src="${list.image}" alt="${list.imageAlt}" width="356px" height="267px">
            </div>
        </section>`
    ).join('')
    function skillLists(lists) {
      return lists.map(list =>
        `<li class="tech-tag-list_item ">${list.skill}</li>`
      ).join('')
    }
    function functionLists(lists) {
      return lists.map(list =>
        `<li>${list.function}</li>`
      ).join('')
    }
  }

  // 技能描述
  function renderSkills(lists) {
    document.querySelector('.printSkill').innerHTML = lists.map(list =>
      `<section class="skills">
            <h3>${list.title}</h3>
            <ul>${skillLists(list.skills)}</ul>
          </section>`
    ).join('')
    function skillLists(lists) {
      return lists.map(list =>
        `<li>${list.skill}</li>`
      ).join('')
    }
  }

  // 不同的技能不同的颜色
  window.onload = function itemlists() {   //window.onload，即，在页面所有的一切都加载完后才执行函数
    console.log(1111)
    let item = document.querySelectorAll('.tech-tag-list_item')
    console.log(item)
    for (let i = 0; i < item.length; i++) {
      let value = item[i].innerText
      console.log(value)
      if (value) {
        item[i].classList.add(`tech-tag-list_${value}`)
      }
    }
  }
}.call()