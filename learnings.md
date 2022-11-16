Priorties questions that are supposed to be asked
1. Questions about structure : To identify Entities and relationship between them
- Current scope
- Future scope
2. Question about behaviour or functioanlies i.e (How)

Ideally we create use case diagram when requirements are clear to us
It helps us to identify what are the different functionalities that we have to offer

if requirements are not clear
Try to think of major actors and how they will intract with the system(S/w application)

for example: if is is about parking-lot think how different actors will use that system

```plantuml
@startuml
rectangle Parknglot {
    
}
@enduml
```

in termonology of REST resource === entities
something will be called idempotent if we always get same output for same set of input 
so post is not idempotent
put is idempotent
get is idempotent

- In an iterview don try to fill out all the entity in the first go , leave the class as mock class. Later on in the interview when get some clarity add attributes in the class

- Controller
is the layer which handles the request
Controller should be extremly dumb
Responsblity of a controller
1. Request validation
2. Transformation or Data mapping -Whenever we have request DTOs all we do in our controller is we convert them to our model(Not a hard and fast rule)
3. Delegate class to service class


- We don include any business logic in our model and DTO classes, Business logic should be present in Service class
- Models and DTO should only have utility methods


There are two ways to structures controllers
1. Entity level 
   - Lots of classes but easy to maintain
   - In future it will be easy to splic application in microservices

2. Flow level - Related code is together but very hard to find a single api. So not east to maintain

Q What is Mixins : is used to different models for different requirement




Normal flow
- Request (DTO) -> Controller
- Controller --> DTO validation
- Controller DTO->Model
- Controller pass dto to service
- Service -> Repositiory -> Save entity to db


- Services classes are to have all the business logs
- Repository classes wraps databases and abtract away the complexity of our db class, and decouple the service layer from database



Q2. Where issueTicket functionality will be implemented


The routing mechanism controls which controller receives which requests.


Nest Specific


- Providers are plain JavaScript classes that are declared as providers in a module
- most applications, the resulting architecture will employ multiple modules, each encapsulating a closely related set of capabilities.
- Middleware is a function which is called before the route handler

- We do not include any business logic in models or dtos, business logic supposed to be kept in service classes