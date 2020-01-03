---
title: ProfileOptionDataEnum
---
### Base Classes

[ProfileOptionData](/vext/ref/fb/profileoptiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataEnum()                                                          | Create a new instance of this container type.                                                                                     |
| ProfileOptionDataEnum(ProfileOptionDataEnum other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ProfileOptionDataEnum([ProfileOptionData](/vext/ref/fb/profileoptiondata/) other)              | Upcast an instance of type [ProfileOptionData](/vext/ref/fb/profileoptiondata/) to [ProfileOptionDataEnum](/vext/ref/fb/profileoptiondataenum/).              |
| ProfileOptionDataEnum([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProfileOptionDataEnum](/vext/ref/fb/profileoptiondataenum/).                                      |
| ProfileOptionDataEnum([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataEnum](/vext/ref/fb/profileoptiondataenum/). |

## Properties

| Name  | Type                                                       | Description |
| ----- | ---------------------------------------------------------- | ----------- |
| items | [ProfileOptionDataEnumItem](/vext/ref/fb/profileoptiondataenumitem/)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataEnum](/vext/ref/fb/profileoptiondataenum/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataEnum](/vext/ref/fb/profileoptiondataenum/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
