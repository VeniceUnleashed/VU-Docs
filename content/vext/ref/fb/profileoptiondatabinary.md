---
title: ProfileOptionDataBinary
---
### Base Classes

[ProfileOptionData](ProfileOptionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataBinary()                                                          | Create a new instance of this container type.                                                                                         |
| ProfileOptionDataBinary(ProfileOptionDataBinary other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ProfileOptionDataBinary([ProfileOptionData](ProfileOptionData) other)              | Upcast an instance of type [ProfileOptionData](ProfileOptionData) to [ProfileOptionDataBinary](ProfileOptionDataBinary).              |
| ProfileOptionDataBinary([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionDataBinary](ProfileOptionDataBinary).                                      |
| ProfileOptionDataBinary([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataBinary](ProfileOptionDataBinary). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| maxLength | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataBinary](ProfileOptionDataBinary) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataBinary](ProfileOptionDataBinary) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
