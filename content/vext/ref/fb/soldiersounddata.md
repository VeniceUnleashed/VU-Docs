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
| SoldierSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSoundData](/vext/ref/fb/soldiersounddata/). |

## Properties

| Name                  | Type                     | Description |
| --------------------- | ------------------------ | ----------- |
| movement              | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| death                 | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| bulletImpact          | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| healing               | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| breathControl         | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| hitIndicator          | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| pickupKit             | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| pickupAmmo            | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| sprintTimeForRecovery | number                   |             |
| movementThreshold     | number                   |             |
| minHealSoundTime      | number                   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSoundData](/vext/ref/fb/soldiersounddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSoundData](/vext/ref/fb/soldiersounddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
