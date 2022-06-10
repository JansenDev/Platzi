# Angular

## Instalando angular CLI

```bash
$npm icd     @angular/cli
```

## Iniciando proyecto angular

```bash
$ng new my-project-name
```

## Levantand servidor

```bash
$ng serve
# Forma corta
$ng s
```

**Options:**

- -o: open - Al levantar abre el navergador
- --port n: Establecer puerto a levantar

## Ver detalles del projecto

```bash
$ng version
# Forma Corta
$ng v
```

---

## String interpolation

La forma en la que desde la lógica de nuestro typeScript podemos pasar datos a renderizar a nuestro template(html). En otras palabras, con las {{ }} podemos usar typeScript en html.

```html
<img width="350" src="{{ imagen }}" alt="adad" /> />
```

## Propety binding

Es una forma de controlar dinamamicamente algunos atributos html para que estos sean renderizados apartir una string, variable o atributo de un objeto de la capa logica.

Solo funcionan en una direccion desde la capa logica (conponent.ts) al objeto destino (atributo html), a esto se le conoce como flujo de datos.

Debemos vincular los valores del componente a los atributos html, esto logramos encerrando el atributo html entre “square brakets”.

Los corchetes [ ] (square brakets) hacen que Angular evalúe el lado derecho de la asignación como una expresión dinámica. Sin los corchetes, Angular trata el lado derecho como un literal de cadena y establece la propiedad en ese valor estático.

```html
<button [disabled]="person.isActive">EL BOTON</button>
<input type="text" [placeholder]="person.name" /><br />
<progress [value]="person.edad" max="100"></progress>
```

## Event binding

El Event Binding le permite escuchar y responder a las acciones del usuario, como pulsaciones de teclas, movimientos del mouse, clics y toques (Atributos HTML y propiedades DOM).

Para vincular un elemento html a un evento, debemos indicar el nombre del evento entre paréntesis a la izquierda de un signo igual y el nombre de una funcion entre comillas a la derecha, recuerda indicar que se trata de una funcion con los parentecis “nameFunction()” .

```html
<button (click)="toggleActive()">BTN TOGGLE</button>
<input type="text" (keyup)="onKeyUp($event)" />
<!-- .box{with:200; height:200; overflow:auto; background: red;} -->
<div class="box" (scroll)="onScroll($event)">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia
    tempora consequuntur voluptatum dolorum, earum, velit mollitia atque eos
    quas et voluptate iste suscipit eum sunt beatae, quaerat necessitatibus
    adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
    officia tempora consequuntur voluptatum dolorum, earum, velit mollitia atque
    eos quas et voluptate iste suscipit eum sunt beatae, quaerat necessitatibus
    adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
    officia tempora consequuntur voluptatum dolorum, earum, velit mollitia atque
    eos quas et voluptate iste suscipit eum sunt beatae, quaerat necessitatibus
    adipisci?
  </p>
</div>
```

```typescript
  onScroll(event: Event) {
    console.log(event);
    const element = event.target as HTMLElement;
    console.info(element.scrollTop);
  }

  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement;
    this.nickname = element.value;
  }
```

Lista de eventos mas usados:
https://www.eduforbetterment.com/lists-of-useful-events-types-for-event-binding-in-angular/

# Directivas

## \*ngIf

HTML:

```html
<!-- input -->
<input type="text" [(ngModel)]="nickname" />

<!-- if -->
<div *ngIf="nickname == 'jhonatan' && edad">
  <p>Soy Jhonatan</p>
</div>
```

### else [nameVariableTemplate]

```html
<!-- if -->
<div *ngIf="nickname == 'jhonatan' && edad else elseNickname">
  <p>Soy Jhonatan</p>
</div>

<!-- else -->
<ng-template #elseNickname>
  <p>Soy else</p>
</ng-template>
```

## \*ngFor

HTML:

```html
<!-- my_listUsers: lista  -->
<input type="text" [(ngModel)]="new_user" />
<button (click)="add_newItem()">Add</button>

<div *ngFor="let user of my_listUsers; index as i">
  {{ i }} {{ user }}
  <button (click)="delete_item(i)">Delete</button>
</div>
```

