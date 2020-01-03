---
title: VisionBoxSettings
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| VisionBoxSettings()                        | Create a new instance of this structure type.            |
| VisionBoxSettings(VisionBoxSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| decreaseXz       | number |             |
| lowerTop         | number |             |
| raiseBottom      | number |             |
| raiseBottomHuman | number |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [VisionBoxSettings](/vext/ref/fb/visionboxsettings/) | [Clone](#clone) |            |

### Clone

> [VisionBoxSettings](/vext/ref/fb/visionboxsettings/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
