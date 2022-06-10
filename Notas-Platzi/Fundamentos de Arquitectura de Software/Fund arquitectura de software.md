# Proceso de desarrollo de software

## Etapas del procesos de desarrollo de software de software

### Análisis de requerimientos

Se entiende qué se tiene que contruir, requerimientos funcionales y no funcionales. El resultado es una comprensión muy clara del problema al resolver.

- Req. Negocio
- Req. Usuario
- Req. Funcionales
- Req. No Funcionales

### Diseño de la solución

Un equipo de desarrollo plantea cuales son las posibles soluciones al problema. Y El resultado es un detalle de la solución en el formato que tenga que ser dado.

### Desarrollo y Evaluación

Desarrollo y testing, existen criterios de aceptación para la solución. El resultado es un Artefacto de Software.

### Despliegue

Se necesitara infraestructura para la realización de Operaciones. El resultado de esto es el Software Disponible

### Mantenimiento y Evolución

Se detectan errores y se agregan funcionalidades. Cuando termina el Software queda deprecado

## Dificultades en el desarrollo de Software

En la etapa de diseño y desarrollo estamos concentrados en encontrar cuáles son los problemas que queremos resolver. Estos problemas los podemos dividir en dos grandes tipos de problemas.

1.  **Esenciales**: Los podemos dividir en 4.

    - **La complejidad:** Cuando un dominio de un problema es complejo en sí mismo. En el caso de adiciones y todas las acciones que conlleven al sistema a ser más complejo.<br>
      *Manejo del problema de complejidad:* No desarrollar: Comprar - OSS.
    - **La conformida:** En qué contexto se usa el software y cómo debe adecuarse al mismo. Se incluyen todo lo que le compete. **Ej:** Ambiente, conectividad, impuestos, etc.<br>
      *Manejo del problema:* Prototipado rápido, feedback y ciclos rápidos para soluciones pequeñas.
    - **Tolerancia al cambio:** Posibilidad del cambio en el mismo y que sea responsivo a diferentes contextos.<br>
      *Manejo del problema:* Desarrollo Evolutivo, desarrollos pequeños. Paso a paso pero de manera firme e ir haciendo crecer el software.
    - **Invisibilidad:** Problemas de tangibilidad nula.<br>
      *Manejo del problema:* Grandes diseñadores, Arquitectos que saben abstraer el problema y que realiza soluciones elegantes, de manera simple, con la mejor calidad posible en los componentes que lo necesitan.

2.  **Accidentales**: Accidentales: Está relacionado con la plataforma que vamos a implementar, tecnología, lenguajes, frameworks, integraciones, entre otros, que tienen 3 Entornos:

    - Lenguajes de alto nivel
    - Multi-procesamiento
    - Entornos de programación

*Otros Resumen* <br>
Los problemas accidentales nos traen ganancias cuando los resolvemos, incluso algunos son solucionables con al alguna libreria, api, etc. Lo verdaderamente importante es resolver los problemas esenciales.
Como solucionar dificultades esenciales:
Lo complejo de un desarrollo es lo esencial y no lo accidental. No hay ninguna bala de plata que solucione el problema esencial del desarrollo de software. Para ello nos dan **4 formas de resolver las dificultades esenciales**:

- **No desarrollar**: siempre que podamos primero ver si el problema se puede solucionar con un software ya existente, con algo de open source, servicios, integraciones y soluciones pequeñas que solucionen parte del probela etc.
- **Proptotypado rapido**: son la evolución de las metodologías agiles, la idea es obtener e fedback lo mas rapido posible de si estamos resolviendo el problema correcto. Para eso hay que ir evolucionando en pasos muy pequeños y siempre obteniendo feedback. EL FEEBACK ES LA HERRAMIENTA DE DESARROLLO MAS IMPORTANTE DENTRO DEL DESARROLLO DE SOFTWARE MODERNO.
- **Desarrollo evolutivo**: esta relacionado al tipiado rapido, consta de ir desarrollando en pasos pequeños e ir evolucionando en ese sentido.
- **Grandes diseñadores**: personas que tengan la capacidad de diseñar una solucion simple y que resuleva el problema de la mejor forma y con la mejor calidad.

## Roles en metodologias tradicionales y agiles

Es importante que diferenciemos el ROL del puesto de trabajo, hay roles que pueden ser desarrollados por la misma persona.

- **Experto del dominio**: En una metodología tradicional, es la persona a la que acudimos para entender las necesidades del negocio. En metodologías Ágiles --> stakeholders.

