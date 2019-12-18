---
title: SoundGraphPluginRef (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| SoundGraphPluginRef()                          | Create a new instance of this structure type.            |
| SoundGraphPluginRef(SoundGraphPluginRef other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| isValid     | bool   |             |
| voiceIndex  | number |             |
| pluginIndex | number |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [SoundGraphPluginRef](SoundGraphPluginRef) | [Clone](#clone) |            |

### Clone

> [SoundGraphPluginRef](SoundGraphPluginRef) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
