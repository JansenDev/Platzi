# Devops

## Filosofia DevOps

DevOps no es un rol, **ni **una herramienta; DevOps es una cultura que busca mas colaboración entre los roles de desarrollo y operaciones, ¿por que? Cuando un equipo de desarrollo entrega el proyecto a otro para que lo cuide, es muy facil para ellos por que se desprenden del sistema. Pero lo que busca DevOps es que ambos tengan una responsabilidad compartidad a lo largo de la vida util del software y comparta el mismo dolor del personal de operaciones y asi poder implementar estrategias para simplificar la implementacion o el mantenimiento del sistema y los de operaciones al compartir el mismo dolor del personal de desarrollo puede ayudar a comprender y mejorar todas esas necesidades operativas y ayudarlas a satisfacer.

## Ambientes Homogeneos para aplicaciones

La solución para el típico problema de “it only works on my machine” es la homogeneidad en todos los ambientes: desarrollo, CI, producción, etc.
La homogeneidad es llevada a cabo con la implementación de máquinas virtuales o contenedores, muy recomendablemente, contenedores (Docker). **Docker** puede ser usado en cualquiera de los sistemas operativos y es reproducible.

Podemos tener por ejemplo, una infraestructura que comparte todo; tenemos el sistema operativo (no importa cuál sea), pero lo que está dentro del contenedor es lo importante; la capa de **Docker** es compartida entre todas las aplicaciones que están corriendo; y sin importar cuál sea el sistema operativo o el entorno, sabemos perfectamente cómo se va a comportar el contenedor.

Los contenedores son reproducibles, programables y la documentación es el código mismo.

Las máquinas virtuales no son tan portables como los contenedores y suelen tener problemas de instalación en diferentes entornos o sistemas operativos.

- Implementeacion de dockerfile

## Ambientes homogéneos para Infraestructura

Profe… se nota que tienes un conocimiento extraordinario… sin embargo creo que deberías estructurar el curso de una forma diferente para que fuera mas accesible a los estudiantes.

Establecer cuales son los conocimientos o cursos previos necesarios para tomar con éxito este curso.
Presentar durante el curso diagramas del proceso típico de Devops, con el fin de tener una idea previa de cada una de las tareas que un pipeline debería tener.
Tratar de no mezclar el español y el ingles; dar todo el curso en español o todo el curso en ingles.

## implementación de Pruebas

Las pruebas de software (en inglés software testing) son las investigaciones empíricas y técnicas cuyo objetivo es proporcionar información objetiva e independiente sobre la calidad del producto a la parte interesada o stakeholder. // Wikipedia //

Unit test: Prueba unitaria
Integration test: Prueba de integración
Aceptance test: Prueba de aceptación
System test: Prueba de Sistema
Component test: Prueba de Componente

## Continuous integration y artifacs

Con Continuous Integration, se desea probar cada uno de los cambios que reciba el código, cada Pull Request (en una rama diferente), pues si una rama no pasa las pruebas, no habría razón por la cual mezclarla a su rama destino, se puede dañar la versión en producción.

El ciclo comienza con Git, es muy importante que el código esté versionado, debe haber una historia de los cambios, esto es fundamental; y por consiguiente, el código debe estar hospedado en un repositorio remoto

Teniendo ya el código, debemos tener pruebas para ejecutar. Para este paso, se debe contar con un servidor de automatización (Jenkins, por ejemplo). Este servicio descargaría los últimos cambios del repositorio en la(s) rama(s) correspondiente(s), y ejecuta las pruebas unitarias. Si éstas pasan, se continúa con el ciclo; si no, lo rompe. De esta manera, se tiene la confianza de que el sitio en producción se mantendrá estable.

Hasta este punto, tenemos un historial de eventos: Si las pruebas de cierto commit pasaron, si el flujo continuó o se detuvo, sabemos quién realizó cada commit, etc.

Dentro de este mismo flujo, podemos implementar más soluciones aparte de las pruebas unitarias, como una integración con una herramienta de análisis de código.

El punto base con CI mantenemos estable el entorno de producción, mantenemos buenos styles guides y mantenemos código limpio.

La salida de todo CI es un artefacto.
El artefacto debe ser la unidad que va a ser desplegada en los ambientes, debe ser algo inmutable.

Es muy importante establecer un límite de aceptación en cuanto al porcentaje del Code Coverage, pero no confiarnos de ese porcentaje, y mantener activa la práctica de hacer Code Review, es algo que no puede ser confiado por las pruebas unitarias. Los Code Review son mucho más poderosos, porque: garantiza que nuestros compañeros sepan lo que está sucediendo en los nuevos features del servicio. Siempre debe haber un proceso de Pull Requests Review, y tiene mucho más valor que un Code Coverage.

- **Que es artifact?**:

Te voy a poner un ejemplo para ayudarte.
estamos haciendo un api en java y cumplio el ciclo jenkins compila y genera api.jar que contiene todos los documentos de mi api pero enpaquetados ese es mi artifac api-Release v1

