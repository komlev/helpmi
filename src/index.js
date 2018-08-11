const trace = (console.trace.bind(this)),
  print = (console.log.bind(this)),
  warn = (console.warn.bind(this)),
  error = (console.error.bind(this)),
  count = (console.count.bind(this)),
  log = logFunc => (param, ...rest) => {
    if (logFunc) logFunc(param, ...rest)
    return param
  },
  watchObject = (object, property, getFunc, setFunc) => {
    const validator = {}
    if (getFunc) {
      validator.get = (obj, prop) => {
        if (property === prop || !property) {
          getFunc(prop)
        }
        return obj[prop]
      }
    }

    if (setFunc) {
      validator.set = (obj, prop, value) => {
        if (property === prop || !property) {
          setFunc(prop, value)
        }
        obj[prop] = value
        return true
      }
    }

    return new Proxy(object, validator)
  },
  traceProp = (object, property) => {
    return watchObject(
      object,
      property,
      (prop) => {
        if (typeof prop !== 'symbol') {
          trace(`GET: ${prop}`)  
        }
      },
      (prop, value) => {
        if (typeof prop !== 'symbol') {
          trace(`SET: ${prop}`, value)
        }
      }
    )
  }

export {
  trace,
  print,
  warn,
  error,
  count,
  log,
  watchObject,
  traceProp
}
