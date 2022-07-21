export function debounce<T extends Function>(fn: T, delay = 500) {
  let timer: number | undefined

  function _debounce(this: unknown, ...args: unknown[]) {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer)
      }

      timer = window.setTimeout(async () => {
        try {
          const res = await fn.apply(this, args)
          return resolve(res)
        } catch (e) {
          return reject(e)
        }
      }, delay)
    })
  }

  _debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer)
      timer = undefined
      console.warn('debounce cancel')
    }
  }

  return _debounce
}
