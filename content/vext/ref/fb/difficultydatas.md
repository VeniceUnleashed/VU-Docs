---
title: DifficultyDatas
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DifficultyDatas()                                                          | Create a new instance of this container type.                                                                         |
| DifficultyDatas(DifficultyDatas other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DifficultyDatas([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DifficultyDatas](/vext/ref/fb/difficultydatas/).                                      |
| DifficultyDatas([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DifficultyDatas](/vext/ref/fb/difficultydatas/). |

## Properties

| Name         | Type                                 | Description |
| ------------ | ------------------------------------ | ----------- |
| difficulties | [DifficultyData](/vext/ref/fb/difficultydata/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DifficultyDatas](/vext/ref/fb/difficultydatas/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DifficultyDatas](/vext/ref/fb/difficultydatas/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
