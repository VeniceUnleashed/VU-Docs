---
title: SamplerPlugins
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| SamplerPlugins()                     | Create a new instance of this structure type.            |
| SamplerPlugins(SamplerPlugins other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| sndPlayer | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| resample  | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| pause     | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| gain      | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [SamplerPlugins](/vext/ref/fb/samplerplugins/) | [Clone](#clone) |            |

### Clone

> [SamplerPlugins](/vext/ref/fb/samplerplugins/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
