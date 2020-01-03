---
title: SoldierAimAssistData
---
### Base Classes

[GameDataContainer](/vext/ref/fb/gamedatacontainer/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SoldierAimAssistData()                                                          | Create a new instance of this container type.                                                                                   |
| SoldierAimAssistData(SoldierAimAssistData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SoldierAimAssistData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata/).              |
| SoldierAimAssistData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata/). |

## Properties

| Name                                        | Type                              | Description |
| ------------------------------------------- | --------------------------------- | ----------- |
| eyePosOffset                                | [Vec3](/vext/ref/shared/class/vec3) |             |
| stickyBoxScale                              | [Vec3](/vext/ref/shared/class/vec3) |             |
| snapDistanceScale                           | [Vec3](/vext/ref/shared/class/vec3) |             |
| snapBoxScale                                | [Vec3](/vext/ref/shared/class/vec3) |             |
| stickyDistanceScale                         | [Vec3](/vext/ref/shared/class/vec3) |             |
| maxAcceleration                             | [Vec2](/vext/ref/shared/class/vec2) |             |
| accelerationDamping                         | number                            |             |
| accelerationInputThreshold                  | number                            |             |
| accelerationMultiplier                      | number                            |             |
| squaredAcceleration                         | number                            |             |
| yawSpeedStrength                            | number                            |             |
| zoomedInputPolynomial                       | number\[\]                        |             |
| accelerationTimeThreshold                   | number                            |             |
| attractDistanceFallOff                      | number\[\]                        |             |
| attractUserInputMultiplier                  | number                            |             |
| attractOwnSpeedInfluence                    | number                            |             |
| attractTargetSpeedInfluence                 | number                            |             |
| attractOwnRequiredMovementForMaximumAttract | number                            |             |
| attractStartInputThreshold                  | number                            |             |
| attractZoomingMultiplier                    | number                            |             |
| attractZoomingPostTime                      | number                            |             |
| attractYawStrength                          | number                            |             |
| attractPitchStrength                        | number                            |             |
| pitchSpeedStrength                          | number                            |             |
| attractSoftZone                             | number                            |             |
| inputPolynomial                             | number\[\]                        |             |
| useYawAcceleration                          | bool                              |             |
| usePitchAcceleration                        | bool                              |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
