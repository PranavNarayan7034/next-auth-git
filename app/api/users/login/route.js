// Login route.js 

import bcryptjs from 'bcryptjs'
import { NextResponse } from 'next/server';
import { connectDb } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';

connectDb()

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { Username, Email, Password } = reqBody;
        console.log(reqBody)
        return NextResponse.json({
            message: "User data at backend",
            success: true}, { status: 200 })
    } catch (error) {
        console.log('Login api error:'+error)
        return NextResponse.json({ error: error.message },
            { status: 500 })
    }
}