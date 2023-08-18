import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { UserData } from '@/types/users'

export const tokenValidator = (request: NextRequest): UserData | never | any => {
    try {
        const token: string = request.cookies.get("token")?.value || ''
        let tokenData: UserData = jwt.verify(token, process.env.JWT_SECRET_KEY!) as UserData
        return tokenData
    } catch (error: any) {
        return error?.message;
    }
}