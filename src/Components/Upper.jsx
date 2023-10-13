
import img1 from "../images/more/6.jpeg"

const Upper = () => {
    return (
        <div>
            <div className='relative'>
                <img src={img1} className='w-full h-auto'/>
                <div className='absolute inset-0 flex flex-col h-[730px] w-auto text-white justify-center my-auto'>
                    <div className='text-4xl font-semibold text-center mb-4 max-w-screen-md ml-28'>Would you like a Cup of Delicious Coffee?</div>
                    <div className='text-sm mb-4 max-w-screen-sm ml-40'>It`s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</div>
                    <div><button type="submit" className='bg-[#E3B577] hover:bg-transparent text-black hover:text-white  font-bold py-2 px-4 rounded ml-40'>Learn More</button></div>
                </div>
            </div>
        </div>
    );
};


export default Upper;