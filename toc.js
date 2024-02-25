"use strict";

const textToHref = function(text) {
  return text.replace(/\s+/g, "")
}

const getIndentation = function(tagName) {
  switch (Number(tagName[1])) {
    case 1:
      return ""
    case 2:
      return "\u2003"
    case 3:
      return "\u2003\u2003"
    case 4:
      return "\u2003\u2003\u2003"
    case 5:
      return "\u2003\u2003\u2003\u2003"
  }
}

const addHeadings = function(headings, parent) {
  for (var i = 0; i < headings.length; ++i) {
    const h = headings[i]
    const span = document.createElement("span")
    span.appendChild(document.createTextNode(getIndentation(h.tagName)))

    const link = document.createElement("a")
    link.name = textToHref(h.textContent)
    h.parentNode.insertBefore(link, h)

    const a = document.createElement("a")
    a.appendChild(document.createTextNode(h.textContent))
    a.href = "#" + link.name
    span.appendChild(a)

    toc.appendChild(span)
    toc.appendChild(document.createElement("br"))
  }
}

const writeTocInto = function(element) {
  addHeadings(document.querySelectorAll("H2, H3, H4"), element)
}

try {
  document.addEventListener("load", writeTocInto(toc))
} catch (e) { }
