import {Router,Request,Response} from 'express'

import { City } from '../entities/City'


const router = Router()

router.post('/city/create',async(req : Request,res : Response) => {

    const city = City.create(req.body)

    await city.save()
    
   return res.send({
       status : 200,
   })

})


router.get('/city',async(req : Request,res : Response) => {

    const cities = await City.find()

   return res.send({
       status : 200,
       cities
   })

})

router.put('/city/update/:id',async(req : Request,res : Response) => {

    const city = await City.findOneBy({
        id : req.params.id
    })

    city!.name = req.body.name 
    city!.population = req.body.population

    await city!.save()

   return res.send({
       status : 200,
   })

})


router.delete('/city/delete/:id',async(req : Request,res : Response) => {

    
    await City.delete(req.params.id)


   return res.send({
       status : 200,
      
   })

})





export default router








