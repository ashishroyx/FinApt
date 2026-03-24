import {
  SignInButton,
  UserButton,
  Show, // New unified component
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/logo.png"
            alt='Logo'
            height={200}
            width={310}
            className='h-20 w-auto object-contain'
          />
        </Link>

        <div className='flex items-center space-x-4'>
          {/* Use 'when' prop instead of separate SignedIn/SignedOut components */}
          <Show when="signed-in">
            <Link href="/dashboard">
              <Button variant='outline' className="flex items-center gap-2">
                <LayoutDashboard size={18}/>
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className='flex items-center gap-2'>
                <PenBox size={18}/>
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>

            <UserButton
              appearance={{
                options: { // 'layout' renamed to 'options' in Core 3
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </Show>

          <Show when="signed-out">
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </Show>
        </div>
      </nav>
    </header>
  )
}

export default Header