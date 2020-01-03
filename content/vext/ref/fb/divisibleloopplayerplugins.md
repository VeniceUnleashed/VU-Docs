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
| sndPlayer | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| pause     | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| gain      | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| gainFader | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [DivisibleLoopPlayerPlugins](/vext/ref/fb/divisibleloopplayerplugins/) | [Clone](#clone) |            |

### Clone

> [DivisibleLoopPlayerPlugins](/vext/ref/fb/divisibleloopplayerplugins/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
