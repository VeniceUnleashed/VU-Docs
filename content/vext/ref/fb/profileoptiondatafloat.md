---
title: ProfileOptionDataFloat
---
### Base Classes

[ProfileOptionData](/vext/ref/fb/profileoptiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataFloat()                                                          | Create a new instance of this container type.                                                                                       |
| ProfileOptionDataFloat(ProfileOptionDataFloat other)                              | Create a reference copy of an instance of the same type.                                                                            |
| ProfileOptionDataFloat([ProfileOptionData](/vext/ref/fb/profileoptiondata/) other)              | Upcast an instance of type [ProfileOptionData](/vext/ref/fb/profileoptiondata/) to [ProfileOptionDataFloat](/vext/ref/fb/profileoptiondatafloat/).              |
| ProfileOptionDataFloat([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProfileOptionDataFloat](/vext/ref/fb/profileoptiondatafloat/).                                      |
| ProfileOptionDataFloat([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataFloat](/vext/ref/fb/profileoptiondatafloat/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| min   | number |             |
| max   | number |             |
| value | number |             |
| step  | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ProfileOptionDataFloat](/vext/ref/fb/profileoptiondatafloat/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataFloat](/vext/ref/fb/profileoptiondatafloat/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
