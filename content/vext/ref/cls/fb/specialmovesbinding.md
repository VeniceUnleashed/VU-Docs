---
title: SpecialMovesBinding (Frostbite Structure)
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
| triggerHighVault         | [AntRef](AntRef) |             |
| triggerUpVault           | [AntRef](AntRef) |             |
| triggerLowVault          | [AntRef](AntRef) |             |
| triggerSlideIntoProne    | [AntRef](AntRef) |             |
| triggerSpecialAnimation  | [AntRef](AntRef) |             |
| specialAnimationIndex    | [AntRef](AntRef) |             |
| objectHeight             | [AntRef](AntRef) |             |
| objectDistance           | [AntRef](AntRef) |             |
| startObjectDistanceTimer | [AntRef](AntRef) |             |
| vaultObjectPositionX     | [AntRef](AntRef) |             |
| vaultObjectPositionZ     | [AntRef](AntRef) |             |
| cancelAnimation          | [AntRef](AntRef) |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [SpecialMovesBinding](SpecialMovesBinding) | [Clone](#clone) |            |

### Clone

> [SpecialMovesBinding](SpecialMovesBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
