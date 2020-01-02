---
title: PersistenceGameData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PersistenceGameData()                                                          | Create a new instance of this container type.                                                                                 |
| PersistenceGameData(PersistenceGameData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PersistenceGameData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PersistenceGameData](PersistenceGameData).                                      |
| PersistenceGameData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceGameData](PersistenceGameData). |

## Properties

| Name   | Type               | Description |
| ------ | ------------------ | ----------- |
| assets | [Asset](Asset)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PersistenceGameData](PersistenceGameData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceGameData](PersistenceGameData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
