import {defineConfig} from 'vite';
import {tanstackStart} from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {nitro} from 'nitro/vite';
export default defineConfig(({command,isPreview})=>({
 server:{host:'0.0.0.0',port:8080},
 preview:{host:'127.0.0.1',port:8081},
 resolve:{tsconfigPaths:true},
 plugins:[tailwindcss(),tanstackStart(),...(command==='build'||isPreview?[nitro({preset:'node-server'})]:[]),react()]
}));
