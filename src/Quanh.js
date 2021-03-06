import styled, {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {
  Button, 
  ButtonGroup, 
  Checkbox, 
  CheckboxGroup, 
  Radio, 
  RadioGroup, 
  Slider, 
  SimpleInput, 
  Toggle, 
  ToggleGroup, 
  Link, 
  Modal, 
  Badge, 
  Breadcrumb, 
  Avatar, 
  AvatarGroup, 
  TabPane, 
  Tab,
  Alert,
  Calendar,
  Snackbar,
  FAB,
  Tooltip,
  Pagination,
  Label,
  Combox,
  Table,
  MentionInput,
  TypeWriter,
  MultiMentionInput, 
  TeamsCalendar
} from './components/elements'
import {H1, H2, H3, H4, H5, H6, P, HL} from './components/elements/Typography'
import theme from './utils/theme'
import {useState, useEffect} from 'react'
import Box from './components/Box'
import IcoMail from './components/icons/IcoMail'
import IcoSettings from './components/icons/IcoSettings'
import IcoX from './components/icons/IcoX'
import IcoArrowDownCircle from './components/icons/IcoArrowDownCircle'
import IcoArrowUpCircle from './components/icons/IcoArrowUpCircle'
import IcoChevronLeft from './components/icons/IcoChevronLeft'
import IcoChevronRight from './components/icons/IcoChevronRight'
import IcoCheck from './components/icons/IcoCheck'
import {FContainer, Row, Col} from './components/layouts'
import CustomMentionInput from './components/elements/Mention/CustomMentionInput'

const FontProvider = styled.div`
  font-family: ${props => props.font}, "Heveltica", "Segoe UI";
`;
function Quanh() {
  const [todoData, setTodoData] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => setTodoData(data))
      })
  }, [])
  useEffect(() => {
    document.title = "Is online ? " + navigator.onLine
  })
  const ComboxData = [
    {id: 1, name: "La Quoc Anh", job: "Staff", display: "La Quoc Anh", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=anh.lq@ttgvn.com"},
    {id: 2, name: "Tran Thach Thao", job: "Staff", display: "Tran Thach Thao", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=thao.tt@ttgvn.com"},
    {id: 3, name: "Le Hoang Vu", job: "Staff", display: "Le Hoang Vu", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=vu.lh@ttgvn.com"},
    {id: 4, name: "Nguyen Hoang Tan", job: "Lead", display: "Nguyen Hoang Tan", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=tan.nh@ttgvn.com"},
    {id: 5, name: "Ngo Kim Son", job: "Staff", display: "Nguyen Hoang Tan", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=son.nk@ttgvn.com"},
    {id: 6, name: "Nguyen Quoc Dat", job: "Intern", display: "Nguyen Quoc Dat", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=dat.nq@ttgvn.com"},
    {id: 7, name: "Van Thuan Quan", job: "Intern", display: "Van Thuan Quan", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=quan.vt@ttgvn.com"}
  ]
  const hashTagData = [
    {id: 1, name: "Calm"},
    {id: 2, name: "Energetic"},
    {id: 3, name: "Elegant"},
    {id: 4, name: "Consistent"},
    {id: 5, name: "Confidence"},
  ]
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mattis arcu semper elementum. Nullam accumsan erat vitae quam sagittis placerat. In sodales mi eros, id commodo nulla fermentum in. Cras vehicula, sapien id fringilla lobortis, erat nisl rhoncus ante, et maximus libero tellus commodo ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus justo nunc, sed molestie tortor dictum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris maximus est quis ligula ullamcorper semper. Integer tempus orci dui, a lacinia lorem tempus ut. Donec sapien leo, sodales eu odio molestie, cursus lacinia quam. Aenean rhoncus rhoncus erat, nec volutpat nulla ullamcorper sit amet. Maecenas finibus, ante in suscipit rhoncus, massa lorem posuere est, vel faucibus turpis neque sit amet augue. Nulla sit amet mauris sit amet augue pharetra luctus vitae nec turpis. Duis sollicitudin commodo nisi quis mollis."
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("dark")
  const [textValue, setTextValue] = useState("")
  const [modalState, setModalState] = useState(false)
  const [modalState2, setModalState2] = useState(false)
  const [snackbarState, setSnackbarState] = useState(false)
  const [font, setFont] = useState("")
  const [activePage, setActivePage] = useState(1)
  const [mentions, setMentions] = useState([])
  const [mentions2, setMentions2] = useState([])
  const [plainText, setPlainText] = useState("")
  return (
    <div>
      <ThemeProvider theme={theme[myTheme] || theme.light}>
        <FontProvider font={font}>
          <Container fullWidth>
            <TypeWriter as={H2} text="Design Guidelines React Component"/>
          </Container>  
          <Container headline={theme[myTheme].name} fullWidth>
            <Container headline="Display Mode" >
              <ButtonGroup fullWidth onSelect={x => setMode(x)}>
                <Button value="edit" default >Edit</Button>
                <Button value="view">View</Button>
                <Button value="disabled">Disabled</Button>
              </ButtonGroup>
            </Container>

            <Container headline="Theme" >
              <ButtonGroup fullWidth onSelect={x => setTheme(x)}>
                <Button value="light">Light</Button>
                <Button value="dark">Dark</Button>
              </ButtonGroup>
            </Container>

            <Container headline="Font" >
              <ButtonGroup fullWidth onSelect={x => setFont(x)}>
                <Button value="Noto Sans SC" default>Noto Sans SC</Button>
                <Button value="Roboto">Roboto</Button>
                <Button value="Mulish">Mulish</Button>
                <Button value="Noto Sans JP">Noto Sans JP</Button>
                <Button value="Nunito">Nunito</Button>
                <Button value="Quicksand">Quicksand</Button>
                <Button value="Inter">Inter</Button>
              </ButtonGroup>
            </Container>

            <br/>
            <Container headline={"Elements"} fullWidth>
              <Box headline="Mention" block>
                <Label>
                  Mention: {mentions.length > 0 ? mentions.map(m => m.name).join(', ') : "No one"} {mentions.length > 1 ? " are " : " is "} mentioned
                </Label>
                <MentionInput data={ComboxData} getMention={mens => setMentions(mens)}/>
                <Label>Multi Mention Input (use @ or #)</Label>
                <MultiMentionInput data1={ComboxData} data2={hashTagData}/>
                <Label>Custom Mention</Label>
                <CustomMentionInput data={ComboxData}/>
              </Box>
              <Box headline="Typography">
                <Box.Item>
                  <H1>The biggest header.</H1>
                  <H2 color="secondary">Secondary color, very nice.</H2>
                  <H3 color="success">Success, you made it.</H3>
                  <H4 color="warning">Something may go wrong.</H4>
                  <H5 color="danger">Beware, very dangerous.</H5>
                  <H6>Almost before we knew it, we had left the ground.</H6>
                  <P>Almost before we knew it, we had left the ground.</P>
                  <P lead>A lead paragraph, make it stands out.</P>
                  <P>This <HL>beautiful text</HL> is highlighted</P>
                </Box.Item>
              </Box>
              <Box headline="Table">
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width="5%">ID</Table.HeaderCell>
                      <Table.HeaderCell width="25%">Name</Table.HeaderCell>
                      <Table.HeaderCell>Title</Table.HeaderCell>
                      <Table.HeaderCell width="15%">Completed</Table.HeaderCell>
                      <Table.HeaderCell width="5%">More</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {todoData.slice((activePage-1)*3, (activePage-1)*3 + 3).map(d => 
                      <Table.Row key={d.id}>
                        <Table.Cell textAlign="center">{d.id}</Table.Cell>
                        <Table.Cell textAlign="center">{users.find(user => user.id === d.userId).name || "Unknown"}</Table.Cell>
                        <Table.Cell textAlign="center">{d.title}</Table.Cell>
                        <Table.Cell textAlign="center">
                          {d.completed ? <Button type="text" color="success"><IcoCheck/></Button> : <Button type="text" color="danger"><IcoX/></Button>}
                        </Table.Cell>
                        <Table.Cell textAlign="center"><Button type="text" color="info" round><IcoChevronRight/></Button></Table.Cell>
                      </Table.Row>
                      )}
                  </Table.Body>
                  <Table.Footer>
                    <Table.Cell colSpan="2" textAlign="center">
                      {"Total Row: " + todoData.length}
                    </Table.Cell>
                    <Table.Cell colSpan="99" textAlign="right">
                      <Pagination totalPage={Math.ceil(todoData.length / 3)} boundary={1} sibling={1} onSelect={(x) => setActivePage(x)} activePage={activePage} />
                    </Table.Cell>
                  </Table.Footer>
                </Table>
              </Box>

              <Box headline="Pagination" block>
                <Box.Item>
                  <Label>Active Page: <strong>{activePage}</strong></Label>
                  <Pagination totalPage={Math.ceil(todoData.length / 3)} boundary={1} sibling={1} onSelect={(x) => setActivePage(x)} activePage={activePage} />
                </Box.Item>
              </Box>
              <Box headline="Tooltip">
                <Tooltip content="Useful animation about this button">
                  <Button demo color="danger" type="contained">Hover to see tooltip at the bottom</Button>
                </Tooltip>
                <Tooltip content="Useful animation about this button" position="top">
                  <Button demo color="success" type="contained">Hover to see tooltip at the top</Button>
                </Tooltip>
              </Box>
              
              <Box headline="Snackbar" block>
                <Snackbar visible={snackbarState} onClose={() => setSnackbarState(false)} timeOut={2000}>
                  <Alert color="info" action={<IcoX onClick={() => setSnackbarState(!snackbarState)}/>}>Informative message</Alert>
                </Snackbar>
                <Button demo onSelect={() => setSnackbarState(!snackbarState)}>Toggle Snackbar</Button>
              </Box>
              <Box headline="Alert">
                <Alert demo color="success" action={<strong>UNDO</strong>}>
                  <Alert.Title>Success</Alert.Title>
                  This is a success message with a title!
                </Alert>
                <Alert demo color="danger" type="contained" action={<IcoX/>}>This is a danger message!</Alert>
              </Box>
              <Box headline="Combox">
                <Box.Item>
                  <Label>Select One</Label>
                  <Combox demo>
                  {ComboxData.map((data) => 
                    <Combox.Option id={data.id} searchText={[data.job]} value={data.name} key={data.id}>{data.name}</Combox.Option>
                  )}
                  </Combox>
                </Box.Item>
                <Box.Item>
                  <Label>Select Multiple</Label>
                  <Combox demo multiple>
                  {ComboxData.map((data) => 
                    <Combox.Option id={data.id} searchText={[data.job]} value={data.name} key={data.id}>{data.name}</Combox.Option>
                  )}
                  </Combox>
                </Box.Item>
                <Box.Item>
                  <Label>Select Multiple with Search (Default Intern)</Label>
                  <Combox demo multiple searchable>
                  {ComboxData.map((data) => 
                    <Combox.Option default={data.job === "Intern"} id={data.id} searchText={[data.job]} value={data.name} key={data.id}>{data.name}</Combox.Option>
                  )}
                  </Combox>
                </Box.Item>
              </Box>
              <Box headline="Tab" block>
                <div style={{height: "80px"}}>
                  <Tab name="group tab" fullHeight>
                    <TabPane name="Active" value="1" key="1">
                      <Button>Active Tab 160px</Button>
                    </TabPane>
                    <TabPane name="Default Tab" value="2" key="2" selected>
                      This is default
                    </TabPane>
                    <TabPane name="Just Another Tab" value="3" key="3">
                      Just Another Tab
                    </TabPane>
                    <TabPane name="Last Tab" value="4" key="4">
                      Last Tab
                    </TabPane>
                    <TabPane name="Disabled Tab" value="5" key="5" disabled>
                      You Can't See This! Can You?
                    </TabPane>
                  </Tab>
                </div>
              </Box>
              <Box headline="Avatar">
                  <div style={{width: "100px", height: "100px", padding: "8px"}}>
                    <Avatar alt="Quan Van" fluid={true} size="large"></Avatar>
                  </div>
                  <Avatar demo alt="Quan Van" fluid={false} size="small"></Avatar>
                  <Avatar demo alt="Quan Van" fluid={false} size="medium"></Avatar>
                  <Avatar demo alt="Quan Van" fluid={false} size="large"></Avatar>
                  <AvatarGroup demo  max={9} size="small">
                    <Avatar alt="A"></Avatar>
                    <Avatar alt="B"></Avatar>
                    <Avatar alt="C"></Avatar>
                  </AvatarGroup>
                  <AvatarGroup demo  max={9} size="medium">
                    <Avatar alt="A"></Avatar>
                    <Avatar alt="B"></Avatar>
                    <Avatar alt="C"></Avatar>
                  </AvatarGroup>
                  <AvatarGroup demo  max={9} size="large">
                    <Avatar alt="A"></Avatar>
                    <Avatar alt="B"></Avatar>
                    <Avatar alt="C"></Avatar>
                  </AvatarGroup>
                  <AvatarGroup demo max={4} size="large">
                    <Avatar alt="A"></Avatar>
                    <Avatar alt="B"></Avatar>
                    <Avatar alt="C"></Avatar>
                    <Avatar alt="D"></Avatar>
                    <Avatar alt="E"></Avatar>
                  </AvatarGroup>
              </Box>
              <Box headline="Breadcrumb" block>
                <Breadcrumb>
                  <a href="google.com">Home</a>
                  <a href="google.com">Trending</a>
                  <a href="google.com">Funny</a>
                </Breadcrumb>
              </Box>
              <Box headline="Badge" block>
                <Badge demo icon={<IcoMail/>} value={1} max={10} dot/>
                <Badge demo icon={<IcoMail/>} value={99} max={999}/>
                <Badge demo icon={<IcoMail/>} value={50} max={10}/>
                <Badge demo icon={<IcoMail/>} value={0} max={10} showZero/>
                <Badge demo icon={<IcoMail/>} value={0} max={10}/>
              </Box>
              <Box headline="Modal">
                <Box.Item>
                  <Modal visible={modalState} onClickOutside={() => setModalState(false)} title="Great Title">
                    {text}
                  </Modal>
                  <Button demo onSelect={() => setModalState(true)}>Open Modal With Title</Button>
                </Box.Item>
                <Box.Item>
                  <Modal visible={modalState2} onClickOutside={() => setModalState2(false)}>
                    {text}
                  </Modal>
                  <Button color="secondary" demo onSelect={() => setModalState2(true)}>Open Modal With No Title</Button>
                </Box.Item>
              </Box>
              <Box headline="Link">
                <Box.Item>Very beautiful <Link href="https://google.com">link</Link></Box.Item>
                <Box.Item>Visited or not <Link href="#">link</Link></Box.Item>
                <Box.Item>It can have <Link href="#" underline>underline</Link></Box.Item>
              </Box>
              <Box headline="Text Input">
                <Box.Item>
                  <Label>Auto Width Input</Label>
                  <SimpleInput displayMode={mode} defaultValue="my default text is here" onChange={(v) => setTextValue(v)} value={textValue}/>
                </Box.Item>
                <Box.Item>
                  <Label>Full Width Input</Label>
                  <SimpleInput fullWidth displayMode={mode} defaultValue="my default text is here" onChange={(v) => setTextValue(v)} value={textValue}/>
                </Box.Item>
                
              </Box>
              <Box headline="Button" block>
                <Button color="success" size="small" displayMode={mode} demo onSelect={() => console.log("Wow")}>Success small</Button>
                <Button color="warning" size="medium" displayMode={mode} demo >Warning medium</Button>
                <Button color="danger" size="large" displayMode={mode} demo >Danger large</Button>
                <Button color="primary"size="medium" type="contained" displayMode={mode} demo >Primary</Button>
                <Button color="secondary"size="small" displayMode={mode} demo >Secondary</Button>
                <Button displayMode={mode} demo type="outline" >Outline</Button>
                <Button size="medium" displayMode={mode} demo type="text" >Text</Button>
                <Button size="medium" displayMode={mode} demo type="contained" ><IcoSettings left/> Settings</Button>
                <Button size="medium" displayMode={mode} demo type="contained" > Settings</Button>
              </Box>
              <Box headline="Calendar">
                  <Calendar demo/>
                  <TeamsCalendar demo/>
              </Box>
              <Box headline="Toggle">
                <Box.Item>
                  <Label>Toggle</Label>
                  <Toggle displayMode={mode} onSelect={v => console.log(v)}>Awesome</Toggle>
                  <Label>Default true</Label>
                  <Toggle displayMode={mode} onSelect={v => console.log(v)} default>Awesome</Toggle>
                </Box.Item>
                <Box.Item>
                  <Label>Toggle Group</Label>
                  <ToggleGroup displayMode={mode} onSelect={v => console.log(v)}>
                    <Toggle value={1} default>One</Toggle>
                    <Toggle value={2}>Two</Toggle>
                  </ToggleGroup>
                </Box.Item>
                <Box.Item>
                  <Label>Toggle Group Horizontal</Label>
                  <ToggleGroup horizontal displayMode={mode}>
                    <Toggle value={1}>One</Toggle>
                    <Toggle value={2}>Two</Toggle>
                  </ToggleGroup>
                </Box.Item>
              </Box>
              <Box headline="Checkbox">
                <Box.Item>
                  <Label>Checkbox</Label>
                  <Checkbox displayMode={mode} onSelect={v => console.log(v)} default>Awesome</Checkbox>
                </Box.Item>
                <Box.Item>
                  <Label>Checkbox Group</Label>
                  <CheckboxGroup displayMode={mode} onSelect={x => console.log(x)}>
                    <Checkbox value={1} default>One</Checkbox>
                    <Checkbox value={2}>Two</Checkbox>
                  </CheckboxGroup>
                </Box.Item>
                <Box.Item>
                  <Label>Checkbox Group Horizontal</Label>
                  <CheckboxGroup horizontal displayMode={mode}>
                    <Checkbox value={1}>One</Checkbox>
                    <Checkbox value={2}>Two</Checkbox>
                  </CheckboxGroup>
                </Box.Item>
              </Box>
              <Box headline="Radio Group">
                <Box.Item>
                  <Label>Radio Group</Label>
                  <RadioGroup displayMode={mode}>
                    <Radio value={1} default>One</Radio>
                    <Radio value={2}>Two</Radio>
                    <Radio value={3}>Three</Radio>
                  </RadioGroup>
                </Box.Item>
                <Box.Item>
                  <Label>Radio Group Horizontal</Label>
                  <RadioGroup horizontal displayMode={mode}>
                    <Radio value={1}>One</Radio>
                    <Radio value={2}>Two</Radio>
                    <Radio value={3}>Three</Radio>
                  </RadioGroup>
                </Box.Item>
              </Box>
              <Box headline="Button Group">
                <Box.Item>
                  <ButtonGroup displayMode={mode}>
                    <Button value={1} default>One</Button>
                    <Button value={2}>Two</Button>
                    <Button value={3}>Three</Button>
                  </ButtonGroup>
                </Box.Item>
                <Box.Item>
                  <ButtonGroup displayMode={mode}>
                    <Button value={1} default><IcoChevronLeft/></Button>
                    <Button value={2}><IcoSettings/></Button>
                    <Button value={3}><IcoChevronRight/></Button>
                  </ButtonGroup>
                </Box.Item>
                <Box.Item>
                  <ButtonGroup displayMode={mode} fullWidth equalSize>
                    <Button value={1} default>Apple</Button>
                    <Button value={2}>Orange</Button>
                    <Button value={3}>Strawberry</Button>
                    <Button value={4}>Mango</Button>
                    <Button value={5}>Avocado</Button>
                  </ButtonGroup>
                </Box.Item>

              </Box>              
              <Box headline="Slide">
                <Slider displayMode={mode} defaultValue={50} max={500} width={700}/>
              </Box>
              
              {/* <Box headline="Loading">
                <Loading1 style={{'background':'#0b0b0ba8', 'width': '100%', 'justify-content':'center'}}>
                  <Loading1.Circle ColorBorder="red"/>
                  <Loading1.Circle ColorBorder="yellow" ColorAnimation="orange"/>
                  <Loading1.Circle ColorBorder="blue"/>
                </Loading1>
                <div style={{'width':'100%', 'background':'#0b0b0ba8', 'margin':'auto'}}>
                  <Loading2>
                    <Loading2.Dot/>
                    <Loading2.Dot/>
                    <Loading2.Dot/>
                  </Loading2>
                </div>
                <Loading3/>
                <div style={{'margin-top':'30px'}}>
                  <Loading4/>
                </div>
                <div style={{'width':'30%', 'margin':'auto', 'margin-top':'50px', 'text-align':'center'}}>
                  <Loading5/>
                </div>
                <div style={{'width':'30%', 'margin':'auto', 'margin-top': '50px', 'text-align':' center'}}>
                  <Loading6/>
                </div>
              </Box> */}

              <FAB size="large" onClick={() => document.documentElement.scrollTop = 0}>
                <IcoArrowUpCircle/>
              </FAB>
              <FAB size="large" onClick={() => document.documentElement.scrollTop = document.body.scrollHeight} position>
                <IcoArrowDownCircle/>
              </FAB>
            </Container>
          </Container>
        </FontProvider>
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
