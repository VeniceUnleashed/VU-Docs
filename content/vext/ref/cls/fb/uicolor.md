---
title: UIColor (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                        | Description                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| UIColor()                                                          | Create a new instance of this container type.                                                         |
| UIColor(UIColor other)                                             | Create a reference copy of an instance of the same type.                                              |
| UIColor([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIColor](UIColor). |

## Properties

| Name      | Type                              | Description |
| --------- | --------------------------------- | ----------- |
| color     | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| colorType | [UIColorType](UIColorType)        |             |

## Methods

| Type               | Name            | Parameters                                     |
| ------------------ | --------------- | ---------------------------------------------- |
| [UIColor](UIColor) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIColor](UIColor) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
