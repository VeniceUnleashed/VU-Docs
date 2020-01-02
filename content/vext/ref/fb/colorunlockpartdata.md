---
title: ColorUnlockPartData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ColorUnlockPartData()                                                          | Create a new instance of this container type.                                                                                 |
| ColorUnlockPartData(ColorUnlockPartData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ColorUnlockPartData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ColorUnlockPartData](ColorUnlockPartData). |

## Properties

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| colorReference | [ColorReference](ColorReference) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ColorUnlockPartData](ColorUnlockPartData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ColorUnlockPartData](ColorUnlockPartData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
