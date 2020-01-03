---
title: AirRadarData
---
### Base Classes

[UIPartData](/vext/ref/fb/uipartdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AirRadarData()                                                          | Create a new instance of this container type.                                                                   |
| AirRadarData(AirRadarData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AirRadarData([UIPartData](/vext/ref/fb/uipartdata/) other)                            | Upcast an instance of type [UIPartData](/vext/ref/fb/uipartdata/) to [AirRadarData](/vext/ref/fb/airradardata/).                            |
| AirRadarData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AirRadarData](/vext/ref/fb/airradardata/). |

## Properties

| Name                        | Type                           | Description |
| --------------------------- | ------------------------------ | ----------- |
| radarRange                  | number                         |             |
| radarSensitivity            | number                         |             |
| heatSensitivity             | number                         |             |
| missileIcon                 | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| centerIcon                  | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| friendlyIcon                | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| enemyIcon                   | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| laserPaintedIcon            | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| northIcon                   | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| subScreen                   | [SubScreenData](/vext/ref/fb/subscreendata/) |             |
| westIcon                    | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| southIcon                   | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| eastIcon                    | [UIHudIcon](/vext/ref/fb/uihudicon/)         |             |
| trackLaserPaintedObjects    | bool                           |             |
| trackOnlyUsedVehicles       | bool                           |             |
| useCameraComponentTransform | bool                           |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [AirRadarData](/vext/ref/fb/airradardata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AirRadarData](/vext/ref/fb/airradardata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
