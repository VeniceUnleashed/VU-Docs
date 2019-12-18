---
title: HudVehicleTrackerData (Frostbite Container)
---
### Base Classes

[UIPartData](UIPartData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| HudVehicleTrackerData()                                                          | Create a new instance of this container type.                                                                                     |
| HudVehicleTrackerData(HudVehicleTrackerData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| HudVehicleTrackerData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [HudVehicleTrackerData](HudVehicleTrackerData).                            |
| HudVehicleTrackerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [HudVehicleTrackerData](HudVehicleTrackerData). |

## Properties

| Name                           | Type                                                             | Description |
| ------------------------------ | ---------------------------------------------------------------- | ----------- |
| edgePointer                    | [EdgePointerData](EdgePointerData)                               |             |
| enemyTrackerIcon               | [UIHudIcon](UIHudIcon)                                           |             |
| outsideScreenTrackerIcon       | [UIHudIcon](UIHudIcon)                                           |             |
| renderTargetData               | [VehicleTrackerRenderTargetData](VehicleTrackerRenderTargetData) |             |
| missileTrackerIcon             | [UIHudIcon](UIHudIcon)                                           |             |
| iconSize                       | number                                                           |             |
| radarSensitivity               | number                                                           |             |
| heatSensitivity                | number                                                           |             |
| friendlyTrackerIcon            | [UIHudIcon](UIHudIcon)                                           |             |
| laserPaintedVehicleTrackerIcon | [UIHudIcon](UIHudIcon)                                           |             |
| maxDistance                    | number                                                           |             |
| distanceIconShrinkFactor       | number                                                           |             |
| missileLockTrackerIcon         | [UIHudIcon](UIHudIcon)                                           |             |
| trackOnlyUsedVehicles          | bool                                                             |             |
| useTrackerSignatures           | bool                                                             |             |
| enableEdgePointers             | bool                                                             |             |
| trackLaserPaintedObjects       | bool                                                             |             |
| useCameraComponentTransform    | bool                                                             |             |
| showTracker                    | bool                                                             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [HudVehicleTrackerData](HudVehicleTrackerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [HudVehicleTrackerData](HudVehicleTrackerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
