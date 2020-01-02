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
| sndPlayer | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| resample  | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| pause     | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| gain      | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [SamplerPlugins](SamplerPlugins) | [Clone](#clone) |            |

### Clone

> [SamplerPlugins](SamplerPlugins) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
