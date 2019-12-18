---
title: ColorReference (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ColorReference()                                                          | Create a new instance of this container type.                                                                       |
| ColorReference(ColorReference other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ColorReference([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ColorReference](ColorReference).                                      |
| ColorReference([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ColorReference](ColorReference). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| color | [Vec4](/vext/ref/cls/shr/Vec4) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ColorReference](ColorReference) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ColorReference](ColorReference) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
