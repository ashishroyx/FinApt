import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <div className='fixed top-0 w-full z-50 '>
      <nav className='flex container px-4 py-4 items-center justify-between m-auto'>
        <Link href="/">
          <Image 
            src={"/logo.png"}
            alt='Logo'
            height={40}
            width={200}
            className='h-45 w-auto object-contain'
          />
        </Link>
        <div className='flex items-center space-x-6'>
          <SignedIn>
            <Link href={"/dashboard"} 
              className='text-gray-600 hover:text-blue-600 flex items-center gap-2'
            >
            <Button variant='outline'>
              <LayoutDashboard size={18}/>
              <span className=' hidden md:inline'>
                DashBoard
              </span>
            </Button>

            </Link>

             <Link href={"/transaction/create"} 
             className=' flex items-center gap-2'
             >
            <Button variant='outline'>
              <PenBox size={18}/>
              <span className=' hidden md:inline'>
                Add Transactions
              </span>
            </Button>

            </Link>

          </SignedIn>
          <SignedOut>
            <SignInButton  forceRedirectUrl="/dashboard">
            <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>


          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-15 h-15",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header
