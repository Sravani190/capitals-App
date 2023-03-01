import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            onChange={this.onChangeCapital}
            value={activeCapitalId}
            className="option"
          >
            {countryAndCapitalsList.map(eachPlace => (
              <option key={eachPlace.id} value={eachPlace.id}>
                {eachPlace.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="input">is capital of which country?</label>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
