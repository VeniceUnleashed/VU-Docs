---
title: MaterialSoldierSoundSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialSoldierSoundSettings()                                                          | Create a new instance of this container type.                                                                                                   |
| MaterialSoldierSoundSettings(MaterialSoldierSoundSettings other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| MaterialSoldierSoundSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaterialSoldierSoundSettings](MaterialSoldierSoundSettings). |

## Properties

| Name          | Type                     | Description |
| ------------- | ------------------------ | ----------- |
| footStepSound | [SoundAsset](SoundAsset) |             |
| proneSound    | [SoundAsset](SoundAsset) |             |
| landSound     | [SoundAsset](SoundAsset) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialSoldierSoundSettings](MaterialSoldierSoundSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaterialSoldierSoundSettings](MaterialSoldierSoundSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
