---
title: ChildRotationBodyData (Frostbite Container)
---
### Base Classes

[RotationBodyData](RotationBodyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ChildRotationBodyData()                                                          | Create a new instance of this container type.                                                                                     |
| ChildRotationBodyData(ChildRotationBodyData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ChildRotationBodyData([RotationBodyData](RotationBodyData) other)                | Upcast an instance of type [RotationBodyData](RotationBodyData) to [ChildRotationBodyData](ChildRotationBodyData).                |
| ChildRotationBodyData([MovingBodyData](MovingBodyData) other)                    | Upcast an instance of type [MovingBodyData](MovingBodyData) to [ChildRotationBodyData](ChildRotationBodyData).                    |
| ChildRotationBodyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ChildRotationBodyData](ChildRotationBodyData). |

## Properties

| Name                     | Type                                         | Description |
| ------------------------ | -------------------------------------------- | ----------- |
| forceModifier            | number                                       |             |
| resetForceModifier       | number                                       |             |
| resetForceInputThreshold | number                                       |             |
| rotationInput            | [EntryInputActionEnum](EntryInputActionEnum) |             |
| worldSpaceLockEfficiency | number                                       |             |
| useLinearInput           | bool                                         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChildRotationBodyData](ChildRotationBodyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ChildRotationBodyData](ChildRotationBodyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
