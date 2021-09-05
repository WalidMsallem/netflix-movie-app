// import { pushNotification } from './asideMessage'
import {
  // NOTIFICATION_TYPES,
  FAILURE,
  // GET,
} from './constants'
const isFailure = (action: any) => {
  return action.type.slice(-FAILURE.length) === FAILURE
}
// const isGet = (e) => e.config.method === GET

export const errorsExtraction = (errors: any) => {
  // const arrayErrors = errors.map((e) => ({
  //   message: e.message,
  //   path: e.path[0],
  // }))
  const obj = {}

  // arrayErrors.forEach((element: { path: string | number }) => {
  //   obj[element.path] = element
  // })
  return obj
}

const error400And424Handling = (store: object, next: any, action: any) => {
  if (action.e && isFailure(action)) {
    if (action.e.response.status === 400) {
      const objectErrors = errorsExtraction(
        action.e.response.data.error.detailedInfo,
      )

      next({ ...action, objectErrors })
      //   next({ ...action })
      return
    }
  }
  next(action)
}

const error401Or403Handling = (store: object, next: any, action: any) => {
  if (action.e && isFailure(action)) {
    if (
      (action.e.response &&
        action.e.response.status &&
        action.e.response.status === 403) ||
      action.e.response.status === 401
    ) {
      if (action.e.response.data.error.errorKey === 'client.body.auth') {
        // pushNotification(
        //   NOTIFICATION_TYPES.error,
        //   'PLEASE COPY A NEW TOKEN ON => src/config/token',
        // )
      }
      const arrayErrors = [action.e.response.data.error.errorKey]
      next({ ...action, arrayErrors })
      return
      // }
    }
  }

  next(action)
}

const errorsHandling = (store: object, next: any, action: any) => {
  if (action.e && action.e.response && isFailure(action)) {
    // eslint-disable-next-line default-case
    switch (action.e.response.status) {
      case 424:
      case 400:
        error400And424Handling(store, next, action)
        break
      case 403:
      case 401:
        error401Or403Handling(store, next, action)
        break

      case 500:
        error400And424Handling(store, next, action)
        break
    }
  } else {
    next(action)
  }
}

// export default [errorsHandling, clearErrors]
const middlewares = [errorsHandling]
export default middlewares
