//
//
// ATENÇÃO: Não é necessário mexer neste arquivo.
// Novos componentes devem ir dentro do componente AppContainer
//
//

import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/BoasVindas'
// import amber from '@material-ui/core/colors/amber';

const MyTheme = createMuiTheme({
    palette:{
        primary: {
            main: '#ff8f00'
        },
        secondary: {
            main: '#fff8e1'
        }
    }
})

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	insertionPoint: document.getElementById('jss-insertion-point'),
})

// const theme = createMuiTheme()

function App() {
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={MyTheme}>
				<CssBaseline />
				<AppContainer />
			</MuiThemeProvider>
		</JssProvider>
	)
}

export default App