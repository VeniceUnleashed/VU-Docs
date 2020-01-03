---
title: FadeEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| FadeEntityData()                                                          | Create a new instance of this container type.                                                                       |
| FadeEntityData(FadeEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| FadeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FadeEntityData](/vext/ref/fb/fadeentitydata/).                            |
| FadeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FadeEntityData](/vext/ref/fb/fadeentitydata/).                    |
| FadeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FadeEntityData](/vext/ref/fb/fadeentitydata/).              |
| FadeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FadeEntityData](/vext/ref/fb/fadeentitydata/). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| fadeTime                       | number |             |
| maxWaitFadedWhileStreamingTime | number |             |
| fadeScreen                     | bool   |             |
| fadeUI                         | bool   |             |
| fadeRumble                     | bool   |             |
| fadeAudio                      | bool   |             |
| fadeMovie                      | bool   |             |
| startFaded                     | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [FadeEntityData](/vext/ref/fb/fadeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FadeEntityData](/vext/ref/fb/fadeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
