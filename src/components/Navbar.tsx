import { Button } from './ui/button'; // Import the Button component
import Link from 'next/link';

export default function CustomMenu() {
    return (
        <div className="p-6 ml-10 mr-10 flex justify-between items-center">
            {/* Left Section - Brand Name */}
            <div>
                <Link href="/">
                <h1 className="text-2xl font-bold text-primary-foreground">Bright Futures Academy</h1>
                </Link>
            </div>

            {/* Right Section - Navigation Buttons */}
            <div className="flex space-x-4 text-primary-foreground">
                <Link href="#mission">
                <Button className="text-xl" variant="ghost">
                    Our Mission
                </Button>
                </Link>
                <Link href="/founders">
                <Button className="text-xl" variant="ghost">
                    Our Founders
                </Button>
                </Link>
                <Link href="/contact" passHref>
                <Button className="text-xl" variant="ghost">
                    Contact
                </Button>
                </Link>

                {/* Donate Button */}
                <Button className="font-bold text-xl px-6 py-3 text-primary-foreground">
                    Donate
                </Button>
            </div>
        </div>
    );
}
