---
title: EngineComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EngineComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| EngineComponentData(EngineComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EngineComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [EngineComponentData](EngineComponentData).                      |
| EngineComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EngineComponentData](EngineComponentData).                    |
| EngineComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EngineComponentData](EngineComponentData).              |
| EngineComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EngineComponentData](EngineComponentData). |

## Properties

| Name                  | Type                                 | Description |
| --------------------- | ------------------------------------ | ----------- |
| config                | [EngineConfigData](EngineConfigData) |             |
| soundEffect           | [SoundAsset](SoundAsset)             |             |
| surfaceSoundEffect    | [SoundAsset](SoundAsset)             |             |
| useFirstPersonSounds  | bool                                 |             |
| outputIsEngineInWater | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EngineComponentData](EngineComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EngineComponentData](EngineComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
