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
| WeaponLagSpringEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata/). |

## Properties

| Name              | Type                                                       | Description |
| ----------------- | ---------------------------------------------------------- | ----------- |
| offsetSprings     | [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector/) |             |
| rotationSprings   | [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector/) |             |
| jumpForces        | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata/)       |             |
| landForces        | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata/)       |             |
| poseUpForces      | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata/)       |             |
| poseDownForces    | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata/)       |             |
| zoomForceModifier | number                                                     |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
