import Ninetendo from "../resources/pngwing.com.png";
import Pubg from "../resources/pngegg.png";
import Microsoft from "../resources/microsoft.png";
import Banner from "../resources/player.png";
import Freefire from "../resources/freefire.png";
import Steam from "../resources/steam.png";
import Shahid from "../resources/shahid.png";
import Image from "next/image";

const MiniCard = ({ children, text, float }) => (
  <div
    className={`gap-3 bg-white bg-opacity-[0.7] rounded-full animate-bounce w-24 scale-x-[-1] shadow-md absolute px-2 py-4 flex flex-col items-center justify-center ${float}`}
  >
    {children}
    <p className="text-gray-600 hidden hover:visible text-wrap text-center font-bold text-lg">
      {text}
    </p>
  </div>
);
const XBoxCard = ({ text, float }) => (
  <MiniCard text={text} float={float}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1331.67 1333.33"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      className="w-12 h-12"
    >
      <path
        d="M665.83 534.66s1.66 0 0 0c200.91 152.76 541.3 528.02 438.35 634.29-117.89 102.95-270.65 164.39-438.35 164.39-167.7 0-322.13-61.44-438.35-164.39-104.61-106.27 237.44-481.53 436.69-632.63 0-1.66 1.66-1.66 1.66-1.66zm347.03-436.7C911.57 36.52 800.32-.01 665.83-.01c-134.5 0-245.74 36.53-347.03 97.97-1.66 0-1.66 1.66-1.66 3.32s1.66 1.66 3.32 1.66c129.51-28.23 325.44 83.02 343.71 94.65h3.32c18.26-11.62 214.2-122.87 343.71-94.65 1.66 0 3.32 0 3.32-1.66s0-3.32-1.66-3.32zm-813.61 92.98c-1.66 0-1.66 1.66-3.32 1.66C74.72 313.81 0 481.52 0 665.82c0 151.1 51.48 292.24 136.16 403.49 0 1.66 1.66 1.66 3.32 1.66s1.66-1.66 0-3.32C88 909.91 348.69 529.67 483.19 370.26l1.66-1.66c0-1.66 0-1.66-1.66-1.66-204.23-202.57-272.31-180.99-283.93-176.01zm649.23 174.35l-1.66 1.66s0 1.66 1.66 1.66C982.98 528.01 1242 908.26 1192.19 1066v3.32c1.66 0 3.32 0 3.32-1.66 84.68-111.25 136.16-252.39 136.16-403.49 0-184.31-74.72-352.01-197.59-473.22-1.66-1.66-1.66-1.66-3.32-1.66-9.96-3.32-78.04-24.91-282.27 176.01z"
        fill="#107b10"
        fillRule="nonzero"
      />
    </svg>
  </MiniCard>
);

const ImageCard = ({ text, src, className, float }) => (
  <MiniCard text={text} float={float}>
    <Image
      alt={text}
      src={src}
      width={4000}
      height={4000}
      className={className}
    />
  </MiniCard>
);

const PlaystationCard = ({ text, float }) => (
  <MiniCard text={text} float={float}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className="w-12 h-12 "
      viewBox="0 0 122.88 95.18"
    >
      <g>
        <path
          className="fill-blue-500"
          d="M2.49,69.39c-4.61,3.07-3.07,8.9,6.75,11.67c10.13,3.38,21.18,4.3,31.93,2.46c0.61,0,1.23-0.31,1.54-0.31 V72.76l-10.44,3.38c-3.99,1.23-7.98,1.54-11.97,0.61c-3.07-0.92-2.46-2.76,1.23-4.3l21.18-7.37V53.73L13.23,63.86 C9.55,65.09,5.86,66.93,2.49,69.39L2.49,69.39z M73.71,23.33v29.78c12.59,6.14,22.41,0,22.41-15.96c0-16.27-5.83-23.64-22.72-29.47 C64.5,4.6,55.29,1.84,46.08,0v88.73l21.49,6.45V20.57c0-3.38,0-5.83,2.46-4.91C73.41,16.58,73.71,19.96,73.71,23.33L73.71,23.33z M113.63,62.32c-8.9-3.07-18.42-4.3-27.63-3.38c-4.91,0.31-9.52,1.54-13.82,3.07l-0.92,0.31V74.3l19.96-7.37 c3.99-1.23,7.98-1.54,11.97-0.61c3.07,0.92,2.46,2.76-1.23,4.3l-30.7,11.36v11.67l42.37-15.66c3.07-1.23,5.83-2.76,8.29-5.22 C124.07,69.69,123.15,65.39,113.63,62.32L113.63,62.32z"
        />
      </g>
    </svg>
  </MiniCard>
);

export const Banners = () => {
  return (
    <div className="relative inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-90 overflow-hidden w-full h-[75vh] flex">
      <div className="flex flex-col w-full items-center justify-end">
        <div className="text-4xl animate-fadeInTopToBottom flex flex-row text-gray-900 font-bold">
          <h2
            style={{
              background: "-webkit-linear-gradient(45deg,  #f72585, #7209b7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-6xl mb-12 ml-3 font-bold"
          >
            Planet Games
          </h2>
        </div>

        <div className="scale-x-[-1]">
          <div className="bg-purple-600 rounded-full px-[100px]">

          <Image
            src={Banner}
            width={6000}
            height={6000}
            className="w-[900px] animate-fadeInBottomToTop -mb-14 h-[600px]"
            />
            </div>
        <div className="w-full  absolute top-1 flex space-y-6 flex-col">
        <XBoxCard float='top-[30px] delay-[0.3s] left-[13%]' />
        <PlaystationCard float='top-[150px] left-[23%]' />

        <ImageCard
          className="w-12 h-12"
          src={Ninetendo}
          float='top-[390px] right-[11%]'
          />
        <ImageCard float='top-[300px] left-[9%]' className="w-16 h-16" src={Pubg}  />
        <ImageCard
          float='top-[60px] right-[11%]'
          className="w-16 h-16"
          src={Steam}
        />
        <ImageCard
          float='top-[60px] right-[11%]'
          className="w-16 h-16"
          src={Steam}
        />
        <ImageCard
          float='top-[260px] right-[7%]'
          className="w-16 h-16"
          src={Shahid}
        />
        <ImageCard
          float='top-[150px] left-[11%]'
          className="w-16 h-16"
          src={Microsoft}
        />
        <ImageCard className="w-16 h-16"
          float='top-[200px] right-[20%]'
        
        src={Freefire} text="Freefire Topup" />
      </div>
        </div>
      </div>
      
    </div>
  );
};
