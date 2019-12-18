---
title: SensingSettings (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SensingSettings()                                                          | Create a new instance of this container type.                                                                         |
| SensingSettings(SensingSettings other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SensingSettings([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SensingSettings](SensingSettings).                                      |
| SensingSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SensingSettings](SensingSettings). |

## Properties

| Name                         | Type                                       | Description |
| ---------------------------- | ------------------------------------------ | ----------- |
| sensingTimeSpan              | number                                     |             |
| attackerTrackTime            | number                                     |             |
| lineOfSightTestTime          | number                                     |             |
| maxRays                      | number                                     |             |
| characterVisionBoxSettings   | [VisionBoxSettings](VisionBoxSettings)     |             |
| vehicleVisionBoxSettings     | [VisionBoxSettings](VisionBoxSettings)     |             |
| closeFireImpactDistance      | number                                     |             |
| closeExplosiveImpactDistance | number                                     |             |
| closeTrajectoryDistance      | number                                     |             |
| impactSenseDistance          | number                                     |             |
| maxVolume                    | number                                     |             |
| maxSize                      | number                                     |             |
| maxSpeed                     | number                                     |             |
| volumeModifier               | number                                     |             |
| movementModifier             | number                                     |             |
| luckModifier                 | number                                     |             |
| backgroundLoudnessFactor     | number                                     |             |
| motionSizeFactor             | number                                     |             |
| motionSpeedFactor            | number                                     |             |
| motionPeripheralityFactor    | number                                     |             |
| motionDistanceFactor         | number                                     |             |
| smokeSphereRadius            | number                                     |             |
| smokeSphereDuration          | number                                     |             |
| spawnOutOfLOSRaycastHeight   | number                                     |             |
| spawnOutOfLOSTraceDistance   | number                                     |             |
| spawnOutOfLOSRaycastDistance | number                                     |             |
| spawnOutOfLOSRadius          | number                                     |             |
| defaultTemplate              | [SensingTemplateData](SensingTemplateData) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SensingSettings](SensingSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SensingSettings](SensingSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
