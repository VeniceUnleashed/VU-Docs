---
title: DebugComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| DebugComponentData()                                                          | Create a new instance of this container type.                                                                               |
| DebugComponentData(DebugComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| DebugComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DebugComponentData](/vext/ref/fb/debugcomponentdata/).                      |
| DebugComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DebugComponentData](/vext/ref/fb/debugcomponentdata/).                    |
| DebugComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DebugComponentData](/vext/ref/fb/debugcomponentdata/).              |
| DebugComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugComponentData](/vext/ref/fb/debugcomponentdata/). |

## Properties

| Name         | Type                         | Description |
| ------------ | ---------------------------- | ----------- |
| realm        | [Realm](/vext/ref/fb/realm/)               |             |
| debugTexture | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| fullscreen   | bool                         |             |
| enable       | bool                         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugComponentData](/vext/ref/fb/debugcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugComponentData](/vext/ref/fb/debugcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
