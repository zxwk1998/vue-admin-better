import Vue from 'vue'
import store from '@/store'
import { isArray, isString } from '@/utils/validate'
import { errorLog } from '@/config'

const needErrorLog = errorLog
const checkNeed = () => {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}

// 检查是否是Chrome扩展相关错误
const isChromeExtensionError = (err) => {
  if (!err) return false

  // 错误消息是字符串
  if (typeof err.message === 'string') {
    return (
      err.message.includes('runtime.lastError') ||
      err.message.includes('message port closed') ||
      err.message.includes('The message port closed')
    )
  }

  // 错误本身是字符串
  if (typeof err === 'string') {
    return err.includes('runtime.lastError') || err.includes('message port closed') || err.includes('The message port closed')
  }

  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = (err, vm, info) => {
    // 过滤Chrome扩展相关错误
    if (isChromeExtensionError(err)) {
      return
    }

    console.error('vue-admin-better错误拦截:', err, vm, info)
    const url = window.location.href
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', { err, vm, info, url })
    })
  }
}
