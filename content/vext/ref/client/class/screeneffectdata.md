---
title: ScreenEffectData
---
## Description

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| ScreenEffectData()                       | Create a new instance of this container type.            |
| ScreenEffectData(ScreenEffectData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name               | Type                                                                 | Description |
| ------------------ | -------------------------------------------------------------------- | ----------- |
| screenEffectParams | [Vec4](/vext/ref/shared/class/Vec4)                                    |             |
| frameType          | [ScreenEffectFrameType](/vext/ref/fb/screeneffectframetype)   |             |
| shader             | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) |             |
| frameWidth         | number                                                               |             |
| outerFrameOpacity  | number                                                               |             |
| innerFrameOpacity  | number                                                               |             |
| angle              | number                                                               |             |
| realm              | [Realm](/vext/ref/fb/realm)                                   |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [ScreenEffectData](ScreenEffectData) | [Clone](#clone) |            |

### Clone

> [ScreenEffectData](ScreenEffectData) **Clone**()

Creates a shallow-copy clone of the instance.
