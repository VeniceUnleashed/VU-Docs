---
title: FilmGrainData
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
| colorScale            | [Vec3](/vext/ref/shared/class/vec3)                |             |
| textureScale          | [Vec2](/vext/ref/shared/class/vec2)                |             |
| realm                 | [Realm](/vext/ref/fb/realm)               |             |
| texture               | [TextureAsset](/vext/ref/fb/textureasset) |             |
| linearFilteringEnable | bool                                             |             |
| randomEnable          | bool                                             |             |
| enable                | bool                                             |             |

## Methods

| Type                                                | Name            | Parameters |
| --------------------------------------------------- | --------------- | ---------- |
| [FilmGrainData](/vext/ref/client/class/filmgraindata) | [Clone](#clone) |            |

### Clone

> [FilmGrainData](/vext/ref/client/class/filmgraindata) **Clone**()

Creates a shallow-copy clone of the instance.
