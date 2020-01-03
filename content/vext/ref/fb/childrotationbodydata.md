---
title: ChildRotationBodyData
---
### Base Classes

[RotationBodyData](/vext/ref/fb/rotationbodydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ChildRotationBodyData()                                                          | Create a new instance of this container type.                                                                                     |
| ChildRotationBodyData(ChildRotationBodyData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ChildRotationBodyData([RotationBodyData](/vext/ref/fb/rotationbodydata/) other)                | Upcast an instance of type [RotationBodyData](/vext/ref/fb/rotationbodydata/) to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata/).                |
| ChildRotationBodyData([MovingBodyData](/vext/ref/fb/movingbodydata/) other)                    | Upcast an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata/) to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata/).                    |
| ChildRotationBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata/). |

## Properties

| Name                     | Type                                         | Description |
| ------------------------ | -------------------------------------------- | ----------- |
| forceModifier            | number                                       |             |
| resetForceModifier       | number                                       |             |
| resetForceInputThreshold | number                                       |             |
| rotationInput            | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| worldSpaceLockEfficiency | number                                       |             |
| useLinearInput           | bool                                         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildRotationBodyData](/vext/ref/fb/childrotationbodydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
