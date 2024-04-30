

export default function Navbar() {
  return (
    <div className="text-white shadow-white shadow-sm p-5">
      <div className='flex justify-between shadow-2xl h-10'>
        <h1 className='sm:hidden'></h1>
        <ol className='flex justify-between gap-10'>
          <a href="#"><li className='hover:cursor-pointer hover:text-[red]'>Home</li></a>
          <a href="#About"><li className='hover:cursor-pointer   hover:text-[red]'>About</li></a>
          <a href="#Contact"><li className='hover:cursor-pointer hover:text-[red]'>Contact</li></a>
        </ol>
      </div>
      
    </div>
  )
}
