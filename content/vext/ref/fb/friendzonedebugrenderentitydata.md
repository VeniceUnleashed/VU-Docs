---
title: FriendZoneDebugRenderEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| FriendZoneDebugRenderEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| FriendZoneDebugRenderEntityData(FriendZoneDebugRenderEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| FriendZoneDebugRenderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FriendZoneDebugRenderEntityData](FriendZoneDebugRenderEntityData).                            |
| FriendZoneDebugRenderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FriendZoneDebugRenderEntityData](FriendZoneDebugRenderEntityData).                    |
| FriendZoneDebugRenderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FriendZoneDebugRenderEntityData](FriendZoneDebugRenderEntityData).              |
| FriendZoneDebugRenderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FriendZoneDebugRenderEntityData](FriendZoneDebugRenderEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FriendZoneDebugRenderEntityData](FriendZoneDebugRenderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FriendZoneDebugRenderEntityData](FriendZoneDebugRenderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
