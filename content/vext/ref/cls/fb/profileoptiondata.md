---
title: ProfileOptionData (Frostbite Container)
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
| ProfileOptionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ProfileOptionData](ProfileOptionData). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| uniqueId | string                                   |             |
| category | [ProfileOptionsType](ProfileOptionsType) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionData](ProfileOptionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ProfileOptionData](ProfileOptionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
