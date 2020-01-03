---
title: PeerCreateGameParameters
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| PeerCreateGameParameters()                               | Create a new instance of this structure type.            |
| PeerCreateGameParameters(PeerCreateGameParameters other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                                               | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| base           | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters/) |             |
| playerCapacity | number                                                             |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters/) | [Clone](#clone) |            |

### Clone

> [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
