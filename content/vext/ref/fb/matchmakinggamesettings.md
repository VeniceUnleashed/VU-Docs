---
title: MatchmakingGameSettings
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| MatchmakingGameSettings()                              | Create a new instance of this structure type.            |
| MatchmakingGameSettings(MatchmakingGameSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                              | Type | Description |
| --------------------------------- | ---- | ----------- |
| openToBrowsing                    | bool |             |
| openToInvites                     | bool |             |
| openToMatchmaking                 | bool |             |
| openToJoinByPlayer                | bool |             |
| hostMigratable                    | bool |             |
| ranked                            | bool |             |
| adminOnlyInvites                  | bool |             |
| enforceSingleGroupJoin            | bool |             |
| joinInProgressSupported           | bool |             |
| adminInvitesOnlyIgnoreEntryChecks | bool |             |
| enablePersistedGameId             | bool |             |
| allowSameTeamId                   | bool |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings/) | [Clone](#clone) |            |

### Clone

> [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
