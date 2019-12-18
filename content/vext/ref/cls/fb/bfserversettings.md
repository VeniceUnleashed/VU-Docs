---
title: BFServerSettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BFServerSettings()                                                          | Create a new instance of this container type.                                                                           |
| BFServerSettings(BFServerSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| BFServerSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [BFServerSettings](BFServerSettings).                    |
| BFServerSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BFServerSettings](BFServerSettings). |

## Properties

| Name                                       | Type                         | Description |
| ------------------------------------------ | ---------------------------- | ----------- |
| serverMessage                              | string                       |             |
| ctfRoundTimeModifier                       | number                       |             |
| forceTeamForPlayerTag                      | string                       |             |
| forceTeamForPlayerTagTeam                  | number                       |             |
| noInteractivityTimeoutTime                 | number                       |             |
| noInteractivityThresholdLimit              | number                       |             |
| noInteractivityBanRoundCount               | number                       |             |
| teamKillCountForKick                       | number                       |             |
| teamKillValueForKick                       | number                       |             |
| teamKillValueIncrease                      | number                       |             |
| teamKillValueDecreasePerSecond             | number                       |             |
| teamKillKickForBan                         | number                       |             |
| roundMaxPlayerCount                        | number                       |             |
| roundMinPlayerCount                        | number                       |             |
| roundLockdownCountdown                     | number                       |             |
| roundRestartCountdown                      | number                       |             |
| roundWarmupTimeout                         | number                       |             |
| bannerUrl                                  | string                       |             |
| serverPreset                               | string                       |             |
| serverDescription                          | string                       |             |
| serverAdministrationSettings               | string                       |             |
| gameSize                                   | number                       |             |
| serverAdministrationMapRotation            | string                       |             |
| serverAdministrationMapRotationInformation | string                       |             |
| serverAdministrationRoundsPerMap           | number                       |             |
| spectators                                 | string                       |             |
| punkBusterVersion                          | string                       |             |
| teamSwitchImbalanceLimit                   | number                       |             |
| gameMod                                    | string                       |             |
| pingSite                                   | string                       |             |
| overrideServerConfigurationStartTime       | string                       |             |
| gunMasterWeaponsPresetIndex                | number                       |             |
| serverConfigurationRefreshInterval         | number                       |             |
| deathmatchFriendZoneFallbackCount          | number                       |             |
| defaultVoiceChannel                        | [VoiceChannel](VoiceChannel) |             |
| mapSequencerEnabled                        | bool                         |             |
| kickAPlayerOnVIPJoin                       | bool                         |             |
| isManDownRotationEnabled                   | bool                         |             |
| isKillerCameraEnabled                      | bool                         |             |
| premiumStatus                              | bool                         |             |
| overrideAutoBalance                        | bool                         |             |
| autoBalance                                | bool                         |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BFServerSettings](BFServerSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BFServerSettings](BFServerSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
