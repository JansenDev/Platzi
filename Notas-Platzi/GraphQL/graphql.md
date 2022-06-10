## GraphQL

# Alias

Me permite agregar un alias y ejecutar la mismas funciones en una consulta

```graphql
{
  get1: getCourses {
    _id
    student {
      _id
      name
    }
  }
  get2: getCourses {
    title
    student {
      _id
      name
      email
    }
  }
}
```

**output:**

```json
{
  "data": {
    "get1": [
      {
        "_id": "62072be3a24726b9a90b8d93",
        "student": [
          {
            "_id": "620498b1b6a399ed7af98e0e",
            "name": "juan"
          },
          {
            "_id": "6205e3ca6ec5a8f4c1f64d3e",
            "name": "ivana"
          }
        ]
      },
      {
        "_id": "62072be3a24726b9a90b8d94",
        "student": []
      }
    ],
    "get2": [
      {
        "title": "dev",
        "student": [
          {
            "_id": "620498b1b6a399ed7af98e0e",
            "name": "juan",
            "email": "juan@gmail.com"
          },
          {
            "_id": "6205e3ca6ec5a8f4c1f64d3e",
            "name": "ivana",
            "email": "ivana@outlook.com"
          }
        ]
      },
      {
        "title": "dev 2",
        "student": []
      }
    ]
  }
}
```

# Fragments

Nos permite ahorrar linas de codigo, crea un fragmento de los campos de algun `type`(Course, Student)

```graphql
{
  get1: getCourses {
    ...courseField
  }
  get2: getCourses {
    _id
    title
    student {
      _id
      name
      email
    }
  }
}

fragment courseField on Course {
  _id
  title
  teacher
  description
  topic
  student {
    ...studentFeld
  }
}

fragment studentFeld on Student {
  _id
  name
  email
}
```

```json
{
  "data": {
    "get1": [
      {
        "_id": "62072be3a24726b9a90b8d93",
        "title": "dev",
        "teacher": "janssen",
        "description": "una description",
        "topic": "Programacion",
        "student": [
          {
            "_id": "620498b1b6a399ed7af98e0e",
            "name": "juan",
            "email": "juan@gmail.com"
          },
          {
            "_id": "6205e3ca6ec5a8f4c1f64d3e",
            "name": "ivana",
            "email": "ivana@outlook.com"
          }
        ]
      },
      {
        "_id": "62072be3a24726b9a90b8d94",
        "title": "dev 2",
        "teacher": "janssen 2",
        "description": "una description 2",
        "topic": "Programacion 2",
        "student": []
      },
      {
        "_id": "62072be3a24726b9a90b8d95",
        "title": "dev3 ",
        "teacher": "janssen3 ",
        "description": "una description3 ",
        "topic": "Programacion3 ",
        "student": [
          {
            "_id": "620498b1b6a399ed7af98e0e",
            "name": "juan",
            "email": "juan@gmail.com"
          },
          {
            "_id": "6205e3ca6ec5a8f4c1f64d3e",
            "name": "ivana",
            "email": "ivana@outlook.com"
          }
        ]
      }
    ],
    "get2": [
      {
        "_id": "62072be3a24726b9a90b8d93",
        "title": "dev",
        "student": [
          {
            "_id": "620498b1b6a399ed7af98e0e",
            "name": "juan",
            "email": "juan@gmail.com"
          },
          {
            "_id": "6205e3ca6ec5a8f4c1f64d3e",
            "name": "ivana",
            "email": "ivana@outlook.com"
          }
        ]
      },
      {
        "_id": "62072be3a24726b9a90b8d94",
        "title": "dev 2",
        "student": []
      },
      {
        "_id": "62072be3a24726b9a90b8d95",
        "title": "dev3 ",
        "student": [
          {
            "_id": "620498b1b6a399ed7af98e0e",
            "name": "juan",
            "email": "juan@gmail.com"
          },
          {
            "_id": "6205e3ca6ec5a8f4c1f64d3e",
            "name": "ivana",
            "email": "ivana@outlook.com"
          }
        ]
      }
    ]
  }
}
```

# variables

Nos permite agregar variables en el área de variables en la parte inferior para tener un codigo mas limpio

```graphql
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}

---------------------variables---------------------
{
  "episode": "JEDI"
}
```

**output:**

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

# Interfaces

Interface vendria a ser como un `type` mas, solo que esta puede tener otros valores diferentes, puede ser de type **droid**, o type **human** y se consulta con un fragment que haga referencia al `type`

Like many type systems, GraphQL supports interfaces. An _Interface_ is an abstract type that includes a certain set of fields that a type must include to implement the interface.

For example, you could have an interface **Character** that represents any character in the Star Wars trilogy:

### Schema

```graphql
interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
}
```

This means that any type that _implements_ **Character** needs to have these exact fields, with these arguments and return types.

For example, here are some types that might implement **Character**:

```graphql
type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}

type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}
```

# Consulta

```graphql
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
  }
}
-------variables-----------------------
{
  "ep": "JEDI"
}
```

**Output:**

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

# Directives

Podemos cambiar la consulta dinamicamente las directivas,
`@include(id: $myvariableBoolean)`,`@skip(id: $myvariableBoolean)`, `@deprecated`, etc

We discussed above how variables enable us to avoid doing manual string interpolation to construct dynamic queries. Passing variables in arguments solves a pretty big class of these problems, but we might also need a way to dynamically change the structure and shape of our queries using variables. For example, we can imagine a UI component that has a summarized and detailed view, where one includes more fields than the other.

Let's construct a query for such a component:

```graphql
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}

----------------varables---------------
{
  "episode": "JEDI",
  "withFriends": false
}
```

**output:**

```json
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```


# Union types

Nos permite devolver diferentes `types` aunque no tengan nada en comun

### Schema

```graphql
union SearchResult = Human | Droid | Starship
#
type Query{
    search(text:string):SearchResult
}
```

### Consulta


```graphql
{
  search(text: "an") {
    __typename
    ... on Human {
      name
      height
    }
    ... on Droid {
      name
      primaryFunction
    }
    ... on Starship {
      name
      length
    }
  }
}
```

**output:**

```json
{
  "data": {
    "search": [
      {
        "__typename": "Human",
        "name": "Han Solo",
        "height": 1.8
      },
      {
        "__typename": "Human",
        "name": "Leia Organa",
        "height": 1.5
      },
      {
        "__typename": "Starship",
        "name": "TIE Advanced x1",
        "length": 9.2
      }
    ]
  }
}
```

