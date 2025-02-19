import { Button } from './ui/button'; // Import the Button component

export default function CustomMenu() {
    return (
        <div className='p-6 ml-10 mr-10 flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Bright Futures Academy</h1>
            </div>
            <div className='flex space-x-4'>
                <Button className='text-xl' variant="ghost">
                    Our Mission
                </Button>
                <Button className='text-xl' variant="ghost">
                    Our Founders
                </Button>
                <Button className='text-xl' variant="ghost">
                    Contact
                </Button>
                <Button className='font-bold text-xl px-6 py-3'>
                    Donate
                </Button>
            </div>
        </div>



    );
}
