---
title: MatchmakingCreateGameParameters
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
| gameTopology  | [MatchmakingNetworkTopology](/vext/ref/fb/matchmakingnetworktopology/) |             |
| peerMode      | [MatchmakingPeer2PeerMode](/vext/ref/fb/matchmakingpeer2peermode/)     |             |
| voipTopology  | [MatchmakingNetworkTopology](/vext/ref/fb/matchmakingnetworktopology/) |             |
| settings      | [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings/)       |             |
| attributes    | [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute/)\[\] |             |
| queueCapacity | number                                                   |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters/) | [Clone](#clone) |            |

### Clone

> [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