```html
<h1>[ngSwitch]</h1>
<!-- user: variable  -->
<input type="text" [(ngModel)]="user" />
<div [ngSwitch]="user">
  <p *ngSwitchCase="'jhonatan'">Eres {{ user }}</p>
  <p *ngSwitchCase="'nicolas'">Eres {{ user }}</p>
  <p *ngSwitchCase="'juan'">Eres {{ user }}</p>
  <p *ngSwitchCase="''">Ingresa un nombre prro</p>
  <p *ngSwitchDefault>No hay coincidencias</p>
</div>
```

## [class.myclassFromCss]

HTML:

```html
<h1>Class and style</h1>
<!-- variable:String = "" -->
<input
  type="text"
  required
  #inputName="ngModel"
  placeholder="Ingresa algo"
  [(ngModel)]="variable"
/>
<!-- [class.my_class]: Agrega una clase dinamicamente si le se pasa un boolean -->
<p class="message-error" [class.invalided]="inputName.invalid">
  Campo requerido
</p>
```

CSS:

```scss
.message-error {
  color: #f0f0f0;
  background: red;
  border-radius: 10px;
  opacity: 0;
  transition: all 1s;

  &.invalided {
    opacity: 1;
  }
}
```

## [style.css_Style_property]

HTML:

```html
<!--
  variable:string = ""
  image:String = "https://source.unsplash.com/random"
-->
<input
  type="text"
  [(ngModel)]="variable"
  required
  #input3
  placeholder="Ingresar tamaño"
/>
<br />
<img [src]="imagen" [style.width.px]="input3.value" alt="" />
<img [src]="imagen" [style.width.%]="input3.value" alt="" />
```

## [ngClass]

HTML:

```html
<!-- error, succes: clases que pertenecen a la clase barra -->
<h1 class="barra">[ngClass]</h1>

<input
  type="text"
  class="barra"
  placeholder="ingresar nombre"
  required
  [(ngModel)]="variable2"
  #barraStatus="ngModel"
  [ngClass]="{
   'error':barraStatus.invalid,
   'success': barraStatus.valid
  }"
/>
<br />
{{ barraStatus.invalid }} {{ barraStatus.valid }}
<br />
<hr
  class="barra"
  [ngClass]="{
  'error': barraStatus.invalid,
  'success': barraStatus.valid
}"
/>
```

CSS:

```css
.barra {
  border-bottom: 1px solid;
  &.error {
    border-color: red;
  }
  &.success {
    border-color: rgb(163, 255, 163);
    // border-bottom: 1px solid;
  }
```

## [ngStyle]

HTML:

```html
<h1>[ngStyle]</h1>
<!-- box: objecto del componente -->
<!--default values:  width, height = "50"; color="red" -->
<input type="number" [(ngModel)]="box.width" />
<br />
<input type="number" [(ngModel)]="box.height" />
<br />
<input type="color" [(ngModel)]="box.color" />

<div
  class="cuadrado"
  [ngStyle]="{
    'width.px': box.width,
    'height.px': box.height,
    background: box.color
  }"
></div>
```

CSS:

```css
.cuadrado {
  width: 50px;
  height: 50px;
  background: red;
}
```

# Ciclo de vida de un componente

-**Constructor**: cuando se corre una instancia

-**CongOnChanges** : corre antes y durante en e l render, siemrpe que detecte cambios
en el Input, está para eso, para detectar los cambios.

-**CongOnInit**: corre antes pero tiene la cond icione que solo correo una vez. Ahi se corren eventos asincronos.

-**CongAfcterViewInit**: corre cuando los hijos de ese componentes se han renderizado.

-**CoNgOnDestroy**: Corre cuando se elimina el componente.

![](https://static.platzi.com/media/user_upload/8-Ciclo%20de%20vida%20componente%20Angular-4e23bd02-c7a5-45b0-9a49-2e447a67cf03.jpg)
