---
title: EngineComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EngineComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| EngineComponentData(EngineComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EngineComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [EngineComponentData](/vext/ref/fb/enginecomponentdata/).                      |
| EngineComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EngineComponentData](/vext/ref/fb/enginecomponentdata/).                    |
| EngineComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EngineComponentData](/vext/ref/fb/enginecomponentdata/).              |
| EngineComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EngineComponentData](/vext/ref/fb/enginecomponentdata/). |

## Properties

| Name                  | Type                                 | Description |
| --------------------- | ------------------------------------ | ----------- |
| config                | [EngineConfigData](/vext/ref/fb/engineconfigdata/) |             |
| soundEffect           | [SoundAsset](/vext/ref/fb/soundasset/)             |             |
| surfaceSoundEffect    | [SoundAsset](/vext/ref/fb/soundasset/)             |             |
| useFirstPersonSounds  | bool                                 |             |
| outputIsEngineInWater | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EngineComponentData](/vext/ref/fb/enginecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EngineComponentData](/vext/ref/fb/enginecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
