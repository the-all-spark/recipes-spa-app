import { DifficultyLevelContainer } from '@/components/DifficultyLevel/DifficultyLevel.styled';
import DifficultyLevelCircle from '@/components/DifficultyLevelCircle/DifficultyLevelCircle';

interface DifficultyLevelProps {
  difficulty: string;
}

const getDifficultyLevel: (difficulty: string) => number = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return 1;
    case 'Medium':
      return 2;
    case 'Hard':
      return 3;
    default:
      return 0;
  }
};

const DifficultyLevel = ({ difficulty }: DifficultyLevelProps) => {
  const difficultyLevel = getDifficultyLevel(difficulty);

  let content = [];

  for (let i = 1; i <= difficultyLevel; i++) {
    content.push(<DifficultyLevelCircle key={i} isFilled={true} />);
  }
  for (let i = 0; i < 3 - difficultyLevel; i++) {
    content.push(<DifficultyLevelCircle key={i + 100} isFilled={false} />);
  }

  return (
    <DifficultyLevelContainer aria-label={`Difficulty Level - ${difficulty}`} title={`${difficulty}`}>
      {content}
    </DifficultyLevelContainer>
  );
};

export default DifficultyLevel;
