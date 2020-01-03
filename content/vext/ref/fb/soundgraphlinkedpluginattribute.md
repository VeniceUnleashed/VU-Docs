---
title: SoundGraphLinkedPluginAttribute
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| SoundGraphLinkedPluginAttribute()                                      | Create a new instance of this structure type.            |
| SoundGraphLinkedPluginAttribute(SoundGraphLinkedPluginAttribute other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                       | Description |
| ------------------ | ------------------------------------------ | ----------- |
| plugin             | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| node               | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)   |             |
| port               | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| attributeIndex     | number                                     |             |
| allowExtremeValues | bool                                       |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute/) | [Clone](#clone) |            |

### Clone

> [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
