import { PlaceholderContainer } from './Placeholder.styled';
import placeholderImageDefault from '../../images/heroImage/hero-desc@1x.png';
import placeholderImageMob from '../../images/heroImage/hero-mob@2x.png';
import placeholderImageTab from '../../images/heroImage/hero-tab@2x.png';
import placeholderImageDesc from '../../images/heroImage/hero-desc@2x.png';

export const Placeholder = ({
  text = 'You haven`t added any favorite cocktails yet',
}) => {
  return (
    <PlaceholderContainer>
      <img
        src={placeholderImageDefault}
        srcSet={`${placeholderImageMob} 420w, ${placeholderImageTab} 768w, ${placeholderImageDesc} 1440w`}
        alt="Placeholder"
      />
      <p>{text}</p>
    </PlaceholderContainer>
  );
};
