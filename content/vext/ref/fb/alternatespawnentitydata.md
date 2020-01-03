---
title: AlternateSpawnEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AlternateSpawnEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| AlternateSpawnEntityData(AlternateSpawnEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AlternateSpawnEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/).              |
| AlternateSpawnEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/).                            |
| AlternateSpawnEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/).                    |
| AlternateSpawnEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/).              |
| AlternateSpawnEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/). |

## Properties

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| team     | [TeamId](/vext/ref/fb/teamid/) |             |
| priority | number           |             |
| enabled  | bool             |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AlternateSpawnEntityData](/vext/ref/fb/alternatespawnentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
