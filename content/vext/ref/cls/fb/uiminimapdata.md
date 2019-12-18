---
title: UIMinimapData (Frostbite Structure)
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
| worldCenter                     | [Vec2](/vext/ref/cls/shr/Vec2)                            |             |
| combatAreaColor                 | [Vec4](/vext/ref/cls/shr/Vec4)                            |             |
| detailTextureTint               | [Vec4](/vext/ref/cls/shr/Vec4)                            |             |
| combatAreaMultiplyWrapAmount    | [Vec2](/vext/ref/cls/shr/Vec2)                            |             |
| vegetation                      | [UIMinimapDistanceFieldParams](UIMinimapDistanceFieldParams) |             |
| fadeTexture                     | [TextureAsset](TextureAsset)                                 |             |
| streamingMinimapDelay           | number                                                       |             |
| airRadarFadeTexture             | [TextureAsset](TextureAsset)                                 |             |
| detailTexture                   | [TextureAsset](TextureAsset)                                 |             |
| detail                          | [UIMinimapDistanceFieldParams](UIMinimapDistanceFieldParams) |             |
| streamingMinimapTransitionSpeed | number                                                       |             |
| worldRotation                   | number                                                       |             |
| worldRange                      | number                                                       |             |
| combatAreaDistanceScale         | number                                                       |             |
| combatAreaFadeSpeed             | number                                                       |             |
| combatAreaAlphaThreshold        | number                                                       |             |
| combatAreaMultiplyTexture       | [TextureAsset](TextureAsset)                                 |             |
| worldSize                       | number                                                       |             |
| airRadarRange                   | number                                                       |             |
| combatAreaScale                 | number                                                       |             |
| useStreamingMinimap             | bool                                                         |             |
| useCombatAreaTexture            | bool                                                         |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UIMinimapData](UIMinimapData) | [Clone](#clone) |            |

### Clone

> [UIMinimapData](UIMinimapData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
