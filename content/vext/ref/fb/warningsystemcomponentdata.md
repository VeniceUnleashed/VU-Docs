---
title: WarningSystemComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| WarningSystemComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| WarningSystemComponentData(WarningSystemComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| WarningSystemComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata/).                      |
| WarningSystemComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata/).                    |
| WarningSystemComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata/).              |
| WarningSystemComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata/). |

## Properties

| Name                     | Type                                   | Description |
| ------------------------ | -------------------------------------- | ----------- |
| aimWarnSoundEffect       | [SoundAsset](/vext/ref/fb/soundasset/)               |             |
| missileWarnSoundEffect   | [SoundAsset](/vext/ref/fb/soundasset/)               |             |
| lowHealthWarnSoundEffect | [SoundAsset](/vext/ref/fb/soundasset/)               |             |
| lockingWarnSoundEffect   | [SoundAsset](/vext/ref/fb/soundasset/)               |             |
| lockedWarnSoundEffect    | [SoundAsset](/vext/ref/fb/soundasset/)               |             |
| playerType               | [WarningPlayerType](/vext/ref/fb/warningplayertype/) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
