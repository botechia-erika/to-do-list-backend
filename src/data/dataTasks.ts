import { CURRENTSTATUS, Task } from '../types/types'
const dataTasks: Task[] = [{
    id: "t001",
    title: "HEADER COMPONENT",
    description: "CRIAR COMPONENTE HEADER DO SITE",
    status: CURRENTSTATUS.NAOINICIADA
},
{ id: "t002", title: "FOOTER COMPONENT", description: "CRIAR COMPONENTE FOOTER DO SITE", status: CURRENTSTATUS.NAOINICIADA },
{ id: "t003", title: "TESTING USABILITY", description: "TESTAR USABILIDADE DE TODO SITE", status: CURRENTSTATUS.NAOINICIADA },
{ id: "t004", title: "DEPLOY SURGE", description: "CRIAR DEPLOY SITE EM SURGE", status: CURRENTSTATUS.NAOINICIADA }
]


export default dataTasks