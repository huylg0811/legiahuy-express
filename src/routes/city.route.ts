import {Router,Request,Response} from 'express'

import { City } from '../entities/City'
import { createClient } from 'redis'

const client = createClient()


client.connect()

const router = Router()

router.post('/city/create',async(req : Request,res : Response) => {

    console.log(req.body)
    const city = City.create(req.body)

    await city.save()
    
   return res.send({
       status : 200,
   })

})


router.get('/city',async(req : Request,res : Response) => {

    
    const cities = await getOrSetCache('cities',async() => {
        return City.find()
    })


   return res.json({
       status : 200,
       cities : cities
   })

})

router.put('/city/update/:id',async(req : Request,res : Response) => {

    
    const city = await City.findOneBy({
        id : parseInt(req.params.id)
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


 const getOrSetCache = async(key : any , cb : any) => {


    const value = await client.get(key)
    
    if(value !== null){
        return JSON.parse(value)
    }

    const data = await cb()

    if(value === null){
        client.setEx(key,3600,JSON.stringify(data))

        return JSON.parse(data)
    }
}

export default router








