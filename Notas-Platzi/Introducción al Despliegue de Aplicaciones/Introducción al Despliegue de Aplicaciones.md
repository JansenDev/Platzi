# Despliegue de aplicaciones

## En donde se puede desplegar aplicaciones LAMP y JOTL

El despliegue de una aplicación LAMP (Linux, Apache, Mysql, PHP) puede ser de los más conocidos y populares dado la popularidad de php y mysql Cuando empezaron a aparecer las aplicaciones web .

Existen varias formas de desplegar, estas son las más comunes:

Hosting compartido: la fórmula más popular es comprar un servicio de hosting donde te proveen de una interfaz web llamada Cpanel donde puedes crear tu base de datos mysql, subir tus archivos php por ftp o administrador web y tener tu app en minutos.

Hosting gratuito: Algunas empresas proveen hosting gratuito a cambio de que se integre publicidad en tus scripts php o de acceder a la información de tu sitio, sin embargo estas tienden a tener interfaces web menos amigables para subir archivos de la aplicación y la base de datos.

Usar un VPS: utilizando plataformas como Digital Ocean, se puede crear un droplet (forma en que llaman a los VPS en esta empresa), para tener acceso SSH y poder instalar php,mysql, apache y lo que se necesite para instalar la aplicación web, puede tomar más tiempo en configurar todo, y el vps se debe administrar por la persona, a cambio, se gana acceso total al servidor para modificar php, mysql, y realizar tareas de gestión, o escalamiento de la aplicación.

### JOTL

![](https://static.platzi.com/media/user_upload/OracleJava-ecd62183-c737-44c5-a0db-777b15d4f5fe.jpg)

Por otra parte, en el mercado también es muy popular el stack de la empresa Oracle JOTL (Java, Oracle, Tomcat, Linux) dado el soporte y la fama que tiene Oracle de tener el sistema de base de datos más robusto, y esto sumado con Java que es un lenguaje de programación multiplataforma: funciona para hacer aplicaciones de escritorio, aplicaciones web, aplicaciones móviles para Android, etc.

Estas son las formas más comunes para desplegar una aplicación JOTL.

Usar una plataforma como servicio: Se puede utilizar una PaaS - Platform As A Service, como es el caso de heroku, que se encarga del despliegue de la aplicación y se puede hacer un despliegue más rápido, pero se pierde el control sobre el servidor.

Usar una Infraestructura como servicio: IaaS o Infrastructure As a Service, son empresas como AWS de Amazon, Cloud Platform de Google, Azure de microsoft o incluso IBM cloud, estas ofrecen un control mayor sobre la infraestructura, desde los servidores VPS, red, Backups, disponibilidad, escalabilidad, seguridad entre otras ventajas, sin embargo requieren de un conocimiento en manejo de infraestructuras para poder configurar todas estas opciones.

Usar infraestructura propia: Algunas empresas prefieren disponer de una infraestructura propia, esto se conoce como on-premises, entre la razones y ventajas para este tipo de infraestructura están:
Privacidad del código fuente o aplicación, ya que este se encontrará local y no en servidores en una nube a los que terceros podrían acceder.

La segunda razón es por latencia, dado que un datacenter en la misma ciudad podrá ofrecer mejores tiempos de respuesta que uno en otro País o continente.

Finalmente por control, ya que las empresas que adoptan esto, tienen control total sobre la infraestructura física (no sólo la lógica como ocurre con las IaaS).

Como desventajas principales están: Disponibilidad física, si el lugar donde está el datacenter sufre un incendio, terremoto o cualquier situación que afecte el lugar, podría perderse el acceso físico a la información y/o a la red.

Costo, mientras la computación en la nube ofrece precios competitivos por horas, escalamiento dinámico y otros temas que parecen casi automáticos, en los entornos on-premise los costos pueden ser mayores dado que se debe costear servidores, racks de almacenamiento, el datacenter donde se almacenará la información, la energía, internet, seguridad, y demás costos asociados.

Existen muchas opciones para desplegar aplicaciones de este tipo, cada una tiene ventajas y desventajas, depende del tipo de proyecto la opción a seleccionar.

Nota: En el Stack de Java y Oracle también se puede intercambiar Apache Tomcat con GlassFish u otros, incluso en la parte de sistema operativo, cambiando Linux por Windows server.


## Donde desplegar nuestro frontend(aplicaciones estaticas)

Git hub pages
Surge.sh
Netlyfy
Vercel

## Donde desplegar dbs

Mongo Atlas(NoSQL)- No relacional
ElephantSQL(SQL)- Relacional

## Donde desplegar el backend

Heroku






