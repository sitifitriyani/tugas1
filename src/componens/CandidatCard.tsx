import { Candidate } from './interface';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
        <h1 className="candidate-number">{candidate.nomor}</h1>
      <img src={candidate.foto} alt={candidate.nama} />
      <h2>{candidate.nama}</h2>
      <p>{candidate.angkatan}</p>
      <div className='buttons'>
      <button className="profile-button">Profil</button>
      <button className="more-info-button">Visi Misi</button>     
       </div>
    </div>
  );
};

export default CandidateCard;
