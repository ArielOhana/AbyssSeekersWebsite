import React, { useState } from "react";
import { motion } from "framer-motion";
import DadiPic from "./assets/EddiTheDadi.png";
import Ariel from "./assets/ArielTheKing.jpg";
import Broker from "./assets/Broker.jpg";
import Barda from "./assets/Bardosh.png";
import { FaGamepad, FaUsers, FaInfoCircle, FaDownload } from "react-icons/fa";
import { SiCsharp, SiUnity, SiSqlite } from "react-icons/si";
import "./App.css";
import SC1 from "./assets/SC1.png";
import SC2 from "./assets/SC2.png";
import SC3 from "./assets/SC3.png";
import SC4 from "./assets/SC4.png";
import Main from "./assets/mainbg.png";

const screenshots = [SC1, SC2, SC3, SC4];

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const handleDownloadClick = (fileName) => {
    const link = document.createElement("a");
    link.href = `/path/to/your/files/${fileName}`;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Navigation */}
      <nav className="bg-gray-800 fixed w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8 flex justify-center items-center">
                <a
                  href="#"
                  className=" text-center bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Abyss Seekers
                </a>

                <a
                  href="#"
                  className=" text-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>

                <a
                  href="#"
                  className=" text-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  How We Did It
                </a>

                <a
                  href="#"
                  className=" text-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Header */}
      <motion.div
        variants={textVariants}
        className="text-4xl font-extrabold tracking-wider text-yellow-400    flex justify-center items-center"
      >
        <img src={Main} alt="" />
        <section
          id="dw"
          className="my-8 text-center py-20 absolute inset-x-0 bottom-0"
        >
          <div className="flex flex-row justify-center items-center">
            {/* Download Buttons */}
            {[
              {
                text: "Download for Windows",
                bg: "blue-500",
                file: "windows.exe",
              },
              {
                text: "Download for macOS",
                bg: "green-300",
                file: "macOS.dmg",
              },
            ].map((button, index) => (
              <button
                key={index}
                onClick={() => handleDownloadClick(button.file)}
                className={`bg-${button.bg} text-${button.text} px-4 py-2 rounded-full mb-2 hover:bg-${button.bg}-600 transition text-2xl text-white m-5`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </section>
        {/* Tagline */}
        <motion.h1
          id="title"
          variants={textVariants}
          className="text-4xl  text-emerald-300 mb-6 text-center absolute z-50 bottom-0 bg-black bg-opacity-70"
        >
          "Emerging from the depths of the abyss, your mission is to reclaim
          them."
        </motion.h1>
      </motion.div>

      {/* Game Introduction Section */}
      <section className=" text-center bg-gray-800 p-8 rounded-lg" id="abyss">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Game Introduction
        </h2>
        <p className="text-lg">
          Welcome to Abyss Seekers, a strategic game set in a mythical world
          between the years 500 and 1500. Immerse yourself in a realm of
          strategic challenges where you must navigate through the complexities
          of ancient civilizations, conquer territories, and lead your faction
          to victory. Unleash your tactical prowess and shape the destiny of
          this mystical era.
        </p>
        <p className="text-lg mt-4">
          Dive deeper into the rich narrative, where alliances are forged,
          battles are waged, and the course of history is in your hands. With
          stunning visuals and intricate gameplay, Abyss Seekers offers an
          unparalleled gaming experience. Are you ready to leave your mark on
          this mythical journey?
        </p>
      </section>

      {/* Game Features Section */}
      <section className="my-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Game Features
        </h2>
        <div className="flex flex-wrap justify-center gap-4 xl:flex-row">
          {/* Feature Cards */}
          {[
            {
              emoji: "🛡️",
              title: "Warrior",
              description: "Master of melee combat and defense.",
            },
            {
              emoji: "🗡️",
              title: "Rogue",
              description: "Stealthy and agile, excels in surprise attacks.",
            },
            {
              emoji: "🔮",
              title: "Mage",
              description: "Harnesses the power of arcane magic.",
            },
            {
              emoji: "👹",
              title: "Orc",
              description: "Brutal strength and resilience.",
            },
            {
              emoji: "🧝",
              title: "Elf",
              description: "Graceful and attuned to nature.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg w-56 min-h-40 flex flex-col justify-center items-center text-center hover:bg-gray-600 transition-all ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{feature.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-md">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enemy Section */}
      <section className="my-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Enemies</h2>
        <div className="flex flex-wrap justify-center gap-4 xl:flex-row">
          {/* Enemy Cards */}
          {[
            {
              emoji: "👻",
              title: "Ghost",
              description: "Ethereal and elusive.",
            },
            {
              emoji: "💀",
              title: "Skeleton",
              description: "Undead warriors rising from the grave.",
            },
            {
              emoji: "😈",
              title: "Demon",
              description: "Malevolent creatures from the abyss.",
            },
            {
              emoji: "👼",
              title: "Dark Angel",
              description: "Fallen angels with dark powers.",
            },
          ].map((enemy, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg w-56 min-h-40 flex flex-col justify-center items-center text-center hover:bg-gray-600 transition-all ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{enemy.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{enemy.title}</h3>
              <p className="text-sm">{enemy.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Download Links Section */}

      {/* Developers Section */}
      <section
        id="au"
        className="my-8 flex flex-col justify-center items-center"
      >
        <h2 className="font-bold mb-4 text-yellow-400 text-4xl">
          Meet the Developers
        </h2>
        <div className="flex flex-wrap justify-center gap-4 xl:flex-row">
          {/* Developer Cards */}
          {[
            {
              imgSrc: DadiPic,
              name: "Edward Zvonov",
              role: "Full-Stack Developer",
            },
            {
              imgSrc: Ariel,
              name: "Ariel Ohana",
              role: "Full-Stack Developer",
            },
            {
              imgSrc: Broker,
              name: "Dor Broker",
              role: "Full-Stack Developer",
            },
            { imgSrc: Barda, name: "Ori Barda", role: "Full-Stack Developer" },
          ].map((developer, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg w-56 min-h-40 flex flex-col justify-center items-center text-center hover:bg-gray-600 transition-all ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={developer.imgSrc}
                alt={`Developer ${index + 1}`}
                className="size-36 mb-2 rounded-full mx-auto"
                whileHover={{ rotate: 360 }}
              />
              <h3 className="text-lg font-bold mb-2">{developer.name}</h3>
              <p className="text-sm">{developer.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="hwd" className="my-8 text-center p-8 rounded-lg">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">About Us</h2>
        <p className="text-lg">
          Welcome to Abyss Seekers, a project born out of passion and skill by
          the developers behind this immersive gaming experience. We are a team
          of dedicated individuals who honed our craft during the CyberPro Full
          Stack Developers course.
        </p>
        <p className="text-lg mt-4">
          In this comprehensive course, we delved into the intricacies of
          building websites, servers, and mastering Unity, a game development
          platform. Our journey culminated in the creation of Abyss Seekers, a
          strategic game set in a mythical world between the years 500 and 1500.
        </p>
        <p className="text-lg mt-4">
          This final project, which lasted a week, challenged us to apply our
          acquired knowledge and skills to deliver a captivating gaming
          experience. Through the fusion of technology, creativity, and
          strategic thinking, we proudly present Abyss Seekers—a testament to
          our commitment to excellence in game development.
        </p>
      </section>
      <div className="  bg-gray-900 text-white">
        <section className="px-4 py-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            IN GAME SCREENSHOTS
          </h2>
          <div className="flex justify-center gap-4">
            {screenshots.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className="cursor-pointer"
              >
                <img
                  className="w-72 h-48 object-cover rounded-lg shadow-lg"
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>

        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-4xl max-h-full overflow-auto">
              <div className="relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                >
                  &times;
                </button>
                <img
                  src={selectedImage}
                  alt="Enlarged Screenshot"
                  className="mx-auto"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* Footer */}
      <footer className="flex flex-col justify-center items-center py-12">
        <div className="flex justify-center items-center">
          <SiCsharp className="text-white text-6xl mx-3 mb-1 hover:text-gray-400 transition-all ease-in-out" />
          <SiUnity className="text-white text-6xl mx-3 mb-1 hover:text-gray-400 transition-all ease-in-out" />
          <SiSqlite className="text-white text-6xl mx-3 mb-1 hover:text-gray-400 transition-all ease-in-out" />
        </div>
        <p className="text-sm">
          &copy; 2024 Abyss Seekers. All rights reserved. | Privacy Policy |
          Terms of Service
        </p>
      </footer>
    </motion.div>
  );
};

export default App;
