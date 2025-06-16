import { Router, Request, Response } from 'express';
import path from 'path'

const router = Router();

router.get('/bird', (req: Request, res: Response) => {
	const bird = path.join(__dirname, 'bird.jpeg')
	res.sendFile(bird)
})

router.get('/bunny', (req: Request, res: Response) => {
	const bunny = path.join(__dirname, 'bunny.jpeg')
	res.sendFile(bunny)
})

router.get('/cat', (req: Request, res: Response) => {
	const cat = path.join(__dirname, 'cat.jpeg')
	res.sendFile(cat)
})

router.all('*splat', (req: Request, res: Response) => {
  if (req.method !== 'GET') {
    res.status(405).send(`${req.method} is not supported on ${req.path}`)
  }
})

export default router;
