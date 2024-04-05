import Image from "next/image"


export const Heroes = () =>{
    return (
       <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] ">
                <Image
                src="/documents.png"
                alt="Documents"
                className="object-contain dark:hidden"
                fill
                />
                <Image
                src="/documents-dark.png"
                alt="Documents"
                className="object-contain dark:block hidden"
                fill
                />
            </div>
            <div className="relative h-[400px] w-[400px] hidden md:block">
                <Image
                
                alt="reading"
                fill
                className="object-contain dark:hidden"
                src="/reading.png"
                />
                <Image
                
                alt="reading"
                fill
                className="object-contain dark:block hidden"
                src="/reading-dark.png"
                />
            </div>
        </div>
        
       </div>
    )
}
