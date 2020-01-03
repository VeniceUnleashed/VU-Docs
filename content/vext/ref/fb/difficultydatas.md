---
title: DifficultyDatas
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DifficultyDatas()                                                          | Create a new instance of this container type.                                                                         |
| DifficultyDatas(DifficultyDatas other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DifficultyDatas([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DifficultyDatas](DifficultyDatas).                                      |
| DifficultyDatas([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DifficultyDatas](DifficultyDatas). |

## Properties

| Name         | Type                                 | Description |
| ------------ | ------------------------------------ | ----------- |
| difficulties | [DifficultyData](DifficultyData)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DifficultyDatas](DifficultyDatas) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DifficultyDatas](DifficultyDatas) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
