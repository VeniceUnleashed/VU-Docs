---
title: DebugMenuSubMenuEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DebugMenuSubMenuEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DebugMenuSubMenuEntityData(DebugMenuSubMenuEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DebugMenuSubMenuEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/).                    |
| DebugMenuSubMenuEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/).              |
| DebugMenuSubMenuEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/).                            |
| DebugMenuSubMenuEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/).                    |
| DebugMenuSubMenuEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/).              |
| DebugMenuSubMenuEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugMenuSubMenuEntityData](/vext/ref/fb/debugmenusubmenuentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
