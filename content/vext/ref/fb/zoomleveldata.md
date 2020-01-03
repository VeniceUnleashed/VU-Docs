---
title: ZoomLevelData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ZoomLevelData()                                                          | Create a new instance of this container type.                                                                     |
| ZoomLevelData(ZoomLevelData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| ZoomLevelData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ZoomLevelData](/vext/ref/fb/zoomleveldata/). |

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
| onActivateEventType          | [ZoomLevelActivateEventType](/vext/ref/fb/zoomlevelactivateeventtype/) |             |
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
| [ZoomLevelData](/vext/ref/fb/zoomleveldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ZoomLevelData](/vext/ref/fb/zoomleveldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
