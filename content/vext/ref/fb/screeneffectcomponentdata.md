---
title: ScreenEffectComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ScreenEffectComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| ScreenEffectComponentData(ScreenEffectComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ScreenEffectComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata/).                      |
| ScreenEffectComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata/).                    |
| ScreenEffectComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata/).              |
| ScreenEffectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata/). |

## Properties

| Name               | Type                                             | Description |
| ------------------ | ------------------------------------------------ | ----------- |
| screenEffectParams | [Vec4](/vext/ref/shared/class/vec4)                |             |
| frameType          | [ScreenEffectFrameType](/vext/ref/fb/screeneffectframetype/)   |             |
| shader             | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| frameWidth         | number                                           |             |
| outerFrameOpacity  | number                                           |             |
| innerFrameOpacity  | number                                           |             |
| angle              | number                                           |             |
| realm              | [Realm](/vext/ref/fb/realm/)                                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScreenEffectComponentData](/vext/ref/fb/screeneffectcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
