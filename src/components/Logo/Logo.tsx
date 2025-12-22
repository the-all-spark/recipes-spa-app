import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface LogoProps {
  styles?: SxProps | undefined;
}

const Logo = ({ styles }: LogoProps) => {
  const sxStyles = styles ? { lineHeight: 0, ...styles } : { lineHeight: 0 };

  return (
    <Box sx={sxStyles}>
      <Link to="/" aria-label="Go to home page">
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 40H7.5C3.35938 40 0 36.6406 0 32.5V7.5C0 3.35938 3.35938 0 7.5 0H31.25C33.3203 0 35 1.67969 35 3.75V26.25C35 27.8828 33.9531 29.2734 32.5 29.7891V35C33.8828 35 35 36.1172 35 37.5C35 38.8828 33.8828 40 32.5 40H30ZM7.5 30C6.11719 30 5 31.1172 5 32.5C5 33.8828 6.11719 35 7.5 35H27.5V30H7.5ZM10 11.875C10 12.9141 10.8359 13.75 11.875 13.75H25.625C26.6641 13.75 27.5 12.9141 27.5 11.875C27.5 10.8359 26.6641 10 25.625 10H11.875C10.8359 10 10 10.8359 10 11.875ZM11.875 17.5C10.8359 17.5 10 18.3359 10 19.375C10 20.4141 10.8359 21.25 11.875 21.25H25.625C26.6641 21.25 27.5 20.4141 27.5 19.375C27.5 18.3359 26.6641 17.5 25.625 17.5H11.875Z"
            fill="#fff"
          />
        </svg>
      </Link>
    </Box>
  );
};

export default Logo;
