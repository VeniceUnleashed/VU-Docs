---
title: WeaponLagSpringEffectData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponLagSpringEffectData()                                                          | Create a new instance of this container type.                                                                                             |
| WeaponLagSpringEffectData(WeaponLagSpringEffectData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| WeaponLagSpringEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponLagSpringEffectData](WeaponLagSpringEffectData). |

## Properties

| Name              | Type                                                       | Description |
| ----------------- | ---------------------------------------------------------- | ----------- |
| offsetSprings     | [WeaponLagEffectSpringVector](WeaponLagEffectSpringVector) |             |
| rotationSprings   | [WeaponLagEffectSpringVector](WeaponLagEffectSpringVector) |             |
| jumpForces        | [WeaponLagEffectForceData](WeaponLagEffectForceData)       |             |
| landForces        | [WeaponLagEffectForceData](WeaponLagEffectForceData)       |             |
| poseUpForces      | [WeaponLagEffectForceData](WeaponLagEffectForceData)       |             |
| poseDownForces    | [WeaponLagEffectForceData](WeaponLagEffectForceData)       |             |
| zoomForceModifier | number                                                     |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponLagSpringEffectData](WeaponLagSpringEffectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponLagSpringEffectData](WeaponLagSpringEffectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
