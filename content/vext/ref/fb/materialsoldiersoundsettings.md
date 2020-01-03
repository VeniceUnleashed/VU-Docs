---
title: MaterialSoldierSoundSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialSoldierSoundSettings()                                                          | Create a new instance of this container type.                                                                                                   |
| MaterialSoldierSoundSettings(MaterialSoldierSoundSettings other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| MaterialSoldierSoundSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings/). |

## Properties

| Name          | Type                     | Description |
| ------------- | ------------------------ | ----------- |
| footStepSound | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| proneSound    | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| landSound     | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
