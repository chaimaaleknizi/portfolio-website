import Link from "next/link"

import {FaGithub, FaLinkedin, FaBehance, FaDribbble} from "react-icons/fa";

const socials = [
  {icon: <FaGithub />, path: "" },
  {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/chaimaa-l-422262159?trk=public_profile_samename-profile&originalSubdom" },
  {icon: <FaBehance />, path: "https://www.behance.net/chama-" },
  {icon: <FaDribbble />, path: "https://dribbble.com/shamy0" },
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social