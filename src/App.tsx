import {Routes,Route} from 'react-router-dom'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import {Home,Explore,Saved,AllUsers,CreatePost,
  EditPost,PostDetails,Profile,UpdateProfile} from './_root/pages'
import { Toaster } from "@/components/ui/toaster"



const App = () => {
  return (  
    <main className='flex h-screen'>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/sign-in' element={<SigninForm />}/>
                <Route path='/sign-up' element={<SignupForm />}/>
            </Route>
            <Route element={<RootLayout />}>
                <Route index element={<Home />}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/saved" element={<Saved/>}/>
                <Route path="/all-users" element={<AllUsers/>}/>
                <Route path="/create-post" element={<CreatePost/>}/>
                <Route path="/update-post/:id" element={<EditPost/>}/>
                <Route path="/posts/:id" element={<PostDetails/>}/>
                <Route path="/profile/:id/*" element={<Profile/>}/>
                <Route path="/update-profile/:id" element={<UpdateProfile/>}/>
            </Route>
        </Routes>
        <Toaster/>
    </main>
  )
}

export default App