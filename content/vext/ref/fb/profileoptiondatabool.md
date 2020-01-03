---
title: ProfileOptionDataBool
---
### Base Classes

[ProfileOptionData](ProfileOptionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ProfileOptionDataBool()                                                          | Create a new instance of this container type.                                                                                     |
| ProfileOptionDataBool(ProfileOptionDataBool other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ProfileOptionDataBool([ProfileOptionData](ProfileOptionData) other)              | Upcast an instance of type [ProfileOptionData](ProfileOptionData) to [ProfileOptionDataBool](ProfileOptionDataBool).              |
| ProfileOptionDataBool([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProfileOptionDataBool](ProfileOptionDataBool).                                      |
| ProfileOptionDataBool([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileOptionDataBool](ProfileOptionDataBool). |

## Properties

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileOptionDataBool](ProfileOptionDataBool) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileOptionDataBool](ProfileOptionDataBool) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
