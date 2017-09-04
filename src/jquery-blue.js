import * as $ from 'jquery'

$.fn.blue = options => {
  const settings = {
    ...options,
  }

  return $.each(item => {
    $(item).css({ 'background-color': 'blue' })
  })
}
