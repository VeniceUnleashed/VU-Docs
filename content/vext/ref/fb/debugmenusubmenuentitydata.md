---
title: DebugMenuSubMenuEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DebugMenuSubMenuEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DebugMenuSubMenuEntityData(DebugMenuSubMenuEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DebugMenuSubMenuEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData).                    |
| DebugMenuSubMenuEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData).              |
| DebugMenuSubMenuEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData).                            |
| DebugMenuSubMenuEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData).                    |
| DebugMenuSubMenuEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData).              |
| DebugMenuSubMenuEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugMenuSubMenuEntityData](DebugMenuSubMenuEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
