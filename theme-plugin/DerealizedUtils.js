const derealizedUtils = {}

const cssURL = `https://rawgit.com/P-o-u-t/Pouts-Theme/master/custom-discord-reborn/Pouts-Theme.source.css`

derealizedUtils.addCSS = () => {
    if (content == 'css') {
        let head = document.getElementsByTagName('head')[0]
        let link = document.createElement('link')
        link.type = 'text/css'
        link.rel  = 'stylesheet'
        link.href = cssURL
        head.appendChild(link)
    }
}
