function append (child) {
  this.appendChild(child)
}

function appendAll (node, children) {
  children.forEach(append, node)

  return node
}

function attr ([name, value]) {
  this.setAttribute(name, value)
}

function element (document, name, attributes = {}, children = []) {
  const node = document.createElement(name)

  appendAll(node, children)
  Object.entries(attributes).forEach(attr, node)

  return node
}

export default class HTML {
  constructor (document) {
    const serializer = new (document.defaultView.XMLSerializer)()

    Object.assign(this, {
      a (attributes = {}, children = []) {
        return element(document, 'a', attributes, children)
      },
      abbr (attributes = {}, children = []) {
        return element(document, 'abbr', attributes, children)
      },
      address (attributes = {}, children = []) {
        return element(document, 'address', attributes, children)
      },
      area (attributes = {}) {
        return element(document, 'area', attributes)
      },
      article (attributes = {}, children = []) {
        return element(document, 'article', attributes, children)
      },
      aside (attributes = {}, children = []) {
        return element(document, 'aside', attributes, children)
      },
      audio (attributes = {}, children = []) {
        return element(document, 'audio', attributes, children)
      },
      b (attributes = {}, children = []) {
        return element(document, 'b', attributes, children)
      },
      base (attributes = {}) {
        return element(document, 'base', attributes)
      },
      bdi (attributes = {}, children = []) {
        return element(document, 'bdi', attributes, children)
      },
      bdo (attributes = {}, children = []) {
        return element(document, 'bdo', attributes, children)
      },
      blockquote (attributes = {}, children = []) {
        return element(document, 'blockquote', attributes, children)
      },
      body (attributes = {}, children = []) {
        return element(document, 'body', attributes, children)
      },
      br (attributes = {}) {
        return element(document, 'br', attributes)
      },
      button (attributes = {}, children = []) {
        return element(document, 'button', attributes, children)
      },
      canvas (attributes = {}, children = []) {
        return element(document, 'canvas', attributes, children)
      },
      caption (attributes = {}, children = []) {
        return element(document, 'caption', attributes, children)
      },
      cite (attributes = {}, children = []) {
        return element(document, 'cite', attributes, children)
      },
      code (attributes = {}, children = []) {
        return element(document, 'code', attributes, children)
      },
      col (attributes = {}) {
        return element(document, 'col', attributes)
      },
      colgroup (attributes = {}, children = []) {
        return element(document, 'colgroup', attributes, children)
      },
      custom (name, attributes = {}, children = []) {
        return element(document, name, attributes, children)
      },
      data (attributes = {}, children = []) {
        return element(document, 'data', attributes, children)
      },
      datalist (attributes = {}, children = []) {
        return element(document, 'datalist', attributes, children)
      },
      dd (attributes = {}, children = []) {
        return element(document, 'dd', attributes, children)
      },
      del (attributes = {}, children = []) {
        return element(document, 'del', attributes, children)
      },
      details (attributes = {}, children = []) {
        return element(document, 'details', attributes, children)
      },
      dfn (attributes = {}, children = []) {
        return element(document, 'dfn', attributes, children)
      },
      dialog (attributes = {}, children = []) {
        return element(document, 'dialog', attributes, children)
      },
      div (attributes = {}, children = []) {
        return element(document, 'div', attributes, children)
      },
      dl (attributes = {}, children = []) {
        return element(document, 'dl', attributes, children)
      },
      dt (attributes = {}, children = []) {
        return element(document, 'dt', attributes, children)
      },
      em (attributes = {}, children = []) {
        return element(document, 'em', attributes, children)
      },
      embed (attributes = {}) {
        return element(document, 'embed', attributes)
      },
      fieldset (attributes = {}, children = []) {
        return element(document, 'fieldset', attributes, children)
      },
      figcaption (attributes = {}, children = []) {
        return element(document, 'figcaption', attributes, children)
      },
      figure (attributes = {}, children = []) {
        return element(document, 'figure', attributes, children)
      },
      footer (attributes = {}, children = []) {
        return element(document, 'footer', attributes, children)
      },
      form (attributes = {}, children = []) {
        return element(document, 'form', attributes, children)
      },
      fragment (children = []) {
        return appendAll(document.createDocumentFragment(), children)
      },
      h1 (attributes = {}, children = []) {
        return element(document, 'h1', attributes, children)
      },
      h2 (attributes = {}, children = []) {
        return element(document, 'h2', attributes, children)
      },
      h3 (attributes = {}, children = []) {
        return element(document, 'h3', attributes, children)
      },
      h4 (attributes = {}, children = []) {
        return element(document, 'h4', attributes, children)
      },
      h5 (attributes = {}, children = []) {
        return element(document, 'h5', attributes, children)
      },
      h6 (attributes = {}, children = []) {
        return element(document, 'h6', attributes, children)
      },
      head (attributes = {}, children = []) {
        return element(document, 'head', attributes, children)
      },
      header (attributes = {}, children = []) {
        return element(document, 'header', attributes, children)
      },
      hgroup (attributes = {}, children = []) {
        return element(document, 'hgroup', attributes, children)
      },
      hr (attributes = {}) {
        return element(document, 'hr', attributes)
      },
      html (attributes = {}, children = []) {
        return element(document, 'html', attributes, children)
      },
      i (attributes = {}, children = []) {
        return element(document, 'i', attributes, children)
      },
      iframe (attributes = {}) {
        return element(document, 'iframe', attributes)
      },
      img (attributes = {}) {
        return element(document, 'img', attributes)
      },
      input (attributes = {}) {
        return element(document, 'input', attributes)
      },
      ins (attributes = {}, children = []) {
        return element(document, 'ins', attributes, children)
      },
      kbd (attributes = {}, children = []) {
        return element(document, 'kbd', attributes, children)
      },
      label (attributes = {}, children = []) {
        return element(document, 'label', attributes, children)
      },
      legend (attributes = {}, children = []) {
        return element(document, 'legend', attributes, children)
      },
      li (attributes = {}, children = []) {
        return element(document, 'li', attributes, children)
      },
      link (attributes = {}) {
        return element(document, 'link', attributes)
      },
      main (attributes = {}, children = []) {
        return element(document, 'main', attributes, children)
      },
      map (attributes = {}, children = []) {
        return element(document, 'map', attributes, children)
      },
      mark (attributes = {}, children = []) {
        return element(document, 'mark', attributes, children)
      },
      math (attributes = {}, children = []) {
        return element(document, 'math', attributes, children)
      },
      menu (attributes = {}, children = []) {
        return element(document, 'menu', attributes, children)
      },
      meta (attributes = {}, children = []) {
        return element(document, 'meta', attributes, children)
      },
      meter (attributes = {}, children = []) {
        return element(document, 'meter', attributes, children)
      },
      nav (attributes = {}, children = []) {
        return element(document, 'nav', attributes, children)
      },
      noscript (attributes = {}, children = []) {
        return element(document, 'noscript', attributes, children)
      },
      object (attributes = {}, children = []) {
        return element(document, 'object', attributes, children)
      },
      ol (attributes = {}, children = []) {
        return element(document, 'ol', attributes, children)
      },
      optgroup (attributes = {}, children = []) {
        return element(document, 'optgroup', attributes, children)
      },
      option (attributes = {}, children = []) {
        return element(document, 'option', attributes, children)
      },
      output (attributes = {}, children = []) {
        return element(document, 'output', attributes, children)
      },
      p (attributes = {}, children = []) {
        return element(document, 'p', attributes, children)
      },
      param (attributes = {}) {
        return element(document, 'param', attributes)
      },
      parse (data) {
        const template = this.template()

        template.innerHTML = data

        return this.fragment(template.childNodes)
      },
      picture (attributes = {}, children = []) {
        return element(document, 'picture', attributes, children)
      },
      pre (attributes = {}, children = []) {
        return element(document, 'pre', attributes, children)
      },
      progress (attributes = {}, children = []) {
        return element(document, 'progress', attributes, children)
      },
      q (attributes = {}, children = []) {
        return element(document, 'q', attributes, children)
      },
      rp (attributes = {}, children = []) {
        return element(document, 'rp', attributes, children)
      },
      rt (attributes = {}, children = []) {
        return element(document, 'rt', attributes, children)
      },
      ruby (attributes = {}, children = []) {
        return element(document, 'ruby', attributes, children)
      },
      s (attributes = {}, children = []) {
        return element(document, 's', attributes, children)
      },
      samp (attributes = {}, children = []) {
        return element(document, 'samp', attributes, children)
      },
      script (attributes = {}, children = []) {
        return element(document, 'script', attributes, children)
      },
      section (attributes = {}, children = []) {
        return element(document, 'section', attributes, children)
      },
      select (attributes = {}, children = []) {
        return element(document, 'select', attributes, children)
      },
      slot (attributes = {}, children = []) {
        return element(document, 'slot', attributes, children)
      },
      small (attributes = {}, children = []) {
        return element(document, 'small', attributes, children)
      },
      source (attributes = {}) {
        return element(document, 'source', attributes)
      },
      span (attributes = {}, children = []) {
        return element(document, 'span', attributes, children)
      },
      stringify (node) {
        return serializer.serializeToString(node)
      },
      strong (attributes = {}, children = []) {
        return element(document, 'strong', attributes, children)
      },
      style (attributes = {}, children = []) {
        return element(document, 'style', attributes, children)
      },
      sub (attributes = {}, children = []) {
        return element(document, 'sub', attributes, children)
      },
      summary (attributes = {}, children = []) {
        return element(document, 'summary', attributes, children)
      },
      sup (attributes = {}, children = []) {
        return element(document, 'sup', attributes, children)
      },
      svg (attributes = {}, children = []) {
        return element(document, 'svg', attributes, children)
      },
      table (attributes = {}, children = []) {
        return element(document, 'table', attributes, children)
      },
      tbody (attributes = {}, children = []) {
        return element(document, 'tbody', attributes, children)
      },
      td (attributes = {}, children = []) {
        return element(document, 'td', attributes, children)
      },
      template (attributes = {}) {
        return element(document, 'template', attributes)
      },
      text (content) {
        return document.createTextNode(content)
      },
      textarea (attributes = {}, children = []) {
        return element(document, 'textarea', attributes, children)
      },
      tfoot (attributes = {}, children = []) {
        return element(document, 'tfoot', attributes, children)
      },
      th (attributes = {}, children = []) {
        return element(document, 'th', attributes, children)
      },
      thead (attributes = {}, children = []) {
        return element(document, 'thead', attributes, children)
      },
      time (attributes = {}, children = []) {
        return element(document, 'time', attributes, children)
      },
      title (attributes = {}, children = []) {
        return element(document, 'title', attributes, children)
      },
      tr (attributes = {}, children = []) {
        return element(document, 'tr', attributes, children)
      },
      track (attributes = {}) {
        return element(document, 'track', attributes)
      },
      u (attributes = {}, children = []) {
        return element(document, 'u', attributes, children)
      },
      ul (attributes = {}, children = []) {
        return element(document, 'ul', attributes, children)
      },
      var (attributes = {}, children = []) {
        return element(document, 'var', attributes, children)
      },
      video (attributes = {}, children = []) {
        return element(document, 'video', attributes, children)
      },
      wbr (attributes = {}) {
        return element(document, 'wbr', attributes)
      }
    })
  }
}
