---
title: SpecialMovesBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| SpecialMovesBinding()                          | Create a new instance of this structure type.            |
| SpecialMovesBinding(SpecialMovesBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type             | Description |
| ------------------------ | ---------------- | ----------- |
| triggerHighVault         | [AntRef](/vext/ref/fb/antref/) |             |
| triggerUpVault           | [AntRef](/vext/ref/fb/antref/) |             |
| triggerLowVault          | [AntRef](/vext/ref/fb/antref/) |             |
| triggerSlideIntoProne    | [AntRef](/vext/ref/fb/antref/) |             |
| triggerSpecialAnimation  | [AntRef](/vext/ref/fb/antref/) |             |
| specialAnimationIndex    | [AntRef](/vext/ref/fb/antref/) |             |
| objectHeight             | [AntRef](/vext/ref/fb/antref/) |             |
| objectDistance           | [AntRef](/vext/ref/fb/antref/) |             |
| startObjectDistanceTimer | [AntRef](/vext/ref/fb/antref/) |             |
| vaultObjectPositionX     | [AntRef](/vext/ref/fb/antref/) |             |
| vaultObjectPositionZ     | [AntRef](/vext/ref/fb/antref/) |             |
| cancelAnimation          | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding/) | [Clone](#clone) |            |

### Clone

> [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
