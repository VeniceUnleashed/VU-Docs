---
title: MaskVolumeEntityData
---
### Base Classes

[RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MaskVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| MaskVolumeEntityData(MaskVolumeEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MaskVolumeEntityData([RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/) other)    | Upcast an instance of type [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/) to [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/).    |
| MaskVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/).              |
| MaskVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/).                            |
| MaskVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/).                    |
| MaskVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/).              |
| MaskVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
