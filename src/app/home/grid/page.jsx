'use client'
import Image from "next/image";
import gridOne from "../../../../public/grid_one.png";
import gridTwo from "../../../../public/grid_two.png";
import gridThree from "../../../../public/images/devend-1.png";
// import gridThree from "../../../../public/grid_three.png";
import gridFour from "../../../../public/grid_four.png";
import gridFive from "../../../../public/grid_five.png";
import gridSix from "../../../../public/grid_six.png";
import gridSeven from "../../../../public/grid_seven.png";
import gridEight from "../../../../public/images/devend-2.png";
// import gridEight from "../../../../public/grid_eight.png";
import gridNine from "../../../../public/grid_nine.png";

const Grid = () => {
  return (
    <div className="mt-20">
      {/* Row 1 */}
      <div className="flex w-full">
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridOne}
            alt="Grid image 1"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
            priority
          />
        </div>
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridTwo}
            alt="Grid image 2"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
            priority
          />
        </div>
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridThree}
            alt="Grid image 3"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
            priority
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full">
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridFour}
            alt="Grid image 4"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
          />
        </div>
        <div className="w-1/3 relative aspect-square">
          <Image
            src={gridFive}
            alt="Grid image 5"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div>
              <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
                DEVEND IN PICTURES
              </p>
              <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center mt-4 text-white">
                <a href="https://www.facebook.com/share/1C5WwuHhHG/?mibextid=wwXIfr">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="white" d="M17.234 2.25H6.744a4.5 4.5 0 0 0-3.198 1.33A4.47 4.47 0 0 0 2.25 6.778v10.444a4.46 4.46 0 0 0 1.296 3.198a4.5 4.5 0 0 0 3.197 1.33h4.763v-6.966h-1.82a.43.43 0 0 1-.427-.425v-2.236a.435.435 0 0 1 .438-.436h1.809v-2.18a3.54 3.54 0 0 1 .996-2.826a3.57 3.57 0 0 1 2.811-1.065h1.854a.43.43 0 0 1 .427.436v1.89a.424.424 0 0 1-.427.424h-1.123c-1.236 0-1.472.582-1.472 1.431v1.879h2.696a.428.428 0 0 1 .427.48l-.27 2.237a.424.424 0 0 1-.427.38h-2.415v6.966h2.674a4.5 4.5 0 0 0 3.197-1.33a4.47 4.47 0 0 0 1.296-3.199V6.778a4.45 4.45 0 0 0-1.304-3.206a4.5 4.5 0 0 0-3.212-1.322"></path></svg>
                </a>
                <a href="https://www.instagram.com/development_endeavours_ltd?igsh=dGc5aTRubHBoeW1s&utm_source=qr">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                </a>
                <a href="https://www.linkedin.com/company/development-endeavours-ltd/">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="white" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10" />
          <Image
            src={gridSix}
            alt="Grid image 6"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex w-full">
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridSeven}
            alt="Grid image 7"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
          />
        </div>
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridEight}
            alt="Grid image 8"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
          />
        </div>
        <div className="w-1/3 relative aspect-square">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10" />
          <Image
            src={gridNine}
            alt="Grid image 9"
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 33vw, 500px"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
