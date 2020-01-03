---
title: LogicPrefabBlueprint
---
### Base Classes

[PrefabBlueprint](PrefabBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LogicPrefabBlueprint()                                                          | Create a new instance of this container type.                                                                                   |
| LogicPrefabBlueprint(LogicPrefabBlueprint other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LogicPrefabBlueprint([PrefabBlueprint](PrefabBlueprint) other)                  | Upcast an instance of type [PrefabBlueprint](PrefabBlueprint) to [LogicPrefabBlueprint](LogicPrefabBlueprint).                  |
| LogicPrefabBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [LogicPrefabBlueprint](LogicPrefabBlueprint).                              |
| LogicPrefabBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [LogicPrefabBlueprint](LogicPrefabBlueprint).                      |
| LogicPrefabBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [LogicPrefabBlueprint](LogicPrefabBlueprint).                          |
| LogicPrefabBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LogicPrefabBlueprint](LogicPrefabBlueprint).                                      |
| LogicPrefabBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LogicPrefabBlueprint](LogicPrefabBlueprint). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LogicPrefabBlueprint](LogicPrefabBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LogicPrefabBlueprint](LogicPrefabBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
