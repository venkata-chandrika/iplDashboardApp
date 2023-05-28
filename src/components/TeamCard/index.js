// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  return (
    <li className="team-item">
      <Link to={`team-matches/${teamDetails.id}`} className="link-item ">
        <img
          src={teamDetails.teamImageUrl}
          alt={teamDetails.name}
          className="team-logo"
        />

        <p className="team-name">{teamDetails.name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
