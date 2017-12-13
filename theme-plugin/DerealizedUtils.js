let derealized = {}

const cssURL = `https://rawgit.com/P-o-u-t/Pouts-Theme/master/custom-discord-reborn/Pouts-Theme.source.css`

derealized.start = () => {
    addCSS()
}
derealized.end = () => {
    removeCSS()
}

let addCSS = () => {
    let head = document.getElementsByTagName('head')[0]
    let link = document.createElement('link')
    link.type = 'text/css'
    link.rel  = 'stylesheet'
    link.href = cssURL
    head.appendChild(link)
}
let removeCSS = () => {
    let cssLink = document.querySelectorAll(`link[href='${cssURL}']`)[0]
    head.removeChild(cssLink)
}
