//start

function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || '';
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

var result = `/*
 * 案例：
 * 以动画的形式显示代码
 */
* {
  transition: all 1s;
}
html {
  background: #dedede;
  font-size: 16px;
}
#code {
  padding: 15px;
}
/* 给代码添加高亮 */
.token.property {
    color: #905;
}
.token.selector {
    color: #690;
}

#code {
    height: 100vh;
    overflow: hidden;
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
`

var result2 = `
#paper {
    padding: 20px;
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#paper > .content {
    background: #fff;
    width: 100%;
    height: 100%;
    box-shadow: 2px 4px 15px 0px rgba(0,0,0,0.75);
}
    `

var md = `
    # 标题
    出生日期：xxx年 xxx月 xxx日
    毕业院校：xxx
    应聘岗位：xxx
`
writeCode('', result, ()=>{
    createPaper(()=>{
        writeCode(result, result2, ()=>{
            writeMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

