var yo = require('yo-yo')
var csjs = require('csjs-inject')
var StaticAnalysis = require('../staticanalysis/staticAnalysisView')

var EventManager = require('../../lib/events')

class AnalysisTab {

  constructor (registry) {
    this.event = new EventManager()
    this.registry = registry
  }
<<<<<<< HEAD
  profile () {
    return {
      name: 'solidity static analysis',
      methods: [],
      events: [],
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjA0OCIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMjA0OCAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMDQ4IDE1MzZ2MTI4aC0yMDQ4di0xNTM2aDEyOHYxNDA4aDE5MjB6bS0xMjgtMTI0OHY0MzVxMCAyMS0xOS41IDI5LjV0LTM1LjUtNy41bC0xMjEtMTIxLTYzMyA2MzNxLTEwIDEwLTIzIDEwdC0yMy0xMGwtMjMzLTIzMy00MTYgNDE2LTE5Mi0xOTIgNTg1LTU4NXExMC0xMCAyMy0xMHQyMyAxMGwyMzMgMjMzIDQ2NC00NjQtMTIxLTEyMXEtMTYtMTYtNy41LTM1LjV0MjkuNS0xOS41aDQzNXExNCAwIDIzIDl0OSAyM3oiLz48L3N2Zz4=',
      description: ' - '
    }
  }
=======

>>>>>>> 2b6206e1... refactor analysis tab
  render () {
    var staticanalysis = new StaticAnalysis()

    staticanalysis.event.register('staticAnaysisWarning', (count) => {
      if (count <= 0) return
      const msg = `Static Analysis raised ${count} warning(s) that requires your attention. Check Solidity Static Analysis Module for more information.`
      const settings = { type: 'staticAnalysisWarning', useSpan: true }
      this.event.trigger('newStaticAnaysisWarningMessage', [msg, settings])
    })

    this.registry.put({api: staticanalysis, name: 'staticanalysis'})
    if (this.el) return this.el
    this.el = yo`
      <div class="${css.analysisTabView} "id="staticanalysisView">${staticanalysis.render()}</div>`

    return this.el
  }
}
const css = csjs`
  .analysisTabView {
    padding: 2%;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
  }
`

module.exports = AnalysisTab
