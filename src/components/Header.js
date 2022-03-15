import logo from '../logo.svg'

export default 
function Header() {
    return (
      <div className=' flex justify-between py-4 dark:bg-gray-900 dark:text-white px-10  '>
             <img src={logo} className="logo w-20 h-10 " alt="logo" />
              <ul className='nav-items flex space-x-6'>
                <li>Home</li>
                <li>About</li>
                <li>Contact </li>
              </ul>
      </div>
    )
  }

  
