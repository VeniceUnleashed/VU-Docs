---
title: PlayerEntryComponentData
---
### Base Classes

[EntryComponentData](/vext/ref/fb/entrycomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerEntryComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| PlayerEntryComponentData(PlayerEntryComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PlayerEntryComponentData([EntryComponentData](/vext/ref/fb/entrycomponentdata/) other)            | Upcast an instance of type [EntryComponentData](/vext/ref/fb/entrycomponentdata/) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/).            |
| PlayerEntryComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/).                      |
| PlayerEntryComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/).                    |
| PlayerEntryComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/).              |
| PlayerEntryComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/). |

## Properties

| Name                            | Type                              | Description |
| ------------------------------- | --------------------------------- | ----------- |
| animationAccelerationMultiplier | [Vec3](/vext/ref/shared/class/vec3) |             |
| antEntryId                      | [AntEntryIdEnum](/vext/ref/fb/antentryidenum/)  |             |
| antEntryID                      | string                            |             |
| antEntryEnumeration             | [AntEnumeration](/vext/ref/fb/antenumeration/)  |             |
| shieldedTransitionExitTime      | number                            |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
