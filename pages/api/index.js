// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {App} from '@slack/bolt'

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});


export default function handler(req, res) {

  

  res.status(200).json({ name: 'John Doe' })
}
