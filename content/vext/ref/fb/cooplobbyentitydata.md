---
title: CoopLobbyEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CoopLobbyEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| CoopLobbyEntityData(CoopLobbyEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CoopLobbyEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/).                    |
| CoopLobbyEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/).              |
| CoopLobbyEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/).                            |
| CoopLobbyEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/).                    |
| CoopLobbyEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/).              |
| CoopLobbyEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| clientConnectionTimeout | number |             |
| isInGame                | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CoopLobbyEntityData](/vext/ref/fb/cooplobbyentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
