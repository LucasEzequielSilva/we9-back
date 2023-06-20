import {check, validationResult } from 'express-validator'
export const validator = () => {
    const errors = validationResult(req)
}