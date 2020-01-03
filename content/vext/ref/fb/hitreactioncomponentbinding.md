---
title: HitReactionComponentBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| HitReactionComponentBinding()                                  | Create a new instance of this structure type.            |
| HitReactionComponentBinding(HitReactionComponentBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| hit                    | [AntRef](/vext/ref/fb/antref/) |             |
| allowKillFromAnimation | [AntRef](/vext/ref/fb/antref/) |             |
| direction              | [AntRef](/vext/ref/fb/antref/) |             |
| firingDistance         | [AntRef](/vext/ref/fb/antref/) |             |
| boneType               | [AntRef](/vext/ref/fb/antref/) |             |
| impactType             | [AntRef](/vext/ref/fb/antref/) |             |
| immortal               | [AntRef](/vext/ref/fb/antref/) |             |
| randomAnimationIndex   | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding/) | [Clone](#clone) |            |

### Clone

> [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
