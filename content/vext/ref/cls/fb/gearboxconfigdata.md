---
title: GearboxConfigData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| GearboxConfigData()                                                          | Create a new instance of this container type.                                                                             |
| GearboxConfigData(GearboxConfigData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| GearboxConfigData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GearboxConfigData](GearboxConfigData). |

## Properties

| Name                          | Type       | Description |
| ----------------------------- | ---------- | ----------- |
| forwardGearRatios             | number\[\] |             |
| forwardGearSpeeds             | number\[\] |             |
| reverseGearRatios             | number\[\] |             |
| reverseGearSpeeds             | number\[\] |             |
| gearboxType                   | number     |             |
| gearboxMode                   | number     |             |
| gearChangeTime                | number     |             |
| gearDownSpeedFactor           | number     |             |
| oppositeDirGearChangeMaxSpeed | number     |             |
| oppositeDirGearChangeTime     | number     |             |
| clutchSpeedFactor             | number     |             |
| transmissionEfficiency        | number     |             |
| backwardThrottleLimit         | number     |             |
| useClassicGearBoxAutoClutch   | bool       |             |
| useNeutralGear                | bool       |             |
| limitBackwardThrottle         | bool       |             |
| useAutoClutch                 | bool       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [GearboxConfigData](GearboxConfigData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GearboxConfigData](GearboxConfigData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
