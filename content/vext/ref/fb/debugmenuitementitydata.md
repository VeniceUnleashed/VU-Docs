---
title: DebugMenuItemEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DebugMenuItemEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| DebugMenuItemEntityData(DebugMenuItemEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| DebugMenuItemEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DebugMenuItemEntityData](DebugMenuItemEntityData).                    |
| DebugMenuItemEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DebugMenuItemEntityData](DebugMenuItemEntityData).              |
| DebugMenuItemEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DebugMenuItemEntityData](DebugMenuItemEntityData).                            |
| DebugMenuItemEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DebugMenuItemEntityData](DebugMenuItemEntityData).                    |
| DebugMenuItemEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DebugMenuItemEntityData](DebugMenuItemEntityData).              |
| DebugMenuItemEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugMenuItemEntityData](DebugMenuItemEntityData). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| itemType | [DebugMenuItemType](DebugMenuItemType) |             |
| text     | string                                 |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugMenuItemEntityData](DebugMenuItemEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugMenuItemEntityData](DebugMenuItemEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
