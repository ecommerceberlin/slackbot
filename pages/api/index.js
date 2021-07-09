// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {App, ExpressReceiver} from '@slack/bolt'
const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });



function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}


const app = new App({
  receiver,
  token: process.env.SLACK_BOT_TOKEN
});


export default async function handler(req, res) {


  app.command('/stats', async ({ command, ack, say }) => {
    await ack();
    await say(`>>2> ${command.text}`);
});


  await runMiddleware(req, res, receiver.router)


  res.status(200).json({ name: 'John Doe' })
}



export const config = {
  api: {
    externalResolver: true,
  },
}