---
title: EntityManager (Server Manager)
---
## Description

## Methods

| Type                                                  | Name                                                        | Parameters                                                                                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [EntityIterator](/vext/ref/cls/shr/entityiterator) | [GetIterator](#getiterator)                                 | string **entityType**                                                                                                                      |
| [Entity](/vext/ref/cls/shr/entity)                 | [CreateEntity](#createentity)                               | [DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**        |
| [Entity](/vext/ref/cls/shr/entity)                 | [CreateEntity](#createentity)                               | [DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [EntityCreationParams](/vext/ref/cls/shr/entitycreationparams) **params** |
| [Entity\[](/vext/ref/cls/shr/entity[])\]           | [CreateEntitiesFromBlueprint](#createentitiesfromblueprint) | [DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**        |
| [Entity\[](/vext/ref/cls/shr/entity[])\]           | [CreateEntitiesFromBlueprint](#createentitiesfromblueprint) | [DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [EntityCreationParams](/vext/ref/cls/shr/entitycreationparams) **params** |

### GetIterator

> [EntityIterator](/vext/ref/cls/shr/entityiterator) **GetIterator**(string **entityType**)

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| entityType | string |             |

### CreateEntity

> [Entity](/vext/ref/cls/shr/entity) **CreateEntity**([DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| data      | [DataContainer](/vext/ref/cls/shr/datacontainer)     |             |
| transform | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |

### CreateEntity

> [Entity](/vext/ref/cls/shr/entity) **CreateEntity**([DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [EntityCreationParams](/vext/ref/cls/shr/entitycreationparams) **params**)

#### Parameters

| Name   | Type                                                              | Description |
| ------ | ----------------------------------------------------------------- | ----------- |
| data   | [DataContainer](/vext/ref/cls/shr/datacontainer)               |             |
| params | [EntityCreationParams](/vext/ref/cls/shr/entitycreationparams) |             |

### CreateEntitiesFromBlueprint

> [Entity\[](/vext/ref/cls/shr/entity[])\] **CreateEntitiesFromBlueprint**([DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| data      | [DataContainer](/vext/ref/cls/shr/datacontainer)     |             |
| transform | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |

### CreateEntitiesFromBlueprint

> [Entity\[](/vext/ref/cls/shr/entity[])\] **CreateEntitiesFromBlueprint**([DataContainer](/vext/ref/cls/shr/datacontainer) **data**, [EntityCreationParams](/vext/ref/cls/shr/entitycreationparams) **params**)

#### Parameters

| Name   | Type                                                              | Description |
| ------ | ----------------------------------------------------------------- | ----------- |
| data   | [DataContainer](/vext/ref/cls/shr/datacontainer)               |             |
| params | [EntityCreationParams](/vext/ref/cls/shr/entitycreationparams) |             |
