import Image from "next/image";
import Logo from "@/components/Assets/Images/ED-Review.png";

const NewpageData = () => {
  return (
    <div className="flex flex-col items-start gap-3">
      {/* Logo in the middle */}
      <Image
        src={Logo}
        alt="Logo"
        width={100}
        height={100} 
      />

      {/* Description */}
      <p className="font-oswald font-medium text-sm items-start">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.
      </p>
    </div>
  );
};

export default NewpageData;
