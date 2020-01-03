---
title: VehicleWaterEffectData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VehicleWaterEffectData()                                                          | Create a new instance of this container type.                                                                                       |
| VehicleWaterEffectData(VehicleWaterEffectData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VehicleWaterEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata/). |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| position | [Vec3](/vext/ref/shared/class/vec3)  |             |
| effect   | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
