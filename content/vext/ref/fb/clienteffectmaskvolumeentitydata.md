---
title: ClientEffectMaskVolumeEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClientEffectMaskVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| ClientEffectMaskVolumeEntityData(ClientEffectMaskVolumeEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| ClientEffectMaskVolumeEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/).                    |
| ClientEffectMaskVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/).              |
| ClientEffectMaskVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/).                            |
| ClientEffectMaskVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/).                    |
| ClientEffectMaskVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/).              |
| ClientEffectMaskVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| applyEffectCurve      | [Vec4](/vext/ref/shared/class/vec4) |             |
| lifeTimeInSeconds     | number                            |             |
| updatePeriodInSeconds | number                            |             |
| radius                | number                            |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
