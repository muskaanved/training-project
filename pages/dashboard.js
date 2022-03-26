import { useEffect, useRef, useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import AppBar from '@mui/material/AppBar';
import AlarmIcon from '@mui/icons-material/Alarm';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { margin } from "@mui/system";

const Timer = () => {
  const [timer, setTimer] = useState(0); // 25 minutes
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef();

  useEffect(() => {
    if (firstStart.current) {
      console.log("first render, don't run useEffect for timer");
      firstStart.current = !firstStart.current;
      return;
    }

    console.log(start);
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      console.log("clear interval");
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    console.log("seconds " + seconds);
    const hours = Math.floor(seconds / (60 * 60));

    let divisor_for_minutes = seconds % (60 * 60);
    const mins = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    const seconds_ = Math.ceil(divisor_for_seconds);

    return (
      (hours == 0
        ? "00"
        : hours == 1
        ? "01"
        : hours == 2
        ? "02"
        : hours == 3
        ? "03"
        : hours == 4
        ? "04"
        : hours == 5
        ? "05"
        : hours == 6
        ? "06"
        : hours == 7
        ? "07"
        : hours == 8
        ? "08"
        : hours == 9
        ? "09"
        : hours.toString()) +
      ":" +
      (mins == 0
        ? "00"
        : mins == 1
        ? "01"
        : mins == 2
        ? "02"
        : mins == 3
        ? "03"
        : mins == 4
        ? "04"
        : mins == 5
        ? "05"
        : mins == 6
        ? "06"
        : mins == 7
        ? "07"
        : mins == 8
        ? "08"
        : mins == 9
        ? "09"
        : mins.toString()) +
      ":" +
      (seconds_ == 0
        ? "00"
        : seconds_ == 1
        ? "01"
        : seconds_ == 2
        ? "02"
        : seconds_ == 3
        ? "03"
        : seconds_ == 4
        ? "04"
        : seconds_ == 5
        ? "05"
        : seconds_ == 6
        ? "06"
        : seconds_ == 7
        ? "07"
        : seconds_ == 8
        ? "08"
        : seconds_ == 9
        ? "09"
        : seconds_.toString())
    );
  };

  return (
    <div className="pomView">
    
        <Stack direction="row" spacing={1} margin="5px 14px">
      <Chip
        label={!start ? "Check-in" : "Check-out"}
        onClick={toggleStart}
        // onDelete={handleDelete}
        deleteIcon={<AlarmIcon />} 
        sx={{bgcolor:"#ffdbdb"}}
      />
    {" "}
        <span style={{color:"red",margin:"7px 2px" }}>
            {dispSecondsAsMins(timer)}
        </span>
      
      </Stack>
         
       
    </div>
  );
};

function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
    }).catch( err => {
        console.log("u got an error:" + err)
    });
}
getLocalStream(); 
export default function Dashboard() {
    
    return (
        <div className="App">
        <Header/>
        <AppBar position="static"  sx={{ bgcolor: "#f2f2f2" , height:"40px", boxShadow: 0}}>
        <Timer/>
        </AppBar>
        {/* <Footer/> */}
    </div>
  );
}
