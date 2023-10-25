var lista_Usuario = [
  {
    nombres: "Soy el Admin",
    correo: "admin@gmail.com",
    dni: "12345678",
    telefono: "123456789",
    usuario: "admin",
    contrasenia: "admin123456",
    id_rol: 1,
  },
  {
    nombres: "Soy el Docente",
    correo: "docentet@gmail.com",
    dni: "12345678",
    telefono: "123456789",
    usuario: "docente",
    contrasenia: "docente123456",
    id_rol: 2,
  },
  {
    nombres: "Soy el Alumno",
    correo: "alumno@gmail.com",
    dni: "12345678",
    telefono: "123456789",
    usuario: "alumno",
    contrasenia: "alumno123456",
    id_rol: 2,
  },
];

var lista_Roles = [
  {
    id: 1,
    nombre: "Administrador",
    cod: "ADM",
  },
  {
    id: 2,
    nombre: "Docente",
    cod: "DOC",
  },
  {
    id: 3,
    nombre: "Alumno",
    cod: "ALU",
  },
];

var lista_Programas = [
  {
    Cod_Programa: "P001",
    Nombre_Programa: "Especialización de Excel",
    Cursos: ["C001", "C002","C003"],
    Fecha_inicio: "01/10/2023",
    Fecha_Fin: "15/12/2023",
  },
  {
    Cod_Programa: "P002",
    Nombre_Programa: "Especialización de Power BI",
    Cursos: ["C004", "C005"],
    Fecha_inicio: "01/11/2023",
    Fecha_Fin: "20/11/2023",
  },
  {
    Cod_Programa: "P003",
    Nombre_Programa: "Técnicas de venta",
    Cursos: ["C006","C007","C008","C009"],
    Fecha_inicio: "01/11/2023",
    Fecha_Fin: "20/12/2023",
  },
  {
    Cod_Programa: "P004",
    Nombre_Programa: "Python",
    Cursos: ["C0010"],
    Fecha_inicio: "01/11/2023",
    Fecha_Fin: "20/12/2023",
  },
  
];

