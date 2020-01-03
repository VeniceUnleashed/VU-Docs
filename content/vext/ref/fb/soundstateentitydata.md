---
title: SoundStateEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SoundStateEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SoundStateEntityData(SoundStateEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SoundStateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoundStateEntityData](/vext/ref/fb/soundstateentitydata/).                            |
| SoundStateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoundStateEntityData](/vext/ref/fb/soundstateentitydata/).                    |
| SoundStateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoundStateEntityData](/vext/ref/fb/soundstateentitydata/).              |
| SoundStateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundStateEntityData](/vext/ref/fb/soundstateentitydata/). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| soundState | [SoundState](/vext/ref/fb/soundstate/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundStateEntityData](/vext/ref/fb/soundstateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundStateEntityData](/vext/ref/fb/soundstateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
