---
title: Curve2D (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                        | Description                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Curve2D()                                                          | Create a new instance of this container type.                                                         |
| Curve2D(Curve2D other)                                             | Create a reference copy of an instance of the same type.                                              |
| Curve2D([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Curve2D](Curve2D). |

## Properties

| Name  | Type                                  | Description |
| ----- | ------------------------------------- | ----------- |
| curve | [Vec2](/vext/ref/cls/shr/Vec2)\[\] |             |

## Methods

| Type               | Name            | Parameters                                     |
| ------------------ | --------------- | ---------------------------------------------- |
| [Curve2D](Curve2D) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Curve2D](Curve2D) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
