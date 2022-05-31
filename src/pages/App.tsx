import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import AddressClaimModal from '../components/claim/AddressClaimModal'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import URLWarning from '../components/Header/URLWarning'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { ApplicationModal } from '../state/application/actions'
import { useModalOpen, useToggleModal } from '../state/application/hooks'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Earn from './Earn'
import Manage from './Earn/Manage'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import BackgroundLand from '../assets/images/bodybackground.png'
import CopyIco from '../assets/images/Vector.png'

import Vote from './Vote'
import VotePage from './Vote/VotePage'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  background-image: url(${BackgroundLand});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-color: #111; */
  @media (min-width: 1200px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1400px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 1600px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 100px;
  padding-left: 32px;
  padding-right: 32px;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-between;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`
const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`
const HeadTitle = styled.div`
  color: white;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 10px;
`

const HeadText = styled.div`
  color: white;
  font-size: 14px;
  line-height: 20px;
`

const ListCont = styled.ul`
  margin: 16px 0;
  list-style-type: disc;
  font-size: 14px;
  color: white;
  padding-left: 20px;
`

const ListedText = styled.li`
  line-height: 20px;
`

const AddressBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  border-radius: 8px;
  max-width: 450px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.13);
`

const AddressText = styled.div`
  border: none;
  color: white;
  font-size: 14px;
`

const CopyButton = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  padding: 4px 8px;
  border-radius: 5px;
`

const ChartButton = styled.div`
  margin-top: 16px;
  padding: 5px 10px;
  width: 120px;
  text-align: center;
  color: white;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 5px;
`

const StateText = styled.div`
  margin: 24px auto;
  font-size: 36px;
  font-weight: bold;
  color: white;
`
const SwapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

function TopLevelModals() {
  const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
  const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}

export default function App() {
  return (
    <Suspense fallback={null}>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <AppWrapper>
        <URLWarning />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <TechContainer>
            <HeadTitle>I’m in it for the technology</HeadTitle>
            <HeadText>
              $Pulsedoge is a community meme token on Binance Smart Chain. <br />
              We’re here to bring adoption to PulseChain, and show the world which doge has the biggest swinging bollocks in crypto.<br />
              All holders will receive an equal 1 : 1 airdrop on PulseChain at launch.
            </HeadText>
            <ListCont>
              <ListedText>The first Blockchain Certificate of Deposit</ListedText>
              <ListedText>High returns, no minimum & decentralized design</ListedText>
              <ListedText>So far the HEX price went up</ListedText>
            </ListCont>
            <AddressBox>
              <AddressText>0xd4d55b811d9ede2adce61a98d67d7f91bffce495</AddressText>
              <CopyButton>
                <img src={CopyIco} width="10px" alt="copy" />
              </CopyButton>
            </AddressBox>
            <ChartButton>Price Chart</ChartButton>
          </TechContainer>
          <SwapBox>
            <Popups />
            <Polling />
            <TopLevelModals />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/uni" component={Earn} />
                <Route exact strict path="/vote" component={Vote} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact path="/create" component={AddLiquidity} />
                <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route exact strict path="/migrate/v1" component={MigrateV1} />
                <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange} />
                <Route exact strict path="/uni/:currencyIdA/:currencyIdB" component={Manage} />
                <Route exact strict path="/vote/:id" component={VotePage} />
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
          </SwapBox>
          <Marginer />
        </BodyWrapper>
        <StateText>Stats</StateText>
      </AppWrapper>
    </Suspense>
  )
}
