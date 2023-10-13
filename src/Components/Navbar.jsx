import logo1 from '../images/more/logo1.png';
import nv from '../images/more/15.jpg';

const Navbar = () => {
    return (
        <div className='h-28 relative'>
            <img src={nv} className='absolute w-full h-full'/>
            <div className=' absolute w-full h-full flex flex-row items-center justify-center gap-4'>
                <div className=''><img src={logo1} className='h-24 w-20'/></div>
                <div className='text-6xl font-thin text-white'>Espresso Emporium</div>
            </div>
        </div>
    );
};

export default Navbar;