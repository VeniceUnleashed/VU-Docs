---
title: ProfileOptionDataInt
---
### Base Classes

[ProfileOptionData](/vext/ref/fb/profileoptiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataInt()                                                          | Create a new instance of this container type.                                                                                   |
| ProfileOptionDataInt(ProfileOptionDataInt other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ProfileOptionDataInt([ProfileOptionData](/vext/ref/fb/profileoptiondata/) other)              | Upcast an instance of type [ProfileOptionData](/vext/ref/fb/profileoptiondata/) to [ProfileOptionDataInt](/vext/ref/fb/profileoptiondataint/).              |
| ProfileOptionDataInt([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProfileOptionDataInt](/vext/ref/fb/profileoptiondataint/).                                      |
| ProfileOptionDataInt([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataInt](/vext/ref/fb/profileoptiondataint/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| min   | number |             |
| max   | number |             |
| value | number |             |
| step  | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataInt](/vext/ref/fb/profileoptiondataint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataInt](/vext/ref/fb/profileoptiondataint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
