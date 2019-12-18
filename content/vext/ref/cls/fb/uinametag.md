---
title: UINametag (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| UINametag()                                                          | Create a new instance of this container type.                                                             |
| UINametag(UINametag other)                                           | Create a reference copy of an instance of the same type.                                                  |
| UINametag([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UINametag](UINametag). |

## Properties

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| textColor          | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| iconFadeDistance   | number                            |             |
| iconMaxDistance    | number                            |             |
| icon               | [UIHudIcon](UIHudIcon)            |             |
| textFadeDistance   | number                            |             |
| healthFadeDistance | number                            |             |
| healthMaxDistance  | number                            |             |
| textMaxDistance    | number                            |             |
| targetInTimer      | number                            |             |
| targetOutTimer     | number                            |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [UINametag](UINametag) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UINametag](UINametag) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
