---
title: VehicleWaterEffectData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VehicleWaterEffectData()                                                          | Create a new instance of this container type.                                                                                       |
| VehicleWaterEffectData(VehicleWaterEffectData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VehicleWaterEffectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleWaterEffectData](VehicleWaterEffectData). |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| position | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| effect   | [EffectBlueprint](EffectBlueprint) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleWaterEffectData](VehicleWaterEffectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleWaterEffectData](VehicleWaterEffectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
