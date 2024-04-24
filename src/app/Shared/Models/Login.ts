export interface Login {
    email: string;
    password:string;
}


export interface LoginResponse {
    userId: number,
    fullName: string
    email: string;
    jwtToken:string;
    expiresIn: number;
}

export interface User {
    id: number
    fullName: string;
    email: string;
    password: string;
    role:string;
}

