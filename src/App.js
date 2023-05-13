import Button from '@mui/material/Button'
import Navbar from "./components/Navbar/Navbar"

function App() {
  
  return(
    <div>
      <Button
        variant='outlined'
        onClick={() => console.log('click event')}> 
        MUI Button 
      </Button>
      <Navbar />
    </div>
  )

}
export default App;