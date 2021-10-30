import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req:Request, res: Response) => {
    res.json({name: 'Vinob'});
});

app.get('/faculty', async(req:Request, res: Response) => {
    const fac = await prisma.faculty.findMany({
        include: {
            otherResponsibilities: true
        }
    });
    res.json(fac);
});

app.post('/faculty', async(req:Request, res: Response) => {
    const {body} = req;
    const fac = await prisma.faculty.create({
        data: {
            name: body.name,
            eCode: body.eCode,
            exp: body.exp
        }
    });
    res.json(fac);
});

app.post('/or', async(req:Request, res: Response) => {
    const {body} = req;
    const fac = await prisma.otherResponsibility.create({
        data: {
            desc: body.desc,
            facId: body.facId
        }
    });
    res.json(fac);
});



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});