---
title: ProfileOptionDataEnum
---
### Base Classes

[ProfileOptionData](ProfileOptionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataEnum()                                                          | Create a new instance of this container type.                                                                                     |
| ProfileOptionDataEnum(ProfileOptionDataEnum other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ProfileOptionDataEnum([ProfileOptionData](ProfileOptionData) other)              | Upcast an instance of type [ProfileOptionData](ProfileOptionData) to [ProfileOptionDataEnum](ProfileOptionDataEnum).              |
| ProfileOptionDataEnum([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionDataEnum](ProfileOptionDataEnum).                                      |
| ProfileOptionDataEnum([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataEnum](ProfileOptionDataEnum). |

## Properties

| Name  | Type                                                       | Description |
| ----- | ---------------------------------------------------------- | ----------- |
| items | [ProfileOptionDataEnumItem](ProfileOptionDataEnumItem)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataEnum](ProfileOptionDataEnum) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataEnum](ProfileOptionDataEnum) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
