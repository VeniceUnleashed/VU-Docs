---
title: Curve2D
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                        | Description                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Curve2D()                                                          | Create a new instance of this container type.                                                         |
| Curve2D(Curve2D other)                                             | Create a reference copy of an instance of the same type.                                              |
| Curve2D([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Curve2D](/vext/ref/fb/curve2d/). |

## Properties

| Name  | Type                                  | Description |
| ----- | ------------------------------------- | ----------- |
| curve | [Vec2](/vext/ref/shared/class/vec2)\[\] |             |

## Methods

| Type               | Name            | Parameters                                     |
| ------------------ | --------------- | ---------------------------------------------- |
| [Curve2D](/vext/ref/fb/curve2d/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Curve2D](/vext/ref/fb/curve2d/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
