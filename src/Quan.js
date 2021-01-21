import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput, Alert, Snackbar, FAB, Avatar} from './components/elements'
import IconCheck from './components/icons/IcoCheckCircle';
import IconError from './components/icons/IcoAlertTriangle';
import IconPlus from './components/icons/IcoEdit2';
import IconInfo from "./components/icons/IcoInfo";
import IcoX from './components/icons/IcoX'
import theme from './utils/theme'
import {useState,useRef} from 'react'
import List from './components/List'
import ListItem from './components/ListItem'
import Tooltip from './components/elements/Tooltip';
import RippleButton from './components/RippleButton';
import MentionsInput from './components/Mentions';


function Quan() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [rangeValue, setRangeValue] = useState(0)

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10))
  }
  
  const [tags, setTags] = useState([])

  return (
    <div>
      <ThemeProvider theme = {theme.dark}>
        <Container headline = {"Simple List "}>
        <MentionsInput 
       mentions={tags}
       onChange={tags => setTags(tags)}
     />
         </Container>
      </ThemeProvider>
    </div>
  )
}



export default Quan;
