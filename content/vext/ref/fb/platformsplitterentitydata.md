---
title: PlatformSplitterEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PlatformSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| PlatformSplitterEntityData(PlatformSplitterEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PlatformSplitterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlatformSplitterEntityData](/vext/ref/fb/platformsplitterentitydata/).                            |
| PlatformSplitterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlatformSplitterEntityData](/vext/ref/fb/platformsplitterentitydata/).                    |
| PlatformSplitterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlatformSplitterEntityData](/vext/ref/fb/platformsplitterentitydata/).              |
| PlatformSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlatformSplitterEntityData](/vext/ref/fb/platformsplitterentitydata/). |

## Properties

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| realm   | [Realm](/vext/ref/fb/realm/) |             |
| runOnce | bool           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PlatformSplitterEntityData](/vext/ref/fb/platformsplitterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlatformSplitterEntityData](/vext/ref/fb/platformsplitterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
