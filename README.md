# Orthodox Home Webpage

## Important commands

Self-restarting development server that runs on http://localhost:3000
``` bash
npm run dev
```

Build a production ready version
``` bash
npm run build
```

start the production build
```bash 
npm run start
```

## Docker commands

``` bash
docker build -t "orthohome:Dockerfile" . &&
docker run -p 80:3000 orthohome:Dockerfile
```

## Goals

- [x] Gather article links and meta data from intersting sites and host
- [x] Gather videos and meta data from interesting sites and hosts
- [ ] Build Gitlab pipeline to automate gathering data, building production, and deploying to AWS
    - [ ] Terraform to build AWS infrastructure for hosting the container
    - [ ] Gitlab pipeline config to handle all the operations
    - [ ] Consider maintaing the content gathering feature from a local machine