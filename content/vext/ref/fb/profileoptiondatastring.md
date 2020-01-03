---
title: ProfileOptionDataString
---
### Base Classes

[ProfileOptionData](/vext/ref/fb/profileoptiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataString()                                                          | Create a new instance of this container type.                                                                                         |
| ProfileOptionDataString(ProfileOptionDataString other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ProfileOptionDataString([ProfileOptionData](/vext/ref/fb/profileoptiondata/) other)              | Upcast an instance of type [ProfileOptionData](/vext/ref/fb/profileoptiondata/) to [ProfileOptionDataString](/vext/ref/fb/profileoptiondatastring/).              |
| ProfileOptionDataString([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProfileOptionDataString](/vext/ref/fb/profileoptiondatastring/).                                      |
| ProfileOptionDataString([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataString](/vext/ref/fb/profileoptiondatastring/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| maxLength | number |             |
| value     | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataString](/vext/ref/fb/profileoptiondatastring/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataString](/vext/ref/fb/profileoptiondatastring/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
