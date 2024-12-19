'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store.js'

export default function ReduxProvider({children}: any) {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  )
}