---
title: ObjectBlueprint
---
### Base Classes

[Blueprint](Blueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ObjectBlueprint()                                                          | Create a new instance of this container type.                                                                         |
| ObjectBlueprint(ObjectBlueprint other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ObjectBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [ObjectBlueprint](ObjectBlueprint).                              |
| ObjectBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [ObjectBlueprint](ObjectBlueprint).                      |
| ObjectBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [ObjectBlueprint](ObjectBlueprint).                          |
| ObjectBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ObjectBlueprint](ObjectBlueprint).                                      |
| ObjectBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ObjectBlueprint](ObjectBlueprint). |

## Properties

| Name   | Type                             | Description |
| ------ | -------------------------------- | ----------- |
| object | [GameObjectData](GameObjectData) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ObjectBlueprint](ObjectBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ObjectBlueprint](ObjectBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
