export function effectiveTier(rows: Array<{tier:number;status:string;current_period_end:string|null}>): number;
export function createBillingService(options: any): {
 customer(userId:string,email?:string|null):Promise<string>;
 catalog():Promise<any[]>;portal(userId:string,email?:string|null):Promise<{url:string}>;
 checkout(userId:string,email:string|null,input:any):Promise<{url:string}>;
 syncSubscription(sub:any):Promise<void>;fulfill(orderId:number):Promise<void>;
 complete(session:any):Promise<{kind:string}>;event(event:any):Promise<void>;
};
