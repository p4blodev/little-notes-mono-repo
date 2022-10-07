import { rest } from 'msw';

export const handlers = [
  rest.get<any, any>(
    'https://jsonplaceholder.typicode.com/posts',
    (req, res, ctx) => {
      console.log('req: ', req);
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: 'Mock Title 1',
            body: 'Mock Body 1',
          },
          {
            userId: 1,
            id: 2,
            title: 'Mock Title 2',
            body: 'Mock Body 2',
          },
        ]),
      );
    },
  ),
];
