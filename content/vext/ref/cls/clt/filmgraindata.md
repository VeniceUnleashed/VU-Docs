---
title: FilmGrainData (Client Class)
---
## Description

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| FilmGrainData()                    | Create a new instance of this container type.            |
| FilmGrainData(FilmGrainData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                  | Type                                             | Description |
| --------------------- | ------------------------------------------------ | ----------- |
| colorScale            | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| textureScale          | [Vec2](/vext/ref/cls/shr/Vec2)                |             |
| realm                 | [Realm](/vext/ref/cls/fb/realm)               |             |
| texture               | [TextureAsset](/vext/ref/cls/fb/textureasset) |             |
| linearFilteringEnable | bool                                             |             |
| randomEnable          | bool                                             |             |
| enable                | bool                                             |             |

## Methods

| Type                                                | Name            | Parameters |
| --------------------------------------------------- | --------------- | ---------- |
| [FilmGrainData](/vext/ref/cls/clt/filmgraindata) | [Clone](#clone) |            |

### Clone

> [FilmGrainData](/vext/ref/cls/clt/filmgraindata) **Clone**()

Creates a shallow-copy clone of the instance.
