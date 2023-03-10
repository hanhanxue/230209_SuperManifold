import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


import { useScrollPosition } from "../hooks/useScrollPosition"


export default function Home() {

  const [direction, directionChange, scrollPosition, scrollPositionAtChange] = useScrollPosition()


  function classNames(...classes: (string | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
  }







  return (
    <>

    <Head>
      <title>Super Manifold</title>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>



    {/* `fixed w-full bg-black`   */}
    <header className={classNames(  'fixed', 'w-full', 'transition-colors')}>
      <nav className="">
        <div className="container mx-auto ">
          <div className="py-4 flex items-center">
            
            <div className="flex-auto">
              <Link href="/">
                <Image 
                  alt="Super Manifold Logo"
                  src="/logo/230222_SuperManifold-white.svg" 
                  height={30} 
                  width={215} 
                />  
              </Link>
            </div>

            <div className="flex-initial">
              <ul className="flex text-white">
                <Link href="/"><li className="ml-12">D1</li></Link>
                <Link href="/"><li className="ml-12">Waitlist</li></Link>
                <Link href="/"><li className="ml-12">About</li></Link>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </header>

    <main>
    <div>
      <Image
        alt="Super Manifold B1-H"
        src="/temp/230225_gapvarLogovector.jpg"
        width={5120}
        height={2880}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
    <div>
      <Image
        alt="Super Manifold B1-H"
        src="/temp/230225_gapvarLogovector.jpg"
        width={5120}
        height={2880}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
    <div>
      <Image
        alt="Super Manifold B1-H"
        src="/temp/230225_gapvarLogovector.jpg"
        width={5120}
        height={2880}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
    </main>



    </>
  )


}



// fill
// sizes="100vw"
// style={{
//   objectFit: 'cover',
// }}


// const generateStyle = (
//   direction: number | boolean, 
//   directionChange: number | boolean, 
//   scrollPosition: number | boolean, 
//   scrollPositionAtChange: number | boolean) => {

//   let anchor: number | boolean = 500 
//   let style: string = '' 



//   if(scrollPosition < 500) {
//     style = `fixed`
//     //console.log(style)

//   } else if (!direction) {
//     anchor = Math.trunc(Number(scrollPositionAtChange))
//     style = `absolute top-[${anchor}px]`
//     style = `absolute top-[725px]`
//   }
//   else {
//     style = `absolute top-[${anchor}px]`
//     //console.log(style)
//   }

  
//   console.log(style)
//   return style
// }
