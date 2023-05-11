import Button from '@mui/material/Button'

function App() {
  
  return(
    <div>
      <Button
        variant='outlined'
        onClick={() => console.log('click event')}> 
        MUI Button 
      </Button>
    </div>
  )

}
export default App;