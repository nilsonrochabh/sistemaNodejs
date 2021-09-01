import { firebaseServer } from "../../config/firebase/server";

const db = firebaseServer.firestore()
const profile = db.collection('profiles')

export default async (req, res) => {
 
  const [,token] = req.headers.autorization.split('')
  const {user_id} =  await firebaseServer.auth().verifyIdToken(req.headers.autorization)
  

  profile.doc(req.body.username).set({
    user_id: user_id,
    username: req.body.username
  })

  res.status(200).json({ name: 'John Doe' })
}
