---
title: PrefabBlueprint
---
### Base Classes

[Blueprint](/vext/ref/fb/blueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PrefabBlueprint()                                                          | Create a new instance of this container type.                                                                         |
| PrefabBlueprint(PrefabBlueprint other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PrefabBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [PrefabBlueprint](/vext/ref/fb/prefabblueprint/).                              |
| PrefabBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [PrefabBlueprint](/vext/ref/fb/prefabblueprint/).                      |
| PrefabBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [PrefabBlueprint](/vext/ref/fb/prefabblueprint/).                          |
| PrefabBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PrefabBlueprint](/vext/ref/fb/prefabblueprint/).                                      |
| PrefabBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PrefabBlueprint](/vext/ref/fb/prefabblueprint/). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| objects | [GameObjectData](/vext/ref/fb/gameobjectdata/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
