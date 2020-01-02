---
title: ProfileOptionData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionData()                                                          | Create a new instance of this container type.                                                                             |
| ProfileOptionData(ProfileOptionData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| ProfileOptionData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionData](ProfileOptionData).                                      |
| ProfileOptionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionData](ProfileOptionData). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| uniqueId | string                                   |             |
| category | [ProfileOptionsType](ProfileOptionsType) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionData](ProfileOptionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionData](ProfileOptionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
