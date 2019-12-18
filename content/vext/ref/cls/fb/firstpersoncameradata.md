---
title: FirstPersonCameraData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| FirstPersonCameraData()                                                          | Create a new instance of this container type.                                                                                     |
| FirstPersonCameraData(FirstPersonCameraData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| FirstPersonCameraData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FirstPersonCameraData](FirstPersonCameraData). |

## Properties

| Name                      | Type                                                   | Description |
| ------------------------- | ------------------------------------------------------ | ----------- |
| offset                    | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| weaponBaseOffset          | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| weaponLagRotationOffset   | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| rotation                  | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| weaponSpringEffect        | [WeaponLagSpringEffectData](WeaponLagSpringEffectData) |             |
| cameraSpringEffect        | [WeaponLagSpringEffectData](WeaponLagSpringEffectData) |             |
| moveStrafeModifier        | number                                                 |             |
| moveForwardModifier       | number                                                 |             |
| rotateYawModifier         | number                                                 |             |
| rotatePitchModifier       | number                                                 |             |
| rotateRollModifier        | number                                                 |             |
| zoomMoveStrafeModifier    | number                                                 |             |
| zoomMoveForwardModifier   | number                                                 |             |
| zoomRotateYawModifier     | number                                                 |             |
| zoomRotatePitchModifier   | number                                                 |             |
| zoomRotateRollModifier    | number                                                 |             |
| releaseModifier           | number                                                 |             |
| releaseModifierPitch      | number                                                 |             |
| releaseModifierYaw        | number                                                 |             |
| releaseModifierRoll       | number                                                 |             |
| offsetReleaseModifier     | number                                                 |             |
| zoomReleaseModifierPitch  | number                                                 |             |
| zoomReleaseModifierYaw    | number                                                 |             |
| zoomReleaseModifierRoll   | number                                                 |             |
| zoomOffsetReleaseModifier | number                                                 |             |
| rotationAdditionToOffset  | number                                                 |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [FirstPersonCameraData](FirstPersonCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FirstPersonCameraData](FirstPersonCameraData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
