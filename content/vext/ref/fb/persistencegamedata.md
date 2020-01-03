---
title: PersistenceGameData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PersistenceGameData()                                                          | Create a new instance of this container type.                                                                                 |
| PersistenceGameData(PersistenceGameData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PersistenceGameData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PersistenceGameData](/vext/ref/fb/persistencegamedata/).                                      |
| PersistenceGameData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceGameData](/vext/ref/fb/persistencegamedata/). |

## Properties

| Name   | Type               | Description |
| ------ | ------------------ | ----------- |
| assets | [Asset](/vext/ref/fb/asset/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PersistenceGameData](/vext/ref/fb/persistencegamedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceGameData](/vext/ref/fb/persistencegamedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
