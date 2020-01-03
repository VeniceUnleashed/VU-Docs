---
title: RadioComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| RadioComponentData()                                                          | Create a new instance of this container type.                                                                               |
| RadioComponentData(RadioComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| RadioComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [RadioComponentData](/vext/ref/fb/radiocomponentdata/).                      |
| RadioComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RadioComponentData](/vext/ref/fb/radiocomponentdata/).                    |
| RadioComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RadioComponentData](/vext/ref/fb/radiocomponentdata/).              |
| RadioComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RadioComponentData](/vext/ref/fb/radiocomponentdata/). |

## Properties

| Name        | Type                     | Description |
| ----------- | ------------------------ | ----------- |
| soundEffect | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [RadioComponentData](/vext/ref/fb/radiocomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RadioComponentData](/vext/ref/fb/radiocomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
