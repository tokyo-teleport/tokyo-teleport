import NeumoCard from './NeumoCard';
import RandomFontText from '../components/RandomFontText';

const About: React.FC = () => {
  return (
      <NeumoCard>
        <h2 className="text-xl font-bold mb-4">
          <RandomFontText>About</RandomFontText>
        </h2>

        <div>
          <RandomFontText>

            TokyoTeleport<br/><br/>


            </RandomFontText>


        </div>


      </NeumoCard>
  );
}

export default About;
