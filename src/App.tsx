import { candidates } from './componens/Candidate';
import CandidateCard from './componens/CandidatCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Calon Ketua</h1>
      <div className="candidate-list">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default App;
