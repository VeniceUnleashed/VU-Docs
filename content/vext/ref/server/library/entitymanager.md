---
title: EntityManager (Server Manager)
---
## Description

## Methods

| Type                                                  | Name                                                        | Parameters                                                                                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [EntityIterator](/vext/ref/shared/class/entityiterator) | [GetIterator](#getiterator)                                 | string **entityType**                                                                                                                      |
| [Entity](/vext/ref/shared/class/entity)                 | [CreateEntity](#createentity)                               | [DataContainer](/vext/ref/shared/class/datacontainer) **data**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**        |
| [Entity](/vext/ref/shared/class/entity)                 | [CreateEntity](#createentity)                               | [DataContainer](/vext/ref/shared/class/datacontainer) **data**, [EntityCreationParams](/vext/ref/shared/class/entitycreationparams) **params** |
| [Entity\[](/vext/ref/shared/class/entity[])\]           | [CreateEntitiesFromBlueprint](#createentitiesfromblueprint) | [DataContainer](/vext/ref/shared/class/datacontainer) **data**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**        |
| [Entity\[](/vext/ref/shared/class/entity[])\]           | [CreateEntitiesFromBlueprint](#createentitiesfromblueprint) | [DataContainer](/vext/ref/shared/class/datacontainer) **data**, [EntityCreationParams](/vext/ref/shared/class/entitycreationparams) **params** |

### GetIterator

> [EntityIterator](/vext/ref/shared/class/entityiterator) **GetIterator**(string **entityType**)

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| entityType | string |             |

### CreateEntity

> [Entity](/vext/ref/shared/class/entity) **CreateEntity**([DataContainer](/vext/ref/shared/class/datacontainer) **data**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| data      | [DataContainer](/vext/ref/shared/class/datacontainer)     |             |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |

### CreateEntity

> [Entity](/vext/ref/shared/class/entity) **CreateEntity**([DataContainer](/vext/ref/shared/class/datacontainer) **data**, [EntityCreationParams](/vext/ref/shared/class/entitycreationparams) **params**)

#### Parameters

| Name   | Type                                                              | Description |
| ------ | ----------------------------------------------------------------- | ----------- |
| data   | [DataContainer](/vext/ref/shared/class/datacontainer)               |             |
| params | [EntityCreationParams](/vext/ref/shared/class/entitycreationparams) |             |

### CreateEntitiesFromBlueprint

> [Entity\[](/vext/ref/shared/class/entity[])\] **CreateEntitiesFromBlueprint**([DataContainer](/vext/ref/shared/class/datacontainer) **data**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| data      | [DataContainer](/vext/ref/shared/class/datacontainer)     |             |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |

### CreateEntitiesFromBlueprint

> [Entity\[](/vext/ref/shared/class/entity[])\] **CreateEntitiesFromBlueprint**([DataContainer](/vext/ref/shared/class/datacontainer) **data**, [EntityCreationParams](/vext/ref/shared/class/entitycreationparams) **params**)

#### Parameters

| Name   | Type                                                              | Description |
| ------ | ----------------------------------------------------------------- | ----------- |
| data   | [DataContainer](/vext/ref/shared/class/datacontainer)               |             |
| params | [EntityCreationParams](/vext/ref/shared/class/entitycreationparams) |             |