- **Analista**: funcional/de negocio, la persona responsable de definir los requerimientos que van a llevar al software a u buen puerto. En el caso de Ágiles el dueño del producto es quien arma las historias y que nos acompaña en el proceso de construcción del software.

- **Administrador de sistemas / DevOps**: Es el rol de operaciones y desarrollo, son las personas responsables de la infraestructura que alojara nuestra aplicación.

- **Equipo de desarrollo**: QA / Testing se encargan de la evaluación de nuestro software, comprobar que lo que se está haciendo es lo que se espera que se haga. Desarrolladores involucrados en la construcción del software. Arquitecto, diseña la solución y análisis de los requerimientos, es un papel más estratégico. La arquitectura emerja del trabajo de un equipo bien gestionado.

- **Gestor del proyecto / facilitador**: Llevan al equipo a través del proceso iterativo e incremental, entender lo que pasa con el equipo y motivar el avance en el desarrollo del producto.

---

# Introduccion a la arquitectura de software

## Que es arquitectura de software?

La arquitectura, más que un modelo es algo estructural. El concepto de arquitectura de software se refiere a la estructuración del sistema que, idealmente, se crea en etapas tempranas del desarrollo. Esta estructuración representa un diseño de alto nivel del sistema que tiene dos propósitos

satisfacer los atributos de calidad (desempeño, seguridad, modificabilidad)
servir como guía en el desarrollo.
El no crear este diseño desde etapas tempranas del desarrollo puede limitar severamente el que el producto final satisfaga las necesidades de los clientes. Además, el costo de las correcciones relacionadas con problemas en la arquitectura es muy elevado. Es así que la arquitectura de software juega un papel fundamental dentro del desarrollo

## La importancia de la comunicación - Ley de Conway

“Cualquier pieza de software refleja la estructura organizacional que la produjo.”

## Objetivos del arquitecto

Cada uno de los stakeholder tiene que ser conectado por el Arquitecto con sus requerimientos.
Stakeholder -> Arquitecto -> Requerimientos = Implementaciónes en el Sistema.

Los Requerimientos de cada stakeholder afectan de forma única el sistema.

Cliente: Entrega a tiempo y dentro del presupuesto.
Manager: Permite equipos independientes y comunicación clara.
Dev: Que sea fácil de implementar y de mantener.
Usuario: Es confiable y estará disponible cuando lo necesite.
QA: Es fácil de comprobar.
La unión de todos estos requerimientos (funcionales o no funcionales) van a llevar al arquitecto a tomar decisiones que impacten sobre el sistema.

## Arquitectura y Metodologías

En el contexto de método tradicional … Las decisiones de arquitectura es en la ETAPA DEL DISEÑO

En el contexto de Método ágil … Las decisiones de arquitectura es EN CADA ITERACIÓN

