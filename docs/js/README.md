---
title: 手写js
---

## Promise
``` js
class MyPromise {
  constructor (exe) {
    this.value = undefined
    this.status = 'pending'
    this.successQueue = []
    this.failureQueue = []
    const resolve = () => {
      const doResolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'success'
          this.value = value
  
          while (this.successQueue.length) {
            const cb = this.successQueue.shift()
  
            cb && cb(this.value)
          }
        }
      }

      setTimeout(doResolve, 0)
    }

    const reject = () => {
      const doReject = (value) => {
        if (this.status === 'pending') {
          this.status = 'failure'
          this.value = value
  
          while (this.failureQueue.length) {
            const cb = this.failureQueue.shift()
  
            cb && cb(this.value)
          }
        }
      }

      setTimeout(doReject, 0)
    }

    exe(resolve, reject)
  }

  then (success = (value) => value, failure = (value) => value) {
    return new MyPromise((resolve, reject) => {
      const successFn = (value) => {
        try {
          const result = success(value)
          
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (err) {
          reject(err)
        }
      }

      const failureFn = (value) => {
        try {
          const result = failure(value)
          
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === 'pending') {
        this.successQueue.push(successFn)
        this.failureQueue.push(failureFn)
      } else if (this.status === 'success') {
        success(this.value)
      } else {
        failure(this.value)
      }
    })
  }

  catch () {

  }
} 

```