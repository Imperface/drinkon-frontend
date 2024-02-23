import { FollowUsWrapper, FollowUsTitle, FollowUsList, FollowUsListItem, FollowUsLink } from './FollowUs.styled';
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const FollowUs = () => {
   return (
      <FollowUsWrapper>
         <FollowUsTitle>Follow Us</FollowUsTitle>
         <FollowUsList>
            <FollowUsListItem><FollowUsLink href="https://www.facebook.com/goITclub/" target="_blank" rel="noopener noreferrer"><TiSocialFacebook style={{ fontSize: '24px' }} /></FollowUsLink></FollowUsListItem>
            <FollowUsListItem><FollowUsLink href="https://www.instagram.com/goitclub/" target="_blank" rel="noopener noreferrer"><AiFillInstagram style={{ fontSize: '24px' }} /></FollowUsLink></FollowUsListItem>
            <FollowUsListItem><FollowUsLink href="https://www.youtube.com/c/GoIT" target="_blank" rel="noopener noreferrer"><AiFillYoutube style={{ fontSize: '24px' }} /></FollowUsLink></FollowUsListItem>
         </FollowUsList>
      </FollowUsWrapper>
   );
};
