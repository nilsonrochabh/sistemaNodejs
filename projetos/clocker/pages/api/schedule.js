import { addHours } from 'date-fns'
import { differenceInHours } from 'date-fns/esm'
import firebaseServer from '../../config/firebase/server'

const db = firebaseServer.firestore()
const profile = db.collection('profile')
const agenda = db.collection('agenda')

const startAt = new Date(2021, 1, 1, 8, 0 )
const endAt = new Date(2021, 1, 1, 17, 0 )
const totalHours = differenceInHours(endAt, startAt)
const timeBlocks=[]
for(let blockIndex = 0; blockIndex <= totalHours; blockIndex++){
    const time = format(addHours(startAt,blockIndex),"HH:mm")
    timeBlocks.push(time)
}
export default async(req, res) =>{
    console.log(timeBlocks);
  try {
    // const profileDoc = await profile
    //     .where('username','===',req.query.username)
    //     .get()
    // const snapshot  = await agenda 
    //         .where('userId', '===', profileDoc.userId)
    //         .where('when','===',req.query.when) 
    //         .get()


        return res.status(200).json(timeBlocks)
     } catch (error) {
        console.log('FB', error);
        return res.status(401)
    }
     
 
}