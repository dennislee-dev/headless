import { useState, useContext, useEffect } from "react";
import { formatter } from "../../utils/helpers";

function Timer({price}) {

    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const target = new Date("01/18/2022 00:00:00");
  
      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
  
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
  
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
  
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
  
        if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
          setPartyTime(true);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);


    return (
      <div className="bg-[#f6f6f6f6]  p-4 space-y-4 text-[15px] border-2 ">
                <div className="flex space-x-2 justify-center pb">
                  <div className="text-center">
                    <div className="text-general text-2xl">{days}</div>
                    <div>days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-general text-2xl">{hours}</div>
                    <div>hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-general text-2xl">{minutes}</div>
                    <div>minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-general text-2xl">{seconds}</div>
                    <div>seconds</div>
                  </div>
                </div>
                <div className="text-center">
                  Beware! Winter sales comes to an end, at the end of the
                  countdown the price will go back to 
                  <span className="font-semibold text-general px-1">
                    {price}
                  </span>
                  so order now to take advantage of discounts!
                </div>
              </div>
    );
  }
  export default Timer;
  