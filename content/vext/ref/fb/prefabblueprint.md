---
title: PrefabBlueprint
---
### Base Classes

[Blueprint](Blueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PrefabBlueprint()                                                          | Create a new instance of this container type.                                                                         |
| PrefabBlueprint(PrefabBlueprint other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PrefabBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [PrefabBlueprint](PrefabBlueprint).                              |
| PrefabBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [PrefabBlueprint](PrefabBlueprint).                      |
| PrefabBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [PrefabBlueprint](PrefabBlueprint).                          |
| PrefabBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PrefabBlueprint](PrefabBlueprint).                                      |
| PrefabBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PrefabBlueprint](PrefabBlueprint). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| objects | [GameObjectData](GameObjectData)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PrefabBlueprint](PrefabBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PrefabBlueprint](PrefabBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
