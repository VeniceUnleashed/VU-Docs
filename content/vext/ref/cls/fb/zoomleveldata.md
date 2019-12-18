---
title: ZoomLevelData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ZoomLevelData()                                                          | Create a new instance of this container type.                                                                     |
| ZoomLevelData(ZoomLevelData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| ZoomLevelData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ZoomLevelData](ZoomLevelData). |

## Properties

| Name                         | Type                                                     | Description |
| ---------------------------- | -------------------------------------------------------- | ----------- |
| fieldOfView                  | number                                                   |             |
| dispersionMultiplier         | number                                                   |             |
| lookSpeedMultiplier          | number                                                   |             |
| sprintLookSpeedMultiplier    | number                                                   |             |
| moveSpeedMultiplier          | number                                                   |             |
| swayPitchMultiplier          | number                                                   |             |
| swayYawMultiplier            | number                                                   |             |
| supportedSwayPitchMultiplier | number                                                   |             |
| supportedSwayYawMultiplier   | number                                                   |             |
| timePitchMultiplier          | number                                                   |             |
| timeYawMultiplier            | number                                                   |             |
| recoilMultiplier             | number                                                   |             |
| fadeToBlackDuration          | number                                                   |             |
| recoilFovMultiplier          | number                                                   |             |
| cameraImpulseMultiplier      | number                                                   |             |
| onActivateEventType          | [ZoomLevelActivateEventType](ZoomLevelActivateEventType) |             |
| startFadeToBlackAtTime       | number                                                   |             |
| fadeFromBlackDuration        | number                                                   |             |
| startFadeFromBlackAtTime     | number                                                   |             |
| screenExposureAreaScale      | number                                                   |             |
| fadeToBlackInZoomTransition  | bool                                                     |             |
| useFovSpecialisation         | bool                                                     |             |
| allowFieldOfViewScaling      | bool                                                     |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [ZoomLevelData](ZoomLevelData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ZoomLevelData](ZoomLevelData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
