---
title: LightProbeVolumeData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LightProbeVolumeData()                                                          | Create a new instance of this container type.                                                                                   |
| LightProbeVolumeData(LightProbeVolumeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LightProbeVolumeData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/).              |
| LightProbeVolumeData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/).                            |
| LightProbeVolumeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/).                    |
| LightProbeVolumeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/).              |
| LightProbeVolumeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/). |

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
| [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LightProbeVolumeData](/vext/ref/fb/lightprobevolumedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
