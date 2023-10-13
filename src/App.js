import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux"
import store from "./app/store"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          p: 'p',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h3',
          subtitle2: 'h4',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768, 
      lg: 992, 
      xl: 1200,
      xxl: 1440,  
    },
  },
  palette: {
    bannerBlack: 'rgba(0,0,0,1)',
  },
  typography: {
    // Your typography settings
    h5: {
      fontSize: '1.5rem',
      // Adjust other h1 styles here
    },
    body1: {
      fontSize: '1rem',
      // Adjust other h1 styles here
    },
    body2: {
      fontSize: '0.8rem',
      // Adjust other h1 styles here
    },
    // Add styles for other typography variants as needed
  },
  // Other theme settings
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
