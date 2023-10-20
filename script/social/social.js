var dataJson = [
    {
        "link":"https://instagram.com/pawanskyb?igshid=OGQ5ZDc2ODk2ZA==/",
        "title":"Instagram",
        "icon":"./res/instagram.svg"
    },
    {
        "link":"https://github.com/Pawanravichandran",
        "title":"GitHub",
        "icon":"./res/github.svg"
    },
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
})

document.getElementById('social-links').innerHTML = `<ul>${raw_html}</ul>`;

