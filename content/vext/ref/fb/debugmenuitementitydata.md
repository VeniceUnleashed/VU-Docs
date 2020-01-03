---
title: DebugMenuItemEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DebugMenuItemEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| DebugMenuItemEntityData(DebugMenuItemEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| DebugMenuItemEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/).                    |
| DebugMenuItemEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/).              |
| DebugMenuItemEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/).                            |
| DebugMenuItemEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/).                    |
| DebugMenuItemEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/).              |
| DebugMenuItemEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| itemType | [DebugMenuItemType](/vext/ref/fb/debugmenuitemtype/) |             |
| text     | string                                 |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugMenuItemEntityData](/vext/ref/fb/debugmenuitementitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
