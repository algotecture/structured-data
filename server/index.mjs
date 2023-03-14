import koa from 'koa'
import koaStatic from 'koa-static'

const server = new koa()
const staticRoot = './public'
console.log('test', server)

server.use(koaStatic(staticRoot, {}))

server.listen(3000)

console.log('http://localhost:3000')

const s = {
  SpacePropertyId: 'ba835038-c94a-44a3-917d-7f8636b4f756',
  SpaceId: 1,
  TypeOfSpace: 1,
  TotalArea: 0.0,
  OwnerId: 1,
  ContractId: 0,
  SubSpaces: [
    {
      SubSpaceId: '1b8f9740-bf1c-436a-8486-c2547aad6916',
      SpaceId: 1,
      Area: 12.0,
      UtilizationTypeId: 2,
      OwnerId: 1,
      Subspaces: [
        {
          SubSpaceId: '128f9740-bf1c-436a-8486-c2547aad6916',
          SpaceId: 1,
          Area: 12.0,
          UtilizationTypeId: 2,
          OwnerId: 1,
          Subspaces: [
            {
              SubSpaceId: '218f9740-bf1c-436a-8486-c2547aad6919',
              SpaceId: 1,
              Area: 12.0,
              UtilizationTypeId: 1,
              OwnerId: 0,
              Subspaces: [],
            },
          ],
        },
        {
          SubSpaceId: '123f9740-bf1c-436a-8486-c2547aad6916',
          SpaceId: 1,
          Area: 12.0,
          UtilizationTypeId: 2,
          OwnerId: 1,
          Subspaces: [],
        },
      ],
    },
    {
      SubSpaceId: '2b8f9740-bf1c-436a-8486-c2547aad6916',
      SpaceId: 1,
      Area: 12.0,
      UtilizationTypeId: 2,
      OwnerId: 1,
      Subspaces: [
        {
          SubSpaceId: '218f9740-bf1c-436a-8486-c2547aad6917',
          SpaceId: 1,
          Area: 12.0,
          UtilizationTypeId: 1,
          OwnerId: 0,
          Subspaces: [],
        },
        {
          SubSpaceId: '218f9740-bf1c-436a-8486-c2547aad6918',
          SpaceId: 1,
          Area: 12.0,
          UtilizationTypeId: 1,
          OwnerId: 0,
          Subspaces: [],
        },
      ],
    },
  ],
}

console.log(s)
