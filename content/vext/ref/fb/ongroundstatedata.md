---
title: OnGroundStateData
---
### Base Classes

[CharacterStateData](/vext/ref/fb/characterstatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| OnGroundStateData()                                                          | Create a new instance of this container type.                                                                             |
| OnGroundStateData(OnGroundStateData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| OnGroundStateData([CharacterStateData](/vext/ref/fb/characterstatedata/) other)            | Upcast an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata/) to [OnGroundStateData](/vext/ref/fb/ongroundstatedata/).            |
| OnGroundStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnGroundStateData](/vext/ref/fb/ongroundstatedata/). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| jumpDelay                 | number |             |
| jumpStaminaPenalty        | number |             |
| allowedDistanceFromGround | number |             |
| groundHugging             | bool   |             |
| limitDownwardVelocity     | bool   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [OnGroundStateData](/vext/ref/fb/ongroundstatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OnGroundStateData](/vext/ref/fb/ongroundstatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
