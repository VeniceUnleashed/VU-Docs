---
title: SoldierAimAssistData
---
### Base Classes

[GameDataContainer](GameDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SoldierAimAssistData()                                                          | Create a new instance of this container type.                                                                                   |
| SoldierAimAssistData(SoldierAimAssistData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SoldierAimAssistData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierAimAssistData](SoldierAimAssistData).              |
| SoldierAimAssistData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAimAssistData](SoldierAimAssistData). |

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
| [SoldierAimAssistData](SoldierAimAssistData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAimAssistData](SoldierAimAssistData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
