---
title: AirRadarData (Frostbite Container)
---
### Base Classes

[UIPartData](UIPartData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AirRadarData()                                                          | Create a new instance of this container type.                                                                   |
| AirRadarData(AirRadarData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AirRadarData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [AirRadarData](AirRadarData).                            |
| AirRadarData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AirRadarData](AirRadarData). |

## Properties

| Name                        | Type                           | Description |
| --------------------------- | ------------------------------ | ----------- |
| radarRange                  | number                         |             |
| radarSensitivity            | number                         |             |
| heatSensitivity             | number                         |             |
| missileIcon                 | [UIHudIcon](UIHudIcon)         |             |
| centerIcon                  | [UIHudIcon](UIHudIcon)         |             |
| friendlyIcon                | [UIHudIcon](UIHudIcon)         |             |
| enemyIcon                   | [UIHudIcon](UIHudIcon)         |             |
| laserPaintedIcon            | [UIHudIcon](UIHudIcon)         |             |
| northIcon                   | [UIHudIcon](UIHudIcon)         |             |
| subScreen                   | [SubScreenData](SubScreenData) |             |
| westIcon                    | [UIHudIcon](UIHudIcon)         |             |
| southIcon                   | [UIHudIcon](UIHudIcon)         |             |
| eastIcon                    | [UIHudIcon](UIHudIcon)         |             |
| trackLaserPaintedObjects    | bool                           |             |
| trackOnlyUsedVehicles       | bool                           |             |
| useCameraComponentTransform | bool                           |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [AirRadarData](AirRadarData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AirRadarData](AirRadarData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
