---
title: UIMinimapData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UIMinimapData()                    | Create a new instance of this structure type.            |
| UIMinimapData(UIMinimapData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                            | Type                                                         | Description |
| ------------------------------- | ------------------------------------------------------------ | ----------- |
| worldCenter                     | [Vec2](/vext/ref/shared/class/vec2)                            |             |
| combatAreaColor                 | [Vec4](/vext/ref/shared/class/vec4)                            |             |
| detailTextureTint               | [Vec4](/vext/ref/shared/class/vec4)                            |             |
| combatAreaMultiplyWrapAmount    | [Vec2](/vext/ref/shared/class/vec2)                            |             |
| vegetation                      | [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams/) |             |
| fadeTexture                     | [TextureAsset](/vext/ref/fb/textureasset/)                                 |             |
| streamingMinimapDelay           | number                                                       |             |
| airRadarFadeTexture             | [TextureAsset](/vext/ref/fb/textureasset/)                                 |             |
| detailTexture                   | [TextureAsset](/vext/ref/fb/textureasset/)                                 |             |
| detail                          | [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams/) |             |
| streamingMinimapTransitionSpeed | number                                                       |             |
| worldRotation                   | number                                                       |             |
| worldRange                      | number                                                       |             |
| combatAreaDistanceScale         | number                                                       |             |
| combatAreaFadeSpeed             | number                                                       |             |
| combatAreaAlphaThreshold        | number                                                       |             |
| combatAreaMultiplyTexture       | [TextureAsset](/vext/ref/fb/textureasset/)                                 |             |
| worldSize                       | number                                                       |             |
| airRadarRange                   | number                                                       |             |
| combatAreaScale                 | number                                                       |             |
| useStreamingMinimap             | bool                                                         |             |
| useCombatAreaTexture            | bool                                                         |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UIMinimapData](/vext/ref/fb/uiminimapdata/) | [Clone](#clone) |            |

### Clone

> [UIMinimapData](/vext/ref/fb/uiminimapdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
