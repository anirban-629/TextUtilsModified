import React, { useState } from "react";
import ConverterHeading from "../components/ConverterHeading";
import {
  AddUnderScore,
  Clear,
  CountLetters,
  CountWords,
  ExtraSpaceFree,
  Lowercase,
  RemoveNumbers,
  RemovePunctuation,
  Reverse,
  Uppercase,
} from "../functions/funcs";
import Button2 from "../components/Button2";

const iterate = [
  Uppercase,
  Lowercase,
  RemoveNumbers,
  AddUnderScore,
  Clear,
  ExtraSpaceFree,
  Reverse,
  CountLetters,
  CountWords,
  RemovePunctuation,
];

const Home = () => {
  const [copiedText, setCopyText] = useState("");
  const [isCopied, setIsCopied] = useState([
    false,
    <i className="fa-solid fa-copy"></i>,
  ]);
  const [inputText, setInputText] = useState("Enter Your Text...");
  const [outputText, setOutputText] = useState("Your Output ...");
  const textAreaHandler = (e) => {
    setCopyText(e.target.value);
    setInputText(e.target.value);
    setOutputText(e.target.value);
  };

  const Button1 = (props) => {
    const { id, text, value } = props.data;
    return (
      <button
        className="relative px-5 py-2 font-medium text-white group"
        onClick={() => {
          setOutputText(iterate[id](value));
          setCopyText(iterate[id](value));
        }}
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
        <span className="relative">{text}</span>
      </button>
    );
  };

  return (
    <div className="lg:mx-40 md:mx-20 mx-10 mt-10 mb-10">
      <div className="grid lg:grid-cols-2 gap-10 flex-wrap">
        <div className="max-w-2xl">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            <Button2 title="Input" />
          </label>
          <textarea
            id="message"
            rows="10"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={inputText}
            onChange={textAreaHandler}
          ></textarea>
        </div>

        <div className="max-w-2xl ">
          <div className="flex justify-between mx-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              <Button2 title="Output" />
            </label>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              <button
                className="relative px-4 py-2 font-b text-white  group"
                onClick={() => {
                  navigator.clipboard.writeText(copiedText);
                  setIsCopied([true, <i className="fa-solid fa-check"></i>]);
                  setTimeout(() => {
                    setIsCopied([false, <i className="fa-solid fa-copy"></i>]);
                  }, 2000);
                }}
              >
                <span
                  className={`absolute inset-0 w-full u-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 ${
                    isCopied[0] ? "bg-[#28c08e]" : "bg-[#6159e8]"
                  } group-hover:translate-x-0 group-hover:translate-y-0`}
                ></span>
                <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
                <span className="relative">{isCopied[1]}</span>
              </button>
            </label>
          </div>
          <textarea
            id="message copyOutputArea"
            rows="10"
            disabled
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ resize: "none" }}
            placeholder="Your output..."
            value={outputText}
          ></textarea>
        </div>

        <div>
          <div className="Heading mb-10">
            <ConverterHeading
              text1="Let's Play With Text..."
              text2="Convert Text..."
            />
          </div>
          <div id="buttons" className="grid lg:grid-cols-3 gap-5 flex-wrap ">
            <Button1
              data={{ id: 0, value: inputText, text: "UPPERCASE" }}
              onClick={() => {
                console.log("WORKING");
              }}
            />
            <Button1 data={{ id: 1, value: inputText, text: "lowercase" }} />
            <Button1
              data={{ id: 2, value: inputText, text: "Remove Numbers" }}
            />
            <Button1 data={{ id: 3, value: inputText, text: "_Underscore" }} />
            <Button1 data={{ id: 4, value: inputText, text: "Clear" }} />
            <Button1
              data={{ id: 5, value: inputText, text: "Remove   Space" }}
            />
            <Button1 data={{ id: 6, value: inputText, text: "Reverse" }} />
            <Button1
              data={{ id: 7, value: inputText, text: "Count Letters" }}
            />
            <Button1 data={{ id: 8, value: inputText, text: "Count Words" }} />
            <Button1
              data={{ id: 9, value: inputText, text: "Punctuation Free" }}
            />
          </div>
        </div>

        {/* <div className="Game">
          <div>
            <GameHeading />
          </div>
          <div>

          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
