---
title: ProfileOptionDataInt (Frostbite Container)
---
### Base Classes

[ProfileOptionData](ProfileOptionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataInt()                                                          | Create a new instance of this container type.                                                                                   |
| ProfileOptionDataInt(ProfileOptionDataInt other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ProfileOptionDataInt([ProfileOptionData](ProfileOptionData) other)              | Upcast an instance of type [ProfileOptionData](ProfileOptionData) to [ProfileOptionDataInt](ProfileOptionDataInt).              |
| ProfileOptionDataInt([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionDataInt](ProfileOptionDataInt).                                      |
| ProfileOptionDataInt([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ProfileOptionDataInt](ProfileOptionDataInt). |

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
| [ProfileOptionDataInt](ProfileOptionDataInt) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ProfileOptionDataInt](ProfileOptionDataInt) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
