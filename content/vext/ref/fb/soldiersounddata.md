---
title: SoldierSoundData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SoldierSoundData()                                                          | Create a new instance of this container type.                                                                           |
| SoldierSoundData(SoldierSoundData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SoldierSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSoundData](SoldierSoundData). |

## Properties

| Name                  | Type                     | Description |
| --------------------- | ------------------------ | ----------- |
| movement              | [SoundAsset](SoundAsset) |             |
| death                 | [SoundAsset](SoundAsset) |             |
| bulletImpact          | [SoundAsset](SoundAsset) |             |
| healing               | [SoundAsset](SoundAsset) |             |
| breathControl         | [SoundAsset](SoundAsset) |             |
| hitIndicator          | [SoundAsset](SoundAsset) |             |
| pickupKit             | [SoundAsset](SoundAsset) |             |
| pickupAmmo            | [SoundAsset](SoundAsset) |             |
| sprintTimeForRecovery | number                   |             |
| movementThreshold     | number                   |             |
| minHealSoundTime      | number                   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSoundData](SoldierSoundData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSoundData](SoldierSoundData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
