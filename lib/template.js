module.exports = {
    HTML: function (title, list, body, control) {
        return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
    },
    list: function (topics) {
        var list = '<ul>';
        var i = 0;
        while (i < topics.length) {
            list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
            i = i + 1;
        }
        list = list + '</ul>';
        return list;
    },
    authorSelect: function (authors, author_id) {
        var tag = '';
        for(let i = 0; i < authors.length; i++) {
            var selected = '';// 얘를 for문 위에 선언해버리면 어떤 option이든 마지막숫자인 i=2가 대입된다.
            //그로 인해 update_process화면 진입하는 순간 어떤 리스트를 클릭하든 option name값이 'teaho'가 되어버린다.
            //그걸 막기위해서 for문이 새로 돌때마다 새로 변수를 선언해주는 것같다. 
            // ###### scope공부 다시 하기. ######
            if(authors[i].id === author_id) {
                selected = ' selected';
                console.log(authors[i].id);
                console.log(author_id);
                console.log(authors);
            }
            tag += 
                `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`
            
        }
        return `
            <select name="author">
                ${tag}	
            </select>
        `
    }

}