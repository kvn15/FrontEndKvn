export interface WebApiResponse<T>{
    success:boolean;
    response: Response<T>;
    errors: Error[];
}

interface Response<T>{
    data:T[];
}

interface Error{
    code:number;
    message:string;
}