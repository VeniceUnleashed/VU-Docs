---
title: PreRoundEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| PreRoundEntityData()                                                          | Create a new instance of this container type.                                                                               |
| PreRoundEntityData(PreRoundEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| PreRoundEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [PreRoundEntityData](/vext/ref/fb/preroundentitydata/).                    |
| PreRoundEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [PreRoundEntityData](/vext/ref/fb/preroundentitydata/).              |
| PreRoundEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PreRoundEntityData](/vext/ref/fb/preroundentitydata/).                            |
| PreRoundEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PreRoundEntityData](/vext/ref/fb/preroundentitydata/).                    |
| PreRoundEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PreRoundEntityData](/vext/ref/fb/preroundentitydata/).              |
| PreRoundEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PreRoundEntityData](/vext/ref/fb/preroundentitydata/). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| roundMaxPlayerCount   | number |             |
| roundRestartCountdown | number |             |
| roundMinPlayerCount   | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [PreRoundEntityData](/vext/ref/fb/preroundentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PreRoundEntityData](/vext/ref/fb/preroundentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
