---
title: ProfileOptionDataBinary
---
### Base Classes

[ProfileOptionData](/vext/ref/fb/profileoptiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataBinary()                                                          | Create a new instance of this container type.                                                                                         |
| ProfileOptionDataBinary(ProfileOptionDataBinary other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ProfileOptionDataBinary([ProfileOptionData](/vext/ref/fb/profileoptiondata/) other)              | Upcast an instance of type [ProfileOptionData](/vext/ref/fb/profileoptiondata/) to [ProfileOptionDataBinary](/vext/ref/fb/profileoptiondatabinary/).              |
| ProfileOptionDataBinary([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProfileOptionDataBinary](/vext/ref/fb/profileoptiondatabinary/).                                      |
| ProfileOptionDataBinary([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataBinary](/vext/ref/fb/profileoptiondatabinary/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| maxLength | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataBinary](/vext/ref/fb/profileoptiondatabinary/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataBinary](/vext/ref/fb/profileoptiondatabinary/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
