import { createAction } from '@reduxjs/toolkit'

export const fetchJobDetail = createAction('fetch_job_detail')
export const fetchJobDetailSuccess = createAction('fetch_job_detail_success')
export const fetchJobDetailFail = createAction('fetch_job_detail_fail')