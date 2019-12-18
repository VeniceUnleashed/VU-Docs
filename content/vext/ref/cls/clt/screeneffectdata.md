---
title: ScreenEffectData (Client Class)
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
| screenEffectParams | [Vec4](/vext/ref/cls/shr/Vec4)                                    |             |
| frameType          | [ScreenEffectFrameType](/vext/ref/cls/fb/screeneffectframetype)   |             |
| shader             | [SurfaceShaderBaseAsset](/vext/ref/cls/fb/surfaceshaderbaseasset) |             |
| frameWidth         | number                                                               |             |
| outerFrameOpacity  | number                                                               |             |
| innerFrameOpacity  | number                                                               |             |
| angle              | number                                                               |             |
| realm              | [Realm](/vext/ref/cls/fb/realm)                                   |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [ScreenEffectData](ScreenEffectData) | [Clone](#clone) |            |

### Clone

> [ScreenEffectData](ScreenEffectData) **Clone**()

Creates a shallow-copy clone of the instance.
