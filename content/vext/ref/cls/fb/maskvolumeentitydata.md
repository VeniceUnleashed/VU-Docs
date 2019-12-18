---
title: MaskVolumeEntityData (Frostbite Container)
---
### Base Classes

[RenderVolumeEntityData](RenderVolumeEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MaskVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| MaskVolumeEntityData(MaskVolumeEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MaskVolumeEntityData([RenderVolumeEntityData](RenderVolumeEntityData) other)    | Upcast an instance of type [RenderVolumeEntityData](RenderVolumeEntityData) to [MaskVolumeEntityData](MaskVolumeEntityData).    |
| MaskVolumeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MaskVolumeEntityData](MaskVolumeEntityData).              |
| MaskVolumeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MaskVolumeEntityData](MaskVolumeEntityData).                            |
| MaskVolumeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MaskVolumeEntityData](MaskVolumeEntityData).                    |
| MaskVolumeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MaskVolumeEntityData](MaskVolumeEntityData).              |
| MaskVolumeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaskVolumeEntityData](MaskVolumeEntityData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaskVolumeEntityData](MaskVolumeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaskVolumeEntityData](MaskVolumeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
