import BeerTable from "./components/BeerTable"
import BeerDetails from "./components/BeerDetails"

export default [
  {
    path: '/', component: BeerTable
  },
  {
    path: '/beer/:id', component: BeerDetails, props: true, name: 'beer'
  }
]