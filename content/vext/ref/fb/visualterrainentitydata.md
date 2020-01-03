---
title: VisualTerrainEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VisualTerrainEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| VisualTerrainEntityData(VisualTerrainEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VisualTerrainEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata/).                            |
| VisualTerrainEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata/).                    |
| VisualTerrainEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata/).              |
| VisualTerrainEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata/). |

## Properties

| Name     | Type                                           | Description |
| -------- | ---------------------------------------------- | ----------- |
| terrain  | [TerrainData](/vext/ref/fb/terraindata/)                     |             |
| settings | [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualTerrainEntityData](/vext/ref/fb/visualterrainentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
