'use strict'

module.exports = function makeIterator (arr) {
  arr.loopIndex = 0

  arr.current = function () {
    if (this.loopIndex < 0) this.loopIndex = this.length - 1
    if (this.loopIndex >= this.length) this.loopIndex = 0
    return arr[ this.loopIndex ]
  }

  arr.next = function () {
    this.loopIndex++
    return this.current()
  }

  arr.prev = function () {
    this.loopIndex--
    return this.current()
  }

  arr.hasNext = function () {
    return !(this.loopIndex === (this.length - 1))
  }
}
