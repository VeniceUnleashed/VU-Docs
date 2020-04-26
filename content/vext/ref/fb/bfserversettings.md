---
title: BFServerSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[BFServerSettings](#constructor-0)**() |
| **[BFServerSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BFServerSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[BFServerSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "serverMessage" >}} | string |
| {{< prop "ctfRoundTimeModifier" >}} | float |
| {{< prop "forceTeamForPlayerTag" >}} | string |
| {{< prop "forceTeamForPlayerTagTeam" >}} | int |
| {{< prop "noInteractivityTimeoutTime" >}} | float |
| {{< prop "noInteractivityThresholdLimit" >}} | float |
| {{< prop "noInteractivityBanRoundCount" >}} | int |
| {{< prop "teamKillCountForKick" >}} | int |
| {{< prop "teamKillValueForKick" >}} | float |
| {{< prop "teamKillValueIncrease" >}} | float |
| {{< prop "teamKillValueDecreasePerSecond" >}} | float |
| {{< prop "teamKillKickForBan" >}} | int |
| {{< prop "roundMaxPlayerCount" >}} | int |
| {{< prop "roundMinPlayerCount" >}} | int |
| {{< prop "roundLockdownCountdown" >}} | int |
| {{< prop "roundRestartCountdown" >}} | int |
| {{< prop "roundWarmupTimeout" >}} | int |
| {{< prop "bannerUrl" >}} | string |
| {{< prop "serverPreset" >}} | string |
| {{< prop "serverDescription" >}} | string |
| {{< prop "serverAdministrationSettings" >}} | string |
| {{< prop "gameSize" >}} | int |
| {{< prop "serverAdministrationMapRotation" >}} | string |
| {{< prop "serverAdministrationMapRotationInformation" >}} | string |
| {{< prop "serverAdministrationRoundsPerMap" >}} | int |
| {{< prop "spectators" >}} | string |
| {{< prop "punkBusterVersion" >}} | string |
| {{< prop "teamSwitchImbalanceLimit" >}} | int |
| {{< prop "gameMod" >}} | string |
| {{< prop "pingSite" >}} | string |
| {{< prop "overrideServerConfigurationStartTime" >}} | string |
| {{< prop "gunMasterWeaponsPresetIndex" >}} | int |
| {{< prop "serverConfigurationRefreshInterval" >}} | int |
| {{< prop "deathmatchFriendZoneFallbackCount" >}} | int |
| {{< prop "defaultVoiceChannel" >}} | [VoiceChannel](/vext/ref/fb/voicechannel) |
| {{< prop "mapSequencerEnabled" >}} | bool |
| {{< prop "kickAPlayerOnVIPJoin" >}} | bool |
| {{< prop "isManDownRotationEnabled" >}} | bool |
| {{< prop "isKillerCameraEnabled" >}} | bool |
| {{< prop "premiumStatus" >}} | bool |
| {{< prop "overrideAutoBalance" >}} | bool |
| {{< prop "autoBalance" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BFServerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BFServerSettings {#constructor-0}
> **BFServerSettings**()

Creates a new [BFServerSettings](/vext/ref/fb/bfserversettings) frostbite instance.

### BFServerSettings {#constructor-1}
> **BFServerSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BFServerSettings](/vext/ref/fb/bfserversettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BFServerSettings {#constructor-2}
> **BFServerSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [BFServerSettings](/vext/ref/fb/bfserversettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [BFServerSettings](/vext/ref/fb/bfserversettings). |

### BFServerSettings {#constructor-3}
> **BFServerSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFServerSettings](/vext/ref/fb/bfserversettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BFServerSettings](/vext/ref/fb/bfserversettings). |

## Properties
### {{% prop-heading "serverMessage" %}}
> **string**

### {{% prop-heading "ctfRoundTimeModifier" %}}
> **float**

### {{% prop-heading "forceTeamForPlayerTag" %}}
> **string**

### {{% prop-heading "forceTeamForPlayerTagTeam" %}}
> **int**

### {{% prop-heading "noInteractivityTimeoutTime" %}}
> **float**

### {{% prop-heading "noInteractivityThresholdLimit" %}}
> **float**

### {{% prop-heading "noInteractivityBanRoundCount" %}}
> **int**

### {{% prop-heading "teamKillCountForKick" %}}
> **int**

### {{% prop-heading "teamKillValueForKick" %}}
> **float**

### {{% prop-heading "teamKillValueIncrease" %}}
> **float**

### {{% prop-heading "teamKillValueDecreasePerSecond" %}}
> **float**

### {{% prop-heading "teamKillKickForBan" %}}
> **int**

### {{% prop-heading "roundMaxPlayerCount" %}}
> **int**

### {{% prop-heading "roundMinPlayerCount" %}}
> **int**

### {{% prop-heading "roundLockdownCountdown" %}}
> **int**

### {{% prop-heading "roundRestartCountdown" %}}
> **int**

### {{% prop-heading "roundWarmupTimeout" %}}
> **int**

### {{% prop-heading "bannerUrl" %}}
> **string**

### {{% prop-heading "serverPreset" %}}
> **string**

### {{% prop-heading "serverDescription" %}}
> **string**

### {{% prop-heading "serverAdministrationSettings" %}}
> **string**

### {{% prop-heading "gameSize" %}}
> **int**

### {{% prop-heading "serverAdministrationMapRotation" %}}
> **string**

### {{% prop-heading "serverAdministrationMapRotationInformation" %}}
> **string**

### {{% prop-heading "serverAdministrationRoundsPerMap" %}}
> **int**

### {{% prop-heading "spectators" %}}
> **string**

### {{% prop-heading "punkBusterVersion" %}}
> **string**

### {{% prop-heading "teamSwitchImbalanceLimit" %}}
> **int**

### {{% prop-heading "gameMod" %}}
> **string**

### {{% prop-heading "pingSite" %}}
> **string**

### {{% prop-heading "overrideServerConfigurationStartTime" %}}
> **string**

### {{% prop-heading "gunMasterWeaponsPresetIndex" %}}
> **int**

### {{% prop-heading "serverConfigurationRefreshInterval" %}}
> **int**

### {{% prop-heading "deathmatchFriendZoneFallbackCount" %}}
> **int**

### {{% prop-heading "defaultVoiceChannel" %}}
> **[VoiceChannel](/vext/ref/fb/voicechannel)**

### {{% prop-heading "mapSequencerEnabled" %}}
> **bool**

### {{% prop-heading "kickAPlayerOnVIPJoin" %}}
> **bool**

### {{% prop-heading "isManDownRotationEnabled" %}}
> **bool**

### {{% prop-heading "isKillerCameraEnabled" %}}
> **bool**

### {{% prop-heading "premiumStatus" %}}
> **bool**

### {{% prop-heading "overrideAutoBalance" %}}
> **bool**

### {{% prop-heading "autoBalance" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BFServerSettings](/vext/ref/fb/bfserversettings) type.

