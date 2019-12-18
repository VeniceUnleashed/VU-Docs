---
title: FadeEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| FadeEntityData()                                                          | Create a new instance of this container type.                                                                       |
| FadeEntityData(FadeEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| FadeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FadeEntityData](FadeEntityData).                            |
| FadeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FadeEntityData](FadeEntityData).                    |
| FadeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FadeEntityData](FadeEntityData).              |
| FadeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FadeEntityData](FadeEntityData). |

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
| [FadeEntityData](FadeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FadeEntityData](FadeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
