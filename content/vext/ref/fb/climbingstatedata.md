---
title: ClimbingStateData
---
### Base Classes

[CharacterStateData](/vext/ref/fb/characterstatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ClimbingStateData()                                                          | Create a new instance of this container type.                                                                             |
| ClimbingStateData(ClimbingStateData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| ClimbingStateData([CharacterStateData](/vext/ref/fb/characterstatedata/) other)            | Upcast an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata/) to [ClimbingStateData](/vext/ref/fb/climbingstatedata/).            |
| ClimbingStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClimbingStateData](/vext/ref/fb/climbingstatedata/). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| lateralInputScale          | number |             |
| downAngleLimit             | number |             |
| dropOffAngle               | number |             |
| attractionVelocity         | number |             |
| pushAwayVelocity           | number |             |
| climbHeightOffset          | number |             |
| climbOffVerticalDistance   | number |             |
| climbOffVerticalTime       | number |             |
| climbOffHorizontalDistance | number |             |
| climbOffHorizontalTime     | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ClimbingStateData](/vext/ref/fb/climbingstatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClimbingStateData](/vext/ref/fb/climbingstatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
