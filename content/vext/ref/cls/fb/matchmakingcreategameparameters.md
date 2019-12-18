---
title: MatchmakingCreateGameParameters (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| MatchmakingCreateGameParameters()                                      | Create a new instance of this structure type.            |
| MatchmakingCreateGameParameters(MatchmakingCreateGameParameters other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                                     | Description |
| ------------- | -------------------------------------------------------- | ----------- |
| gameTopology  | [MatchmakingNetworkTopology](MatchmakingNetworkTopology) |             |
| peerMode      | [MatchmakingPeer2PeerMode](MatchmakingPeer2PeerMode)     |             |
| voipTopology  | [MatchmakingNetworkTopology](MatchmakingNetworkTopology) |             |
| settings      | [MatchmakingGameSettings](MatchmakingGameSettings)       |             |
| attributes    | [MatchmakingGameAttribute](MatchmakingGameAttribute)\[\] |             |
| queueCapacity | number                                                   |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [MatchmakingCreateGameParameters](MatchmakingCreateGameParameters) | [Clone](#clone) |            |

### Clone

> [MatchmakingCreateGameParameters](MatchmakingCreateGameParameters) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
