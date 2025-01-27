"use client";
import { Banners } from "./components/Ads";
import {
  ChatIcon,
  LeftArrow,
  RightArrow,
  ShoppingCartIcon,
  XIcon,
} from "./components/shared/Icons";
import Logo from "./resources/logo.png";
import Image from "next/image";
import { useStateContext } from "../../context/contextProvider";
import { useRef, useState, useEffect } from "react";
import AvatarImage from "./resources/avatar.png";

interface MessageProps {
  profileImage: any;
  message: string;
  createdAt: string; // Should ideally be an ISO string for easy formatting
  username?: string; // Optional field for showing the sender's name
}

const Message: React.FC<MessageProps> = ({ profileImage, message, revers }) => {
  return (
    <div
      className={`flex ${
        revers ? "" : "flex-row-reverse"
      } gap-x-2 items-center justify-center px-2`}
    >
      <Image
        width={200}
        height={200}
        src={profileImage ? profileImage : AvatarImage}
        alt="Profile"
        className="w-8 h-8 border border-purple-300  border-2 rounded-full object-cover"
      />
      <div
        className={`flex items-start ${
          revers ? "bg-blue-600 text-white" : ""
        } font-bold p-2 w-full space-x-4 bg-white shadow rounded-lg`}
      >
        <p className={`text-sm ${revers ? "text-white" : "text-gray-600"}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export const Chat = () => {
  const { profile } = useStateContext();
  const msgRef = useRef();
  const chatRef = useRef();
  const chatOpenRef = useRef();
  const [messages, setMessage] = useState<[]>([]);
/*   const { sendMessage } = useWebSocket(
    `${process.env.NEXT_PUBLIC_WS_API_URL}/ws/chat/${profile.id}/`,
    {
      onMessage: (newMessage: object) =>
        setMessage((messages) => [...messages, newMessage]),
      onMessages: (oldMessages: []) =>
        setMessage((messages) => [...oldMessages, ...messages]),
    }
  ); */
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  const handleSendMessage = () => {
    if (msgRef?.current?.value) {
      sendMessage({
        sender: profile.id,
        msg: msgRef.current.value,
      });
      msgRef.current.value = "";
    }
  };
  return (
    <div className="fixed flex items-center justify-center rounded-full p-2 bg-blue-500 w-14 h-14 right-20 bottom-8 z-[1000]">
      <label className="cursor-pointer" htmlFor="chat">
        <ChatIcon />
      </label>
      <input
        ref={chatOpenRef}
        type="checkbox"
        className="peer/chat hidden"
        name="chat"
        id="chat"
      />
      <div className="fixed p-2 items-cetner justify-between peer-checked/chat:block hidden bottom-[20px] right-[30px] z-[20000] border bg-gray-100 rounded-md h-[400px] w-[300px]">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between py-1 px-2">
            <p className="font-bold">Admin</p>
            <label className="cursor-pointer" htmlFor="chat">
              <XIcon />
            </label>
          </div>
          <div
            ref={chatRef}
            className="hover:overflow-y-auto border-t border-gray-300 overflow-y-hidden py-2 space-y-2 h-full"
          >
            {messages?.map((message) => (
              <Message
                message={message.message}
                revers={message.sender_id ? false : true}
                profileImage={message.sender_id ? profile.image : Logo}
              />
            ))}
          </div>
          <div className="flex px-2 gap-2 pt-2">
            <input
              ref={msgRef}
              type="text"
              className="w-full px-2 rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className="py-1 px-2 bg-blue-500 text-white font-bold rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = ({
  category,
  productName,
  price,
  tag,
}: {
  category: string;
  productName: string;
  price: number;
  tag?: string;
}) => {
  return (
    <div className="rounded-md hover:cursor-pointer">
      <div className="bg-gray-400 w-[215px] h-[320px]"></div>
      <div>
        <p className="text-gray-300">{category}</p>
        <p className="text-gray-900 font-bold">{productName}</p>
      </div>
      <p className="text-purple-600 font-bold">{price}</p>
    </div>
  );
};

const Title = ({ text, subtext }: any) => (
  <>
    <p className="text-gray-900 uppercase font-bold text-2xl">{text}</p>
    <p className="text-gray-600 text-sm">{subtext}</p>
  </>
);

export default function Home() {
  const { profile } = useStateContext();
  return (
    <>
      <main>
        <Banners />
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Featured Categories"
            subtext="Explore our selected categories."
          />
          <div className="flex mt-4 space-x-20 p-12">
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
            <div className="rounded-full bg-black p-8"></div>
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="New arrival"
            subtext="Check the latest products in our collection."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Featured products"
            subtext="We selected these for you."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Hot deals"
            subtext="Check the latest products in our collection."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center my-16 justify-center">
          <Title
            text="Best Sellers"
            subtext="Explore products that our customers loves most."
          />
          <div className="flex overflow-auto py-4 px-24 space-x-8">
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
            <Product category="category" productName="product" price={200} />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center inset-0 bg-gradient-to-br from-gray-50 to-gray-100 py-24">
          <p className="text-purple-500 font-bold text-lg">Simple Process</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-4">
            Get Started in Minutes
          </h1>
          <p className="text-gray-500 mb-12">
            Follow these simple steps to purchase and receive your digital
            products instantly
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="relative group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCartIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Browse &amp; Select
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore our wide range of digital products and choose what
                  suits your needs. From gift cards to game credits, we've got
                  you covered.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-credit-card-icon w-12 h-12 text-purple-600"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Chat With Seller
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete your purchase securely using your preferred payment
                  method. We support multiple payment options for your
                  convenience.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
            <div className="relative group h-full">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download-icon w-12 h-12 text-purple-600"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Instant Delivery
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive your digital products instantly after payment. Access
                  your codes immediately in your account dashboard.
                </p>
              </div>
            </div>
          </div>
          <a
            href="/products"
            className="bg-purple-600 hover:bg-purple-700 group flex items-center justify-center px-4 py-2 text-white rounded-md text-md font-bold"
          >
            Start Shopping{" "}
            <div className="pl-2 transform group-hover:translate-x-1 transition-transform">
              <RightArrow />
            </div>
          </a>
        </section>
      </main>
      {profile.id && <Chat />}
    </>
  );
}
