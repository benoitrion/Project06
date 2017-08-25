import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Button from 'components/Button'
import Layout from 'components/Layout'

import 'styles/welcome.scss'

@connect(null, { push })
class Welcome extends Component {
  state = {
    isLoading: false,
  }
  handleContinue = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.props.push('/festivals')
    }, 800)
  }
  render() {
    const { isLoading } = this.state
    return (
      <Layout withNavBar={false} className="flex-auto items-center p3">
        <div className="justify-center items-center" style={{ marginTop: 70 }}>
          <img height={170} src="/assets/logo.png" />
        </div>
        <div onClick={() => this.props.push('/about')} className="flex-row items-center" style={{ position: 'absolute', top: 15, right: 15 }}><i className="material-icons mr1">info</i>À propos</div>
        <div
          className="mt4"
          style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}
        >
          Les Sardines
        </div>
        <div className="mt3" style={{ width: 250, textAlign: 'center' }}>
          Le camping social et solidaire des festivaliers
        </div>
        <Button
          isLoading={isLoading}
          className="welcome-button"
          onClick={this.handleContinue}
        >
          Continuer
        </Button>
      </Layout>
    )
  }
}

export default Welcome
