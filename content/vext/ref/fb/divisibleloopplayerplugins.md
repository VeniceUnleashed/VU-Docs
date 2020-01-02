---
title: DivisibleLoopPlayerPlugins
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| DivisibleLoopPlayerPlugins()                                 | Create a new instance of this structure type.            |
| DivisibleLoopPlayerPlugins(DivisibleLoopPlayerPlugins other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| sndPlayer | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| pause     | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| gain      | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| gainFader | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [DivisibleLoopPlayerPlugins](DivisibleLoopPlayerPlugins) | [Clone](#clone) |            |

### Clone

> [DivisibleLoopPlayerPlugins](DivisibleLoopPlayerPlugins) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
