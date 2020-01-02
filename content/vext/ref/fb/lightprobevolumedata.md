---
title: LightProbeVolumeData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LightProbeVolumeData()                                                          | Create a new instance of this container type.                                                                                   |
| LightProbeVolumeData(LightProbeVolumeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LightProbeVolumeData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LightProbeVolumeData](LightProbeVolumeData).              |
| LightProbeVolumeData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LightProbeVolumeData](LightProbeVolumeData).                            |
| LightProbeVolumeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LightProbeVolumeData](LightProbeVolumeData).                    |
| LightProbeVolumeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LightProbeVolumeData](LightProbeVolumeData).              |
| LightProbeVolumeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LightProbeVolumeData](LightProbeVolumeData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| xres          | number |             |
| yres          | number |             |
| zres          | number |             |
| blendDistance | number |             |
| priority      | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LightProbeVolumeData](LightProbeVolumeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LightProbeVolumeData](LightProbeVolumeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
