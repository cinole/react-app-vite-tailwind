import { createReducer } from '@reduxjs/toolkit'
// import {
//   fetchJobDetail,
//   fetchJobDetailSuccess,
//   fetchJobDetailFail,
// } from './action'

const initialState = {
  jobDetail: [],
  loading: false,
  error: null,
}

// const reducer = createReducer(initialState, {
//   [fetchJobDetail]: (state, action) => {
//     state.loading = true
//   },
//   [fetchJobDetailSuccess]: (state, action) => {
//     state.loading = false
//     state.jobDetail = action.payload
//   },
//   [fetchJobDetailFail]: (state, action) => {
//     state.loading = false
//     state.error = action.payload
//   },
// })
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase('fetch_job_detail', (state, action) => {
      state.loading = true
    })
    .addCase('fetch_job_detail_success', (state, action) => {
    //   state.loading = false
      state.jobDetail = action.payload
    })
    .addCase('fetch_job_detail_fail', (state, action) => {
      state.loading = false
      state.error = action.payload
    })
})

export default reducer
