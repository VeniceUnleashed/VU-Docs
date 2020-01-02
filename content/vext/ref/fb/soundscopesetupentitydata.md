---
title: SoundScopeSetupEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoundScopeSetupEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| SoundScopeSetupEntityData(SoundScopeSetupEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoundScopeSetupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoundScopeSetupEntityData](SoundScopeSetupEntityData).                            |
| SoundScopeSetupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoundScopeSetupEntityData](SoundScopeSetupEntityData).                    |
| SoundScopeSetupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoundScopeSetupEntityData](SoundScopeSetupEntityData).              |
| SoundScopeSetupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundScopeSetupEntityData](SoundScopeSetupEntityData). |

## Properties

| Name  | Type                                       | Description |
| ----- | ------------------------------------------ | ----------- |
| setup | [SoundScopeSetupData](SoundScopeSetupData) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundScopeSetupEntityData](SoundScopeSetupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundScopeSetupEntityData](SoundScopeSetupEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
