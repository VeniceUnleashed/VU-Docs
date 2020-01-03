---
title: OccluderVolumeEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| OccluderVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| OccluderVolumeEntityData(OccluderVolumeEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| OccluderVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/).              |
| OccluderVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/).                            |
| OccluderVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/).                    |
| OccluderVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/).              |
| OccluderVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/). |

## Properties

| Name                 | Type | Description |
| -------------------- | ---- | ----------- |
| occluderHighPriority | bool |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OccluderVolumeEntityData](/vext/ref/fb/occludervolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