let lista_Cursos = [
  {
    Cod_Curso: "C001",
    Nombre_Curso: "Excel Módulo I",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T001.1",
        Nombre_Tema: "Conceptos Básicos E Ingreso y Edición de Datos",
      },
      {
        Cod_Tema: "T001.2",
        Nombre_Tema: "Formatos y Formulas",
      },
      {
        Cod_Tema: "T001.3",
        Nombre_Tema: "Funciones",
      },
      {
        Cod_Tema: "T001.4",
        Nombre_Tema: "Manejo de Listas de Datos y ventanas",
      },
      {
        Cod_Tema: "T001.5",
        Nombre_Tema: "Hipervínculos y Gráficos",
      },
      {
        Cod_Tema: "T001.6",
        Nombre_Tema: "Impresión",
      },
    ],
  },
  {
    Cod_Curso: "C002",
    Nombre_Curso: "Excel Módulo II",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T002.1",
        Nombre_Tema: "Funciones avanzadas",
      },
      {
        Cod_Tema: "T002.2",
        Nombre_Tema: "Manejo de Tiempos",
      },
      {
        Cod_Tema: "T002.3",
        Nombre_Tema: "Formulas matriciales",
      },
      {
        Cod_Tema: "T002.4",
        Nombre_Tema: "Esquema y Consolidado de Datos",
      },
      {
        Cod_Tema: "T002.5",
        Nombre_Tema: "Filtros Avanzados",
      },
      {
        Cod_Tema: "T002.6",
        Nombre_Tema: "Validación de Datos",
      },
      {
        Cod_Tema: "T002.7",
        Nombre_Tema: "Tablas Dinámicas",
      },
      {
        Cod_Tema: "T002.8",
        Nombre_Tema: "Protección de Datos en Excel",
      },
    ],
  },
  {
    Cod_Curso: "C003",
    Nombre_Curso: "Excel Módulo III",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T003.1",
        Nombre_Tema: "Gestión de base de datos",
      },
      {
        Cod_Tema: "T003.2",
        Nombre_Tema: "Análisis de la Información",
      },
      {
        Cod_Tema: "T003.3",
        Nombre_Tema: "Herramientas de análisis de datos",
      },
      {
        Cod_Tema: "T003.4",
        Nombre_Tema: "Controles de formularios",
      },
      {
        Cod_Tema: "T003.5",
        Nombre_Tema: "MACROS",
      },
      {
        Cod_Tema: "T003.6",
        Nombre_Tema: "Macros: Para la automatización de sus datos ",
      },
      {
        Cod_Tema: "T003.7",
        Nombre_Tema: "Creación de funciones",
      },
    ],
  },

  {
    Cod_Curso: "C004",
    Nombre_Curso: "Power  BI Módulo I",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T004.1",
        Nombre_Tema: "Introducción a Power BI",
      },
      {
        Cod_Tema: "T004.2",
        Nombre_Tema: "Extracción y transformación con Power Query",
      },
      {
        Cod_Tema: "T004.3",
        Nombre_Tema: "Anular dinamización de columnas",
      },
      {
        Cod_Tema: "T004.4",
        Nombre_Tema: "Automatizar reportes con Lenguaje M",
      },
      {
        Cod_Tema: "T004.5",
        Nombre_Tema: "Modelamiento de datos relacionales",
      },
      {
        Cod_Tema: "T004.6",
        Nombre_Tema: "Funciones DAX básicas",
      },
      {
        Cod_Tema: "T004.7",
        Nombre_Tema: "Inteligencia del tiempo",
      },
      {
        Cod_Tema: "T004.8",
        Nombre_Tema: "Visualización de datos",
      },
      
    ],
},
{
    Cod_Curso: "C005",
    Nombre_Curso: "Power  BI Módulo II",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T005.1",
        Nombre_Tema: "Análisis de Dashboard",
      },
      {
        Cod_Tema: "T005.2",
        Nombre_Tema: "Creación de gráficos con SAP Lumira",
      },
      {
        Cod_Tema: "T005.3",
        Nombre_Tema: "Visualización básica de gráficos con Tableau",
      },
      {
        Cod_Tema: "T005.4",
        Nombre_Tema: "Visualización avanzada con Tableau",
      },
      {
        Cod_Tema: "T005.5",
        Nombre_Tema: "Análisis de casos de estudios utilizando PowerBI",
      },
      {
        Cod_Tema: "T005.6",
        Nombre_Tema: "Análisis de casos de estudios utilizando PowerBI II",
      },
      {
        Cod_Tema: "T005.7",
        Nombre_Tema: "Dashboards y otras herramientas",
      },
    ],

},
{
    Cod_Curso: "C006",
    Nombre_Curso: "TÉCNICAS Y HERRAMIENTAS EFECTIVAS DE VENTAS: LAS CLÍNICAS DE VENTAS, VENDEDOR INCÓGNITO Y OTRAS",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T006.1",
        Nombre_Tema: "La función de venta en la organización"
        ,
      },
      {
        Cod_Tema: "T006.2",
        Nombre_Tema: "Los prospectos",
      },
      {
        Cod_Tema: "T006.3",
        Nombre_Tema: "El cliente y el mercado, Fidelización de clientes",
      },
      {
        Cod_Tema: "T006.4",
        Nombre_Tema: "Las etapas de la venta",
      },
      {
        Cod_Tema: "T006.5",
        Nombre_Tema: "Métodos usados en la actividad de ventas",
      },
      {
        Cod_Tema: "T006.6",
        Nombre_Tema: "La preventa, la venta y la post venta",
      },
    ],
},
{
    Cod_Curso: "C007",
    Nombre_Curso: "TIPOLOGÍA DE LOS CLIENTES EN EL CIERRE DE VENTAS",
    Duracion: 16,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T007.1",
        Nombre_Tema: "La actividad comercial y el planteamiento de los objetivos",
      },
      {
        Cod_Tema: "T007.2",
        Nombre_Tema: "Tipología de los clientes. Situaciones y tratamiento",
      },
      {
        Cod_Tema: "T007.3",
        Nombre_Tema: "La entrevista comercial",
      },
      {
        Cod_Tema: "T007.4",
        Nombre_Tema: "El cliente: acogida y detección de necesidades",
      },
      {
        Cod_Tema: "T007.5",
        Nombre_Tema: "Argumentación y debate de objeciones",
      },
      {
        Cod_Tema: "T007.6",
        Nombre_Tema: "Cierre de la venta y seguimiento",
      },
 
    ],
},
{
    Cod_Curso: "C008",
    Nombre_Curso: "TÉCNICAS PARA VENTAS POR INTERNET",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
      {
        Cod_Tema: "T008.1",
        Nombre_Tema: "Experiencias empresariales y de negocios",
      },
      {
        Cod_Tema: "T008.2",
        Nombre_Tema: "Planes de host que se adaptan al comercio electrónico",
      },
      {
        Cod_Tema: "T008.3",
        Nombre_Tema: "Nicho de mercado por Internet",
      },
      {
        Cod_Tema: "T008.4",
        Nombre_Tema: "Vender por Internet",
      },
      {
        Cod_Tema: "T008.5",
        Nombre_Tema: "Venta de productos por Internet: Físicos, digitales, seguros, originales",
      },
      {
        Cod_Tema: "T008.6",
        Nombre_Tema: "Sistema de pagos on-line",
      },

    ],
},
{
    
    Cod_Curso: "C009",
    Nombre_Curso: "EXPRESIÓN COMERCIAL Y ORATORIA DE EXCELENCIA",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
        {
            Cod_Tema: "T009.1",
            Nombre_Tema: "La comunicación comercial",
          },
          {
            Cod_Tema: "T009.2",
            Nombre_Tema: "Elementos de la comunicación",
          },
          {
            Cod_Tema: "T009.3",
            Nombre_Tema: "Habilidades sociales y protocolo comercial",
          },
          {
            Cod_Tema: "T009.4",
            Nombre_Tema: "Técnicas y procesos de negociación",
          },
          {
            Cod_Tema: "T009.5",
            Nombre_Tema: "Expresión en el lenguaje no verbal",
          },
          {
            Cod_Tema: "T009.6",
            Nombre_Tema: "Técnicas de oratoria",
          },
          {
            Cod_Tema: "T009.7",
            Nombre_Tema: "Repaso de los temas críticos",
          },
    ],
  }
,
  {
    
    Cod_Curso: "C0010",
    Nombre_Curso: "introduccion",
    Duracion: 24,
    Tiempo: "Horas",
    Temas: [
        {
            Cod_Tema: "T009.1",
            Nombre_Tema: "La comunicación comercial",
          },
          {
            Cod_Tema: "T009.2",
            Nombre_Tema: "Elementos de la comunicación",
          },
          {
            Cod_Tema: "T009.3",
            Nombre_Tema: "Habilidades sociales y protocolo comercial",
          },
          {
            Cod_Tema: "T009.4",
            Nombre_Tema: "Técnicas y procesos de negociación",
          },
          {
            Cod_Tema: "T009.5",
            Nombre_Tema: "Expresión en el lenguaje no verbal",
          },
          {
            Cod_Tema: "T009.6",
            Nombre_Tema: "Técnicas de oratoria",
          },
          {
            Cod_Tema: "T009.7",
            Nombre_Tema: "Repaso de los temas críticos",
          },
    ],
  }  
  
];



/*
function obtenerdata(req,res){
    let entityAux = req;
    entityAux.uri;
    https://certus.api/programas
    res = <Arreglo></Arreglo>;

    //ajax <= Servicio REST (Node JS)

    return res;
}*/
