---
title: ProfileOptionDataString (Frostbite Container)
---
### Base Classes

[ProfileOptionData](ProfileOptionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataString()                                                          | Create a new instance of this container type.                                                                                         |
| ProfileOptionDataString(ProfileOptionDataString other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ProfileOptionDataString([ProfileOptionData](ProfileOptionData) other)              | Upcast an instance of type [ProfileOptionData](ProfileOptionData) to [ProfileOptionDataString](ProfileOptionDataString).              |
| ProfileOptionDataString([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionDataString](ProfileOptionDataString).                                      |
| ProfileOptionDataString([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ProfileOptionDataString](ProfileOptionDataString). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| maxLength | number |             |
| value     | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataString](ProfileOptionDataString) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ProfileOptionDataString](ProfileOptionDataString) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
