import * as $ from 'jquery'

/**
 * Foo plugin options
 */
interface FooOptions {
  /**
   * Color value to set on the elements
   */
  color?: string
}

declare global {
  interface JQuery {
    /**
     * A foo plugin
     */
    foo (options?: FooOptions): JQuery
  }
}

$.fn.foo = function(this: JQuery, options?: FooOptions) {
  const settings: FooOptions = {
    color: 'blue',
    ...options,
  }
  return this.each(function() {
    $(this).css({ 'background-color': settings.color })
  })
}
