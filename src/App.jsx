import { useState } from "react"
import './App.css';
import { PrimaryButton } from "./utils/buttons/Buttons";
import { ParticipantsCard } from "./utils/cards/Cards";

const meetingData = {
  participants: [
    {
      id: 1,
      name: "Tanay Pratap",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 2,
      name: "Akanksha Choudhary",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 3,
      name: "Tanvi Priya",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 4,
      name: "Manish M",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 5,
      name: "Swapnil Agarwal",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 6,
      name: "Shivam Verma",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 7,
      name: "Harsh Porwal",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 8,
      name: "Adarsh Pandya",
      profileImg: "",
      speakingStatus: true,
    },
    {
      id: 9,
      name: "Srishti Sinha",
      profileImg: "",
      speakingStatus: true,
    },
  ],
};

function App() {
  const [participants, setParticipants] = useState(meetingData.participants)

  function muteUnmuteHandler(id) {
    setParticipants((prevParticipants) => {
      return prevParticipants.map((participant) => {
        if (participant.id === id) {
          return {
            ...participant,
            speakingStatus: !participant.speakingStatus,
          };
        }
        return participant;
      });
    });
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Zoom</h1>
      </header>
      <div className='meeting'>
        <div className="participants">
          {participants.map(participant => <ParticipantsCard key={participant.name} participant={participant} />)}
        </div>
        <div className='control-panel'>
          {participants.map(participant => {
            return (
              <div className="control-panel__card" key={participant.name}>
                <h4>{participant.name}</h4>
                <PrimaryButton
                  onClick={() => muteUnmuteHandler(participant.id)}
                  text={participant.speakingStatus ? "Mute" : "Unmute"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
