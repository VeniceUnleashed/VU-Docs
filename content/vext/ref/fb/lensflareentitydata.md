---
title: LensFlareEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| LensFlareEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| LensFlareEntityData(LensFlareEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| LensFlareEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/).              |
| LensFlareEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/).                            |
| LensFlareEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/).                    |
| LensFlareEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/).              |
| LensFlareEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| elements          | [LensFlareElement](/vext/ref/fb/lensflareelement/)\[\] |             |
| occluderSize      | number                                   |             |
| visible           | bool                                     |             |
| halfRes           | bool                                     |             |
| debugDrawOccluder | bool                                     |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
