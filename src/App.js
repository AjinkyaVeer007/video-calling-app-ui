import React from "react";
import { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsHddStackFill,
  BsRecordCircle,
  BsFillMicFill,
  BsFillVolumeUpFill,
  BsThreeDots,
  BsFillFileMusicFill,
} from "react-icons/bs";

function App() {
  const [count, setCount] = useState(1);
  const [span, setSpan] = useState("");
  const [grid, setGrid] = useState("");
  const [member, setMember] = useState([]);
  const [hint, setHint] = useState("Click Invite Button to add Members");

  const handleCount = () => {
    setCount(count + 1);
    if (!(count % 2)) {
      setSpan("row-span-2");
    } else {
      setSpan("");
    }
    if (count > 2) {
      setGrid("grid-rows-2");
    } else {
      setGrid("");
    }
    setMember((oldValue) => [...oldValue, count]);
  };

  setTimeout(() => {
    setHint("");
  }, 3000);

  return (
    <div className="bg-[#21242b] h-screen text-white">
      <div className="flex justify-between items-center mx-[40px]">
        <h1 className="text-[40px]">
          Ch<span className="text-[#f1b103]">o</span>ira
        </h1>
        <h1 className="lg:block md:block hidden text-[25px]">
          Friday Night Jam
        </h1>
        <div className="flex justify-center items-center gap-2">
          <div className="p-3 border rounded font-bold">{count}</div>
          <button
            onClick={handleCount}
            className="m-4 border py-2 px-4 rounded text-[#f1b103] text-lg"
          >
            Invite
          </button>
          <h1 className="animate-bounce text-sm">{hint}</h1>
        </div>
      </div>
      <div className="flex mx-[50px] my-4 gap-[40px] h-2/3">
        <div className="flex flex-col gap-4">
          <div>
            <BsFillCameraVideoFill size={30} color={"#f1b103"} />
          </div>
          <div>
            <BsHddStackFill size={30} />
          </div>
        </div>
        <div className="w-full">
          <div
            className={`grid grid-flow-col h-full gap-2 p-2 rounded-lg bg-[#1a1b20] ${grid}`}
          >
            <div
              className={`bg-red-500 rounded bg-[url('https://cdn.pixabay.com/photo/2020/02/04/18/06/vector-4819009_960_720.png')] bg-contain bg-center bg-no-repeat ${span}`}
            ></div>
            {member.map(() => {
              return (
                <div className="bg-red-500 rounded bg-[url('https://cdn.pixabay.com/photo/2020/02/04/18/06/vector-4819009_960_720.png')] bg-contain bg-center bg-no-repeat"></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#21242b] lg:flex lg:flex-row md:flex md:flex-row flex-col justify-around">
        <div className="mb-2 lg:mb-0 md:mb-0 flex border rounded justify-center items-center divide-x gap-[10px]">
          <div>
            <BsFillFileMusicFill size={30} />
          </div>
          <div className=" flex flex-col justify-center items-center p-1">
            <h1>
              000<span>7</span>
            </h1>
            <h5>Bar</h5>
          </div>
          <div className="flex flex-col justify-center items-center p-1">
            <h1>1</h1>
            <h5>Beat</h5>
          </div>
          <div className="flex flex-col justify-center items-center p-1">
            <h1>- 120 +</h1>
            <h5>Tempo</h5>
          </div>
          <div className="flex flex-col justify-center items-center p-1">
            <h1>4/4</h1>
            <h5>Cmaj</h5>
          </div>
          <div className="p-3">
            <BsRecordCircle size={30} />
          </div>
        </div>
        <div className="flex gap-4 items-center bg-[#21242b]">
          <button className="bg-[#dc354b] px-4 py-3 rounded-lg">End Jam</button>
          <div className="border rounded px-4 py-3">
            <BsFillMicFill size={30} />
          </div>
          <div className="border rounded px-4 py-3">
            <BsFillCameraVideoFill size={30} />
          </div>
          <div className="border rounded px-4 py-3">
            <BsFillVolumeUpFill size={30} />
          </div>
          <div className="border rounded px-4 py-3">
            <BsThreeDots size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
