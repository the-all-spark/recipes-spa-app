import { Link } from 'react-router-dom';
import List from '@mui/material/List';

import H1Text from '@/components/H1Text/H1Text';
import H2Text from '@/components/H2Text/H2Text';
import GeneralPText from '@/components/GeneralPText/GeneralPText';
import GeneralListItem from '@/components/GeneralListItem/GeneralListItem';

const HomePage = () => {
  return (
    <>
      <H1Text>Welcome to FlavorJourney!</H1Text>

      <GeneralPText>Your Culinary Adventure Starts Here!</GeneralPText>
      <GeneralPText>
        Whether you're planning a weeknight dinner, a special celebration, or just trying something new, you've found
        your kitchen companion.
      </GeneralPText>
      <GeneralPText>
        Explore our <b>collection</b> of delicious, tried-and-tested recipes from around the world.
      </GeneralPText>

      <H2Text styles={{ marginTop: '30px' }}>What you can do here:</H2Text>
      <List sx={{ margin: '0 auto', width: '60%' }}>
        <GeneralListItem primary="Browse Recipes" secondary="Discover dishes by category, cuisine, or ingredient." />
        <GeneralListItem
          primary="Dive into Details"
          secondary="Each recipe comes with clear instructions, tips, and beautiful photos."
        />
        <GeneralListItem
          primary="Unlock More"
          secondary={
            <>
              <Link to="/login">Log in</Link>
              <span> to your account to save favorites or create personal cookbooks.</span>
            </>
          }
        />
      </List>

      <GeneralPText>Let's start cooking something amazing!</GeneralPText>
    </>
  );
};

export default HomePage;
