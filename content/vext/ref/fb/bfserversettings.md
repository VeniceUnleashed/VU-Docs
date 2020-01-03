---
title: BFServerSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BFServerSettings()                                                          | Create a new instance of this container type.                                                                           |
| BFServerSettings(BFServerSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| BFServerSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [BFServerSettings](/vext/ref/fb/bfserversettings/).                    |
| BFServerSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFServerSettings](/vext/ref/fb/bfserversettings/). |

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
| defaultVoiceChannel                        | [VoiceChannel](/vext/ref/fb/voicechannel/) |             |
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
| [BFServerSettings](/vext/ref/fb/bfserversettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFServerSettings](/vext/ref/fb/bfserversettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
