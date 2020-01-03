---
title: DecalVolumeEntityData
---
### Base Classes

[RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DecalVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| DecalVolumeEntityData(DecalVolumeEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| DecalVolumeEntityData([RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/) other)    | Upcast an instance of type [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/) to [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/).    |
| DecalVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/).              |
| DecalVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/).                            |
| DecalVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/).                    |
| DecalVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/).              |
| DecalVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DecalVolumeEntityData](/vext/ref/fb/decalvolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
