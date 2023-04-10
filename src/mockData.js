import { v4 as uuidv4 } from 'uuid';
const mockData = [
  {
    id: uuidv4(),
    title: "📋Por hacer",
    tasks:[
        {
            id:uuidv4(),
            title:"Estudiar js"
        },
        {
            id:uuidv4(),
            title:"Inscribirse a curso de Ruby"
        },
        {
            id:uuidv4(),
            title:"Tareas de diseño"
        },
        {
            id:uuidv4(),
            title:"Parcial de analisis 2"
        },
    ]
  },
  {
    id: uuidv4(),
    title: "✏️En proceso",
    tasks:[
        {
            id:uuidv4(),
            title:"Estudiar js"
        },
        {
            id:uuidv4(),
            title:"Inscribirse a curso de Ruby"
        },
        {
            id:uuidv4(),
            title:"Tareas de diseño"
        },
        {
            id:uuidv4(),
            title:"Parcial de analisis 2"
        },
    ]
  },
  {
    id: uuidv4(),
    title: "✅Completado",
    tasks:[
        {
            id:uuidv4(),
            title:"Tareas de diseño"
        },
        {
            id:uuidv4(),
            title:"Parcial de analisis 2"
        },
    ]
  },
];
export default mockData;
