// https://github.com/casualwriter/powerpage-md-document
const parseTag = function (html) {
  return html.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export const md = (text) => {
  const parse = (str) => {
    return str
      .replace(/^##### (.*?)\s*#*$/gm, '<h5>$1</h5>')
      .replace(/^#### (.*?)\s*#*$/gm, '<h4>$1</h4>')
      .replace(/^### (.*?)\s*#*$/gm, '<h3>$1</h3>')
      .replace(/^## (.*?)\s*#*$/gm, '<h2>$1</h2>')
      .replace(/^# (.*?)\s*#*$/gm, '<h1>$1</h1>')
      .replace(/^<h(\d)>(.*?)\s*{(.*)}\s*<\/h\d>$/gm, '<h$1 id="$3">$2</h$1>')
      .replace(/^-{3,}|^_{3,}|^\*{3,}/gm, '<hr/>')
      .replace(/``(.*?)``/gm, function (m, p) {
        return '<code>' + parseTag(p).replace(/`/g, '&#96;') + '</code>'
      })
      .replace(/`(.*?)`/gm, '<code>$1</code>')
      .replace(
        /^>> (.*$)/gm,
        '<blockquote><blockquote>$1</blockquote></blockquote>',
      )
      .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
      .replace(/<\/blockquote>\n<blockquote>/g, '\n<br>')
      .replace(/<\/blockquote>\n<br><blockquote>/g, '\n<br>')
      .replace(/!\[(.*?)]\((.*?) "(.*?)"\)/gm, '<img alt="$1" src="$2" $3 />')
      .replace(/!\[(.*?)]\((.*?)\)/gm, '<img alt="$1" src="$2" />')
      .replace(/\[(.*?)]\((.*?) "new"\)/gm, '<a href="$2" target=_new>$1</a>')
      .replace(/\[(.*?)]\((.*?) "(.*?)"\)/gm, '<a href="$2" title="$3">$1</a>')
      .replace(/<http(.*?)>/gm, '<a href="http$1">http$1</a>')
      .replace(/\[(.*?)]\(\)/gm, '<a href="$1">$1</a>')
      .replace(/\[(.*?)]\((.*?)\)/gm, '<a href="$2">$1</a>')
      .replace(/^[*|+-][ |.](.*)/gm, '<ul><li>$1</li></ul>')
      .replace(/<\/ul>\n<ul>/g, '\n')
      .replace(/^\d[ |.](.*)/gm, '<ol><li>$1</li></ol>')
      .replace(/<\/ol>\n<ol>/g, '\n')
      .replace(/\*\*\*(.*)\*\*\*/gm, '<b><em>$1</em></b>')
      .replace(/\*\*(.*)\*\*/gm, '<b>$1</b>')
      .replace(/\*([\w ]*)\*/gm, '<em>$1</em>')
      .replace(/___(.*)___/gm, '<b><em>$1</em></b>')
      .replace(/__(.*)__/gm, '<u>$1</u>')
      .replace(/_([\w ]*)_/gm, '<em>$1</em>')
      .replace(/~~(.*)~~/gm, '<del>$1</del>')
      .replace(/\^\^(.*)\^\^/gm, '<ins>$1</ins>')
      .replace(/ {2}\n/g, '\n<br/>')
      .replace(/\n\s*\n/g, '\n<p>\n')
      .replace(/^ {4,10}(.*)/gm, function (m, p) {
        return '<pre><code>' + parseTag(p) + '</code></pre>'
      })
      .replace(/^\t(.*)/gm, function (m, p) {
        return '<pre><code>' + parseTag(p) + '</code></pre>'
      })
      .replace(/<\/code><\/pre>\n<pre><code>/g, '\n')
      .replace(/\\([`_~*+\-.^\\<>()\[\]])/gm, '$1')
  }

  return parse(text)
}
