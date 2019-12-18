---
title: WarningSystemComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| WarningSystemComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| WarningSystemComponentData(WarningSystemComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| WarningSystemComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [WarningSystemComponentData](WarningSystemComponentData).                      |
| WarningSystemComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WarningSystemComponentData](WarningSystemComponentData).                    |
| WarningSystemComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WarningSystemComponentData](WarningSystemComponentData).              |
| WarningSystemComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WarningSystemComponentData](WarningSystemComponentData). |

## Properties

| Name                     | Type                                   | Description |
| ------------------------ | -------------------------------------- | ----------- |
| aimWarnSoundEffect       | [SoundAsset](SoundAsset)               |             |
| missileWarnSoundEffect   | [SoundAsset](SoundAsset)               |             |
| lowHealthWarnSoundEffect | [SoundAsset](SoundAsset)               |             |
| lockingWarnSoundEffect   | [SoundAsset](SoundAsset)               |             |
| lockedWarnSoundEffect    | [SoundAsset](SoundAsset)               |             |
| playerType               | [WarningPlayerType](WarningPlayerType) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WarningSystemComponentData](WarningSystemComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WarningSystemComponentData](WarningSystemComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