![](https://static.platzi.com/media/public/uploads/fas_mtvsma_df062264-37c3-48e8-a870-7c2017b54230.png)

![](https://is1blog.files.wordpress.com/2016/04/metodologias-agiles.jpg)

---

# Analisis de Requerimientos

## Entender el problema

![](https://static.platzi.com/media/user_upload/Entender%20el%20problema-6ed112f3-2e36-4220-81ad-51f82de7b11a.jpg)

La parte más importante de entender el problema es: separar la comprensión del problema de la propuesta de solución, si no se entiende la diferencia entre estos dos puntos se tiende a solucionar problemas inexistentes y a hacer sobreingeniería.

### Problema:

Detalla **¿que es lo que se va a resolver?** (y qué no se va a resolver) sin entrar en detalles del “cómo”. -> (analisis del problema)

El espacio del problema nos ayuda a entender que es lo que vamos a resolver y exactamente como imaginamos como esto va agregar un valor a nuestros usuarios sin entrar en detalle de cómo lo va a resolver el sistema.

- Idea: ¿Qué queremos resolver?
- Criterios de éxito: ¿Cómo identificamos si estamos resolviendo el problema?
- Historias de usuario: Supuestos de historias de lo que va a ganar el usuario al utilizar la solución usando las características del problema a resolver.

### Solución:

Brinda el detalle del **¿“cómo” se va a resolver?**, reflejando los detalles del problema detectado y **evitando resolver problemas que no se quiere o necesita resolver**. --> (detalles técnicos)

Se refleja en el espacio del problema y trata de resolverlo teniendo en cuenta todos los detalles técnicos necesarios.

Consta de:

- **Diseño**: todo lo referente a la planificacion del software, desde diseño UI, UX hasta diseño de sistemas
- **Desarrollo**: escribir el codigo, configuraciones y contrataciones de servicios
- **Evaluación**: medir la eficiencia y eficacia del software frente al problema
- **Criterios de aceptación**: medir el impacto del software, no importa lo bueno que sea el problema si los usuarios no lo usan o no le ven uso.
- **Despliegue (deploy)**: lanzar el software en ambientes productivos (mercado) y empezar a mejorar las caracteristicas con un feedback loop (crear, medir, aprender)

## Requerimientos

Una vez que entendemos el espacio del problema y el espacio de la solución, vamos a entrar a analizar los requerimientos de nuestro sistema.

Requerimientos de producto
Los podemos dividir en tres (03):

- Capa de requerimientos de negocio, son reglas del negocio que alimentan los requerimientos del negocio.
- Capa de usuario, tienen que ver en cómo el usuario se desenvuelve usando el sistema, qué atributos del sistema se deben poner por encima de otros.
- Capa Funcional, se ven alimentados por requerimientos del sistema, ¿qué cosas tienen que pasar operativamente?
  Esta capa se ve afectada por las restricciones que pueden afectar operativamente a lo funcional.

Requerimientos Significativos para la Arquitectura del Producto:

- Requerimientos funcionales: (Funciones indispensables) Tienen que ver con las historias de usuarios, que hablan sobre específicamente lo que hace el sistema, por ejemplo que usuario ingrese al sistema.
- Requerimientos no funcionales: (Atributos de calidad): son aquellos que agregan cualidades al sistema, por ejemplo que el ingreso de ese usuario sea de manera segura.

Requerimientos de proyecto

- Tienen que ver más con el rol de gestor de proyectos, se usan para dar prioridad a los requerimientos del producto.
- Estos dos mundos de requerimientos hablan de las prioridades del equipo de trabajo del proyecto.
- Tiene que ver con requerimientos logísticos, que no tienen que ver con el desarrollo del software.

## Riesgos

Es necesario identificar los riesgos para poder priorizarlos y atacarlos en orden y asegurar que las soluciones arquitectónicas que propongamos resuelvan los problemas más importantes.

Identificación de los riesgos:

- **Toma de Requerimientos** (Requerimientos funcionales):
  Se calificará su riesgo de acuerdo a su dificultad o complejidad.
- **Atributos de calidad** (Requerimientos NO funcionales):
  Se calificará su riesgo de acuerdo a la incertidumbre que genere, cuanto mas incertidumbre hay, mas alto es el riesgo.
- **Conocimiento del dominio**:
  Riesgo prototípico, son aquellos que podemos atacar de forma estándar.

Pregunta de examen:
Los riesgos hay que identificados para poder priorizarlos, recuerda que no es necesario mitigarlos todos, debemos siempre tener en cuenta y dar prioridad a aquellos riesgos que ponen en peligro la solución que se está construyendo.

## Restricciones

Las restricciones en el contexto de un proceso de desarrollo de software se refiere a las restricciones que limitan las opciones de diseño o implementaciones disponibles al desarrollar.

Los StakeHolders, nos pueden poner limitaciones relacionadas con su contexto de negocio, ejemplo:

• Las limitaciones legales, la implementación de un producto podría tener restricciones en algún país, y esto seria una limitante a considerar para el desarrollo del producto.
• Limitaciones técnicas, relacionadas con integraciones con otros sistemas.
• El ciclo de vida del producto, agregará limitaciones al producto, por ejemplo a medida que avanza el proceso de implementación el modelo de datos va a ser más difícil de modificar.

**_Nota_**: _El arquitecto debe balancear entre los requerimiento y las restricciones._

---

# Estilos de arquitectura

## Arquitectura, panorama, definicionados

Un estilo de arquitectura es una colección de decisiones de diseño, aplicables en un contexto determinado, que restringen las decisiones arquitectónicas específicas en ese contexto y obtienen beneficios en cada sistema resultante.

**_Nota_**: Ver .ptt **fdas-4-estilos-de-arquitectura_0a2426dc-ce58-4a99-a55a-972912d64a42**

## Estilos: Llamado y retorno

1. **Programa principal y subrutinas**: Es el estilo más básico donde se tiene una rutina y se manda a llamar otra subrutina en donde la subrutina puede retornar o no un resultado, pero la rutina principal continua hasta que acabe la subrutina.

2. **Orientada a Objetos**: Una versión con esteroides del estilo anterior. Se utiliza para aplicaciones que vamos a mantener por mucho tiempo. Tratamos de juntar el estado de la aplicación creando objetos los cuales tienen una interfaz publica (interfaz en este caso se refiere a una definición de funciones o estructura que esta clase puede implementar) donde la llamada no es solo una subrutina, sino objetos que interactuán entre si.

3. **Arquitectura multinivel**: Son diferentes componentes que se van a comunicar en un orden en especifico donde un componente principal crea el llamado a un componente inferior en algún momento, un ejemplo de esto son las aplicaciones cliente-servidor.

## Estilos: Flujo de datos

En este caso no estamos tan preocupados por cual es la secuencia de ejecución sino como los datos fluyen de un punto a otro.

**Flujo de datos:**

1.  **Lote secuencial**: Lo importante es ejecutar una pieza de código y que el final de esa pieza ya procesada pase a una siguiente etapa.
2.  **Tubos y filtros**: Se tiene un string o un flujo de datos continuo en donde cada aplicación recibe continuamente esos datos los procesa y los hace como salida a otra aplicación o al final de la ejecución.

_Nota:_

En el estilo de flujo de datos lo que se tiene son diferentes aplicaciones que van a estar conectadas en general en tiempo real por lo tanto ya no se necesita interacción con el usuario para decidir cuándo empieza un proceso o cuando termina otro.

**Cuando usamos el estilo de arquitectura de flujo de datos:**

• Cuando tenemos un proceso que tiene que tener una salida clara pero que puede ser separado en partes en donde tenemos parte a parte lo que necesitamos hacer.
• Cuando necesitamos un string de entrada parte a parte ir procesándolo y tener una salida al final del túnel.

![](https://static.platzi.com/media/user_upload/tuberias%20y%20filtros-0b3e7362-22e8-4f22-ac6a-ca33248cca99.jpg)

## Estilos: Centradad de datos

1. **Estilo de pizarrón**, permite centralizar los datos en una sola base de datos, alimentada por varias partes involucradas, una vez que todas las partes interesadas ingresan los datos, el sistema centralizado genera una salida.

2. **Estilo Centralizado**, En este caso el sistema posee los datos centralizados en una base de datos, y hay dos (02) sistemas que comparten la misma base de datos.

3. **Estilo Experto**, En este caso el sistema que centraliza los datos, tiene la capacidad de entender los datos y consultas que realiza el cliente, generando salidas inteligentes. (inteligencia artificial).

## Estilos: Componentes independientes

**Invocación implícita:** Tiene que ver con que nuestra aplicación puedan mandar mensajes entre si, sin que sepa a quien le esta hablando.

**Invocación explícita:** Tiene que ver con el desarrollo de componentes que si se conocen entre si, pero que sean desarrollado independientemente.

ARQUITECTURA ORIENTADAS A SERVICIOS:
El Enterprise Services Busses, sabe que proceso tiene que llevar a cabo para lograr su cometido, dando a los componentes la información que éstos requieran. El ESB, es inteligente.

Es necesario tener en cuenta que cualquier actualización del sistema, mantiene conectado a los componentes que brindan servicios de consulta.

![IMG](http://3.bp.blogspot.com/-e8fcQps87JY/UQ_4v_rd2FI/AAAAAAAAAAs/QaU9J4LeGMc/s1600/03.JPG)

## Comparando estilos: ¿Cómo elijo?

1. **Estilos Monolíticos:**

- Es más fácil darle prioridad a la eficiencia de las comunicaciones.
  -Son más fáciles de probar.
- Curva de aprendizaje son más fáciles, todas las piezas estan en el mismo lugar. (Los microservicios son fáciles de entender).
- La capacidad de modificación es más fácil.
- La modularización es más fácil de romper, por lo que es más fácil no garantizar esa separación a largo plazo.
- En la usabilidad, es mas costoso, porque habría que respaldar toda la aplicación y no pequeños microservicios.
- Puede ser un desafío para el despliegue, porque habría que garantizar que toda la aplicación o sistema se adapta a ese contexto específico.

2.  **Estilos Distribuidos:**

- Es más fácil darle prioridad a la eficiencia de las comunicaciones.
- Para hacer una prueba de principio a fin hay que tener todos los componentes disponibles .
- La curva de aprendizaje es más difícil, porque habría que entender todas las piezas de los componentes.
- Al ser desplegadas independientemente, son versionadas independientemente, y esta variación de serviones hace mas complejo su modificación.
- La modularidad, es más fácil porque los componentes que son desplegados independiente.
- la disponibilidad se pueden tener multiples copias del sistema. por lo que este disponible es mas barato.
- La adaptabilidad es más fácil en el despliegue porque los componente se despliegan independientemente en múltiples contextos.


