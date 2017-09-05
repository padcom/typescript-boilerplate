import * as $ from 'jquery'

$.fn.foo = function (options) {
  const settings = {
    ...options,
  }

  return this.each(function() {
    $(this).css({ 'background-color': 'blue' })
  })
}
