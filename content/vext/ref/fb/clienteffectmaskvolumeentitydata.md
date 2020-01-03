---
title: ClientEffectMaskVolumeEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClientEffectMaskVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| ClientEffectMaskVolumeEntityData(ClientEffectMaskVolumeEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| ClientEffectMaskVolumeEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData).                    |
| ClientEffectMaskVolumeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData).              |
| ClientEffectMaskVolumeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData).                            |
| ClientEffectMaskVolumeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData).                    |
| ClientEffectMaskVolumeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData).              |
| ClientEffectMaskVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| applyEffectCurve      | [Vec4](/vext/ref/shared/class/Vec4) |             |
| lifeTimeInSeconds     | number                            |             |
| updatePeriodInSeconds | number                            |             |
| radius                | number                            |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClientEffectMaskVolumeEntityData](ClientEffectMaskVolumeEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
