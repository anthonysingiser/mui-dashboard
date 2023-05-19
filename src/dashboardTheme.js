import {createTheme} from '@mui/material/styles'

export const dashboardTheme = createTheme ({
    components: {

        MuiButton: {

            styleOverrides: {

                 contained: {
            

                 },
            },
        },
    },
    palette: {
        primary: {
            main: '#0044ff'
        }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      spacing: [4, 8, 12, 16, 20]
})

export default dashboardTheme