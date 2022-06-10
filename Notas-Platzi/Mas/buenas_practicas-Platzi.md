-identificadores claros
-modularizar el codigo

# SOLID
## S: unica responsalibilidad
La noción de que obj solo debria tener una unica responsabilidad

## O: principio abierto/cerrado
La noción de que las entidades deben estar abierta para
su extendension pero cerradas para su modificación

## L: principio de susticion de Liskov
La nocion de que los objectos de un programa deberían ser
reemplazables por instancias de sus subtipos sin
alterar el correcto funcionamiento

## I: principio de segregación(separar, apartar) de interface
la nocion de "muchas interfaces cliente especificas son mejores
que una interfaz de propósito general"

## D: principio de inversion de dependencia
La nocion de se debe "depender de abstracciones, no depender
de implementaciones"


# Patrones de diseño
## singleton

Es la noción cuando solo se crea una unica instacion de una clase
en todo le proyecto. (mas usados en logs)

## Factory

El patrón factory plantea simplificar una instancia,
 y eso lo podemos hacer por medio de otra clase que
 se encargue de obtener la instancia haciendo los procesos
 complejos requeridos, así ante cualquier cambio solo
 modificamos esa clase factory y no nos preocupamos por
 modificar cada una de las instancias.

 ## Command

El patrón Command permite solicitar una operación a un
objeto sin conocer realmente el contenido de esta operación,
ni el receptor real de la misma. Para ello se encapsula la
petición como un objeto, con lo que además facilita la parametrización de los métodos.


# Testing automatizado
## Test Unitarios

## Test de Integracion

# Driving test

# Pull request

# Documentacion



# Efecto colateral: modif de obj global













