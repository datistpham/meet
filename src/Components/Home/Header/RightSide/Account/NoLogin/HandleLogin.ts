import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

export const HandleLogin = () => {
  const auth= getAuth()
  auth.languageCode= "it"
  const provider= new GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential!.accessToken
      const user = result.user
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.error(errorCode, errorMessage, email, credential)
    })
}
export const Login= ()=> {
  const auth= getAuth()
  auth.onAuthStateChanged(user=> {
    if(user) {
      console.log(user)
    }
    else {
      console.log("User loggout")
    }
  })
}
export const LogoutExecute= ()=> {
  const auth= getAuth()
  auth.signOut()
}