o por ejemplo en un frameworks front tu tienes tus carpetas con archivos css y html pero una vez vas a produccion no mandas el codigo fuente mandas el codigo que ya react angular o vue minifica le cambia la estructura comprime imagenes bueno etc etc etc dejandolo listo para produccion una vez esta listo para produccion ya no es tu codigo fuente es un artifact


# Despliegue continuo

## Heramientas externas en procesos CI

CI puede ser tan robusto como lo necesitemos, agregando plugins y software de terceros en general, creo que una buena implementación inicial fue la mencionada por Yamil la clase anterior (Code -> Docker -> Jenkins -> Artifact -> Docker Hub).

**Herramientas mecionadas:**

- SonarQube.
- Code Climate.


## Continuos deployment


La diferencia entre Continuos Delivery y Continuos Deployment es bastante sencilla, es el mismo proceso, pero en Continuos Deployment se envía a producción automaticamente basado en los resultados de nuestros acceptance tests y en Continuos Delivery podemos hacerlo a mano.

Ninguna es mejor que otra, todo depende de lo qué estés haciendo al momento y las cosas que estés llevando a producción. Si es algo crítico y no hay seguiridad puedes hacerlo de manera manual.

El concepto final es lanzar a producción más frecuente y tener menos errores, la manera implementada es un detalle. El resultado siempre debería ser menos errores.

Hay varios tipos de Deployments:

Blue/Green: Tener dos tags del mismo código dándole update a una de ellas mientras la otra sirve el tráfico.
Canary: Este se puede usar en conjunto con otros tipos. Tenemos un pull de nodos y vamos a implementar algo nuevo pudiendo resultar riesgoso. Solo modifcamos uno de esos nodos.
Rolling: Es hacerle update a máquinas una por una. Son seguros ya que podemos monitorear el progreso.


## Reliability

Usualmente, son los operadores quienes manejan los incidentes de la compañía (a ellos son a los que llaman [en horario extra-laboral]), aunque no debería ser siempre así; los trabajadores que desarrollan el software son quienes deberían manejar sus incidentes.

Cuando ocurre un incidente, tenemos una llamada y aceptamos el manejo del mismo, quiere decir que no se va a escalar a otra persona y que seremos el responsable de ello.

-  Debemos verificar la dimensión del incidente. Si es algo pequeño, puede que no sea necesario resolverlo de manera inmediata y puede ser resuelto en horario laboral o en un momento específico. Si por otro lado, es un incidente grande, lo atendemos de forma inmediata.
-  Abrir un canal de comunicación con nuestros compañeros.
-  Llevar un Timeline. Anotar cada paso llevado a cabo, una secuencia de eventos con fecha. Con esto, nos evitamos tener que repetir pasos que ya hemos realizado, o que ingrese un nuevo trabajador y explicarle lo que ya le hemos explicado a varias personas, también nos ahorraríamos el tener que responder dudas e inquietudes de nuestros compañeros; estaría todo documentado. (Los video-chats no se guardan). No siempre es necesario publicar el Timeline en un incidente; sin embargo, es muy importante tenerlo, puesto que si llegan más personas a atender el asunto, habrán muchas preguntas, lo cual se transforma en estrés y entre más estrés tengamos, más errores cometeremos.
El Timeline es mucho más efectivo después del incidente. Puede ser compartido entre los compañeros internos para que sepan cómo manejamos el incidente.
- Notificar a nuestro cliente. No importa si el cliente es público o interno, pero debemos notificar la situación. Debemos informarle al cliente que ya estamos trabajando en dicho incidente (aunque no sepamos aún qué está sucediendo con exactitud), y a medida que vayamos avanzando, le vamos notificando de los pasos que estamos dando para que esté al tanto hasta que resolvamos el incidente. La comunicación es crucial, y así, le damos confianza al cliente de que cada vez que algo salga mal, se lo diremos. Sin comunicación, el cliente comenzará a insistir y a hacer preguntas (las cuales ya debieron haber sido respondidas en un documento) lo cual se resume en estrés, que no es saludable para un momento de resolución de incidentes.
- El proceso no termina cuando se soluciona el incidente, sino que luego debemos escribir un Post-Mortem. A pesar de que es tedioso, es la mejor manera de aprender.
El Post-Mortem es una explicación detalla sobre qué estuvo mal, por qué estuvo mal, por qué no nos dimos cuenta antes y qué haremos al respecto, qué vamos a mejorar. Puede ser estructurado con un resumen de manera que nuestro cliente de nivel ejecutivo pueda comprender, donde también se pueden pedir disculpas de manera formal, y luego añadir una sección bastante técnica sobre el incidente (con gráficas de ser posible) porque literalmente es de ahí de donde aprendemos qué hicimos mal. Es importante que el cliente vea la sección técnica, para que esté enterado de que como compañía estamos aprendiendo y que muy probablemente este incidente no volverá a ocurrir.
- Lo más importante: comunicar sobre el incidente internamente. Ya sabemos manejar el incidente, la compañía crece, los equipos crecen, y las probabilidades de que le vuelva a ocurrir ese mismo incidente a otro equipo, aumentan.