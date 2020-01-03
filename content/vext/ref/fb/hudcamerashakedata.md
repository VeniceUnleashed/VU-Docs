---
title: HudCameraShakeData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| HudCameraShakeData()                                                          | Create a new instance of this container type.                                                                               |
| HudCameraShakeData(HudCameraShakeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| HudCameraShakeData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [HudCameraShakeData](HudCameraShakeData).                  |
| HudCameraShakeData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [HudCameraShakeData](HudCameraShakeData).                                      |
| HudCameraShakeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudCameraShakeData](HudCameraShakeData). |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| weaponDispersionMin         | number |             |
| weaponDispersionMax         | number |             |
| weaponDispersionOffsetScale | number |             |
| jumpEffectDurationMin       | number |             |
| jumpEffectDurationMax       | number |             |
| jumpEffectMin               | number |             |
| jumpEffectMax               | number |             |
| landEffectDurationMin       | number |             |
| landEffectDurationMax       | number |             |
| landEffectMin               | number |             |
| landEffectMax               | number |             |
| cameraShakeMinAngle         | number |             |
| cameraShakeMaxAngle         | number |             |
| cameraShakeScale            | number |             |
| weaponLagXScale             | number |             |
| weaponLagYScale             | number |             |
| filterSize                  | number |             |
| maxDisplacement             | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [HudCameraShakeData](HudCameraShakeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudCameraShakeData](HudCameraShakeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
