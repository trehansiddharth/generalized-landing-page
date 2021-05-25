/* eslint-disable import/no-duplicates */
import { Application, Request, Response } from 'express';
import express from 'express';

import os from 'os';
import path from 'path';

const app: Application = express();

app.use(express.static(path.join(__dirname, 'public/image')));
if (process.env.NODE_ENV === 'production') {
  // app.use(express.static("dist"));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.get('/api/getUsername', (req: Request, res: Response) =>
  res.send({ username: os.userInfo().username })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);