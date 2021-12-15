import './Cards.css'

export const ParticipantsCard = ({ participant }) => {
    return (
      <div className="participant-card">
        <h1 className="participant-name">{participant.name}</h1>
        <i
          className={
            participant.speakingStatus
              ? `fas fa-volume-up`
              : `fas fa-microphone-alt-slash`
          }
        ></i>
      </div>
    );
}
