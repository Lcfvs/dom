# <a name="../reference">@lcf.vs/dom</a>/<a name="reference">html.js</a>

Some utility classes, as ES6 module, to easily the DOM, even in front/back

## <a name="install">Install</a>

`npm i @lcf.vs/dom`

## <a name="usage">Usage</a>

```js
import HTML from '@lcf.vs/dom/html.js'

const html = new HTML(document)
```

## <a name="api">API</a>

### <a name="utils">Utils</a>

```js
html.fragment(children = [])
```
```js
html.stringify(node)
```
```js
html.parse(data)
```

### <a name="elements">Elements</a>

```js
html.a(attributes = {}, children = [])
```
```js
html.abbr(attributes = {}, children = [])
```
```js
html.address(attributes = {}, children = [])
```
```js
html.area(attributes = {})
```
```js
html.article(attributes = {}, children = [])
```
```js
html.aside(attributes = {}, children = [])
```
```js
html.audio(attributes = {}, children = [])
```
```js
html.b(attributes = {}, children = [])
```
```js
html.base(attributes = {})
```
```js
html.bdi(attributes = {}, children = [])
```
```js
html.bdo(attributes = {}, children = [])
```
```js
html.blockquote(attributes = {}, children = [])
```
```js
html.body(attributes = {}, children = [])
```
```js
html.br(attributes = {})
```
```js
html.button(attributes = {}, children = [])
```
```js
html.canvas(attributes = {}, children = [])
```
```js
html.caption(attributes = {}, children = [])
```
```js
html.cite(attributes = {}, children = [])
```
```js
html.code(attributes = {}, children = [])
```
```js
html.col(attributes = {})
```
```js
html.colgroup(attributes = {}, children = [])
```
```js
html.custom(name, attributes = {}, children = [])
```
```js
html.data(attributes = {}, children = [])
```
```js
html.datalist(attributes = {}, children = [])
```
```js
html.dd(attributes = {}, children = [])
```
```js
html.del(attributes = {}, children = [])
```
```js
html.details(attributes = {}, children = [])
```
```js
html.dfn(attributes = {}, children = [])
```
```js
html.dialog(attributes = {}, children = [])
```
```js
html.div(attributes = {}, children = [])
```
```js
html.dl(attributes = {}, children = [])
```
```js
html.dt(attributes = {}, children = [])
```
```js
html.em(attributes = {}, children = [])
```
```js
html.embed(attributes = {})
```
```js
html.fieldset(attributes = {}, children = [])
```
```js
html.figcaption(attributes = {}, children = [])
```
```js
html.figure(attributes = {}, children = [])
```
```js
html.footer(attributes = {}, children = [])
```
```js
html.form(attributes = {}, children = [])
```
```js
html.h1(attributes = {}, children = [])
```
```js
html.h2(attributes = {}, children = [])
```
```js
html.h3(attributes = {}, children = [])
```
```js
html.h4(attributes = {}, children = [])
```
```js
html.h5(attributes = {}, children = [])
```
```js
html.h6(attributes = {}, children = [])
```
```js
html.head(attributes = {}, children = [])
```
```js
html.header(attributes = {}, children = [])
```
```js
html.hgroup(attributes = {}, children = [])
```
```js
html.hr(attributes = {})
```
```js
html.html(attributes = {}, children = [])
```
```js
html.i(attributes = {}, children = [])
```
```js
html.iframe(attributes = {})
```
```js
html.img(attributes = {})
```
```js
html.input(attributes = {})
```
```js
html.ins(attributes = {}, children = [])
```
```js
html.kbd(attributes = {}, children = []))
```
```js
```
```js
html.label(attributes = {}, children = [])
```
```js
html.legend(attributes = {}, children = [])
```
```js
html.li(attributes = {}, children = [])
```
```js
html.link(attributes = {})
```
```js
html.main(attributes = {}, children = [])
```
```js
html.map(attributes = {}, children = [])
```
```js
html.mark(attributes = {}, children = [])
```
```js
html.math(attributes = {}, children = [])
```
```js
html.menu(attributes = {}, children = [])
```
```js
html.meta(attributes = {}, children = [])
```
```js
html.meter(attributes = {}, children = [])
```
```js
html.nav(attributes = {}, children = [])
```
```js
html.noscript(attributes = {}, children = [])
```
```js
html.object(attributes = {}, children = [])
```
```js
html.ol(attributes = {}, children = [])
```
```js
html.optgroup(attributes = {}, children = [])
```
```js
html.option(attributes = {}, children = [])
```
```js
html.output(attributes = {}, children = [])
```
```js
html.p(attributes = {}, children = [])
```
```js
html.param(attributes = {})
```
```js
html.picture(attributes = {}, children = [])
```
```js
html.pre(attributes = {}, children = [])
```
```js
html.progress(attributes = {}, children = [])
```
```js
html.q(attributes = {}, children = [])
```
```js
html.rp(attributes = {}, children = [])
```
```js
html.rt(attributes = {}, children = [])
```
```js
html.ruby(attributes = {}, children = [])
```
```js
html.s(attributes = {}, children = [])
```
```js
html.samp(attributes = {}, children = [])
```
```js
html.script(attributes = {}, children = [])
```
```js
html.section(attributes = {}, children = [])
```
```js
html.select(attributes = {}, children = [])
```
```js
html.slot(attributes = {}, children = [])
```
```js
html.small(attributes = {}, children = [])
```
```js
html.source(attributes = {})
```
```js
html.span(attributes = {}, children = [])
```
```js
html.strong(attributes = {}, children = [])
```
```js
html.style(attributes = {}, children = [])
```
```js
html.sub(attributes = {}, children = [])
```
```js
html.summary(attributes = {}, children = [])
```
```js
html.sup(attributes = {}, children = [])
```
```js
html.svg(attributes = {}, children = [])
```
```js
html.table(attributes = {}, children = [])
```
```js
html.tbody(attributes = {}, children = [])
```
```js
html.td(attributes = {}, children = [])
```
```js
html.template(attributes = {})
```
```js
html.text(content)
```
```js
html.textarea(attributes = {}, children = [])
```
```js
html.tfoot(attributes = {}, children = [])
```
```js
html.th(attributes = {}, children = [])
```
```js
html.thead(attributes = {}, children = [])
```
```js
html.time(attributes = {}, children = [])
```
```js
html.title(attributes = {}, children = [])
```
```js
html.tr(attributes = {}, children = [])
```
```js
html.track(attributes = {})
```
```js
html.u(attributes = {}, children = [])
```
```js
html.ul(attributes = {}, children = [])
```
```js
html.var(attributes = {}, children = [])
```
```js
html.video(attributes = {}, children = [])
```
```js
html.wbr(attributes = {})
```