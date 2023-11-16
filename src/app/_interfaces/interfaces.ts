export interface GameData{
    activity: string,
    time: string,
    user: number,
    name: string,
    consumption: number,
}

export interface PostApiResp{
    message: string,
    code: string,
}

export interface GetApiResp{
    user: string,
    totalConsumption: number,
    average_consumption: number,
}

