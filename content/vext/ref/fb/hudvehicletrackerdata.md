---
title: HudVehicleTrackerData
---
### Base Classes

[UIPartData](/vext/ref/fb/uipartdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| HudVehicleTrackerData()                                                          | Create a new instance of this container type.                                                                                     |
| HudVehicleTrackerData(HudVehicleTrackerData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| HudVehicleTrackerData([UIPartData](/vext/ref/fb/uipartdata/) other)                            | Upcast an instance of type [UIPartData](/vext/ref/fb/uipartdata/) to [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata/).                            |
| HudVehicleTrackerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata/). |

## Properties

| Name                           | Type                                                             | Description |
| ------------------------------ | ---------------------------------------------------------------- | ----------- |
| edgePointer                    | [EdgePointerData](/vext/ref/fb/edgepointerdata/)                               |             |
| enemyTrackerIcon               | [UIHudIcon](/vext/ref/fb/uihudicon/)                                           |             |
| outsideScreenTrackerIcon       | [UIHudIcon](/vext/ref/fb/uihudicon/)                                           |             |
| renderTargetData               | [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata/) |             |
| missileTrackerIcon             | [UIHudIcon](/vext/ref/fb/uihudicon/)                                           |             |
| iconSize                       | number                                                           |             |
| radarSensitivity               | number                                                           |             |
| heatSensitivity                | number                                                           |             |
| friendlyTrackerIcon            | [UIHudIcon](/vext/ref/fb/uihudicon/)                                           |             |
| laserPaintedVehicleTrackerIcon | [UIHudIcon](/vext/ref/fb/uihudicon/)                                           |             |
| maxDistance                    | number                                                           |             |
| distanceIconShrinkFactor       | number                                                           |             |
| missileLockTrackerIcon         | [UIHudIcon](/vext/ref/fb/uihudicon/)                                           |             |
| trackOnlyUsedVehicles          | bool                                                             |             |
| useTrackerSignatures           | bool                                                             |             |
| enableEdgePointers             | bool                                                             |             |
| trackLaserPaintedObjects       | bool                                                             |             |
| useCameraComponentTransform    | bool                                                             |             |
| showTracker                    | bool                                                             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
