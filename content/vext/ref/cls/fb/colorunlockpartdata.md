---
title: ColorUnlockPartData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ColorUnlockPartData()                                                          | Create a new instance of this container type.                                                                                 |
| ColorUnlockPartData(ColorUnlockPartData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ColorUnlockPartData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ColorUnlockPartData](ColorUnlockPartData). |

## Properties

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| colorReference | [ColorReference](ColorReference) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ColorUnlockPartData](ColorUnlockPartData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ColorUnlockPartData](ColorUnlockPartData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
