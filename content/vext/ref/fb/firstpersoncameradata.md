---
title: FirstPersonCameraData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| FirstPersonCameraData()                                                          | Create a new instance of this container type.                                                                                     |
| FirstPersonCameraData(FirstPersonCameraData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| FirstPersonCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata/). |

## Properties

| Name                      | Type                                                   | Description |
| ------------------------- | ------------------------------------------------------ | ----------- |
| offset                    | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| weaponBaseOffset          | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| weaponLagRotationOffset   | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| rotation                  | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| weaponSpringEffect        | [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata/) |             |
| cameraSpringEffect        | [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata/) |             |
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
| [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
