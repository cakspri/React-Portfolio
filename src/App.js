import Navbar from './components/Navbar/Navbar'
import BandList from './components/BandList/BandList'
import Carousel  from './components/Carousel/Carousel'
import './App.css'

const bandLinks = [
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faboutmanchester.co.uk%2Fwp-content%2Fuploads%2F2017%2F11%2Ffall-out-boy.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmusicforgood.tv%2Fwp-content%2Fuploads%2F2013%2F01%2FTheUsed.jpeg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftherockrevival.com%2Fwp-content%2Fuploads%2F2013%2F01%2FYellowcard-band.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksassets.timeincuk.net%2Fwp%2Fuploads%2Fsites%2F55%2F2018%2F04%2FCHVRCHES-2018-EXCLUSIVE-please-credit-Danny-Clinch.jpg&f=1&nofb=1'
]

const App = () => {
  return (
    <>
      <Navbar />
      <BandList people=""/>
      <Carousel links={bandLinks} />
    </>
  )
}

export default App
