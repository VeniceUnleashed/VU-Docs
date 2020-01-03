---
title: SoundScopeSetupEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoundScopeSetupEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| SoundScopeSetupEntityData(SoundScopeSetupEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoundScopeSetupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoundScopeSetupEntityData](/vext/ref/fb/soundscopesetupentitydata/).                            |
| SoundScopeSetupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoundScopeSetupEntityData](/vext/ref/fb/soundscopesetupentitydata/).                    |
| SoundScopeSetupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoundScopeSetupEntityData](/vext/ref/fb/soundscopesetupentitydata/).              |
| SoundScopeSetupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundScopeSetupEntityData](/vext/ref/fb/soundscopesetupentitydata/). |

## Properties

| Name  | Type                                       | Description |
| ----- | ------------------------------------------ | ----------- |
| setup | [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundScopeSetupEntityData](/vext/ref/fb/soundscopesetupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundScopeSetupEntityData](/vext/ref/fb/soundscopesetupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
