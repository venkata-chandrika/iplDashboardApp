// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(formattedData)
    this.setState({
      isLoading: false,
      teamsData: formattedData,
    })
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-spin">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, teamsData} = this.state
    return (
      <div className="home-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            this.renderLoader()
          ) : (
            <ul className="teams-list">
              {teamsData.map(eachData => (
                <TeamCard key={eachData.id} teamDetails={eachData} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
