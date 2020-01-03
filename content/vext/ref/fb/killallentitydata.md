---
title: KillAllEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| KillAllEntityData()                                                          | Create a new instance of this container type.                                                                             |
| KillAllEntityData(KillAllEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| KillAllEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [KillAllEntityData](/vext/ref/fb/killallentitydata/).                    |
| KillAllEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [KillAllEntityData](/vext/ref/fb/killallentitydata/).              |
| KillAllEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [KillAllEntityData](/vext/ref/fb/killallentitydata/).                            |
| KillAllEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [KillAllEntityData](/vext/ref/fb/killallentitydata/).                    |
| KillAllEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [KillAllEntityData](/vext/ref/fb/killallentitydata/).              |
| KillAllEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillAllEntityData](/vext/ref/fb/killallentitydata/). |

## Properties

| Name                 | Type | Description |
| -------------------- | ---- | ----------- |
| killAllHumanSoldiers | bool |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [KillAllEntityData](/vext/ref/fb/killallentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillAllEntityData](/vext/ref/fb/killallentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
