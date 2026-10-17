import {getRequest} from '@tanstack/react-start/server';
export function assertSameSiteRequest(){const request=getRequest();const site=request?.headers.get('sec-fetch-site');if(site&&site!=='same-origin'&&site!=='none'){const error=new Error('Cross-origin request rejected');Object.assign(error,{status:403});throw error;}}
