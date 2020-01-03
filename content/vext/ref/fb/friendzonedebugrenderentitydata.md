---
title: FriendZoneDebugRenderEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| FriendZoneDebugRenderEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| FriendZoneDebugRenderEntityData(FriendZoneDebugRenderEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| FriendZoneDebugRenderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FriendZoneDebugRenderEntityData](/vext/ref/fb/friendzonedebugrenderentitydata/).                            |
| FriendZoneDebugRenderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FriendZoneDebugRenderEntityData](/vext/ref/fb/friendzonedebugrenderentitydata/).                    |
| FriendZoneDebugRenderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FriendZoneDebugRenderEntityData](/vext/ref/fb/friendzonedebugrenderentitydata/).              |
| FriendZoneDebugRenderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FriendZoneDebugRenderEntityData](/vext/ref/fb/friendzonedebugrenderentitydata/). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](/vext/ref/fb/realm/) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FriendZoneDebugRenderEntityData](/vext/ref/fb/friendzonedebugrenderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FriendZoneDebugRenderEntityData](/vext/ref/fb/friendzonedebugrenderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
