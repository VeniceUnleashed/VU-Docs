---
title: ServerSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ServerSettings()                                                          | Create a new instance of this container type.                                                                       |
| ServerSettings(ServerSettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ServerSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [ServerSettings](/vext/ref/fb/serversettings/).                    |
| ServerSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ServerSettings](/vext/ref/fb/serversettings/). |

## Properties

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| instancePath                       | string |             |
| remoteControlPort                  | number |             |
| duplicationChance                  | number |             |
| maxQueriesPerSecond                | number |             |
| corruptionChance                   | number |             |
| remoteAdministrationPort           | string |             |
| maxDropDuration                    | number |             |
| reorderingChance                   | number |             |
| humanHealthMultiplier              | number |             |
| serverName                         | string |             |
| minDropDuration                    | number |             |
| saveGameVersion                    | number |             |
| packetDrops                        | number |             |
| dropSpikeChance                    | number |             |
| maxLatency                         | number |             |
| outgoingRate                       | number |             |
| incomingRate                       | number |             |
| playlist                           | string |             |
| savePoint                          | string |             |
| ingameTimeout                      | number |             |
| outgoingFrequency                  | number |             |
| respawnTimeModifier                | number |             |
| minLatency                         | number |             |
| serverPassword                     | string |             |
| timeoutTime                        | number |             |
| playerCountNeededForMultiplayer    | number |             |
| vehicleSpawnDelayModifier          | number |             |
| debugMenuClick                     | string |             |
| administrationPassword             | string |             |
| loadingTimeout                     | number |             |
| dedicatedServerCpu                 | number |             |
| deathmatchDebugInfo                | bool   |             |
| timeoutGame                        | bool   |             |
| aiLooksIntoCamera                  | bool   |             |
| isStatsEnabled                     | bool   |             |
| isTreeDestructionEnabled           | bool   |             |
| havokCaptureToFile                 | bool   |             |
| showTriggerDebugText               | bool   |             |
| isInternetSimulationEnabled        | bool   |             |
| disableCutscenes                   | bool   |             |
| jobEnable                          | bool   |             |
| threadingEnable                    | bool   |             |
| drawActivePhysicsObjects           | bool   |             |
| isRanked                           | bool   |             |
| unlockResolver                     | bool   |             |
| scoringLogEnabled                  | bool   |             |
| havokVisualDebugger                | bool   |             |
| isSoldierDetailedCollisionEnabled  | bool   |             |
| loadSavePoint                      | bool   |             |
| isSoldierAnimationEnabled          | bool   |             |
| isAiEnabled                        | bool   |             |
| isReconfigurable                   | bool   |             |
| isDestructionEnabled               | bool   |             |
| forcePlaylist                      | bool   |             |
| isNetworkStatsEnabled              | bool   |             |
| autoUnspawnBangers                 | bool   |             |
| regulatedAIThrottle                | bool   |             |
| enableAnimationCulling             | bool   |             |
| fallBackToSquadSpawn               | bool   |             |
| allowIndestructibleParts           | bool   |             |
| isPresenceEnabled                  | bool   |             |
| waterPhysicsEnabled                | bool   |             |
| respawnOnDeathPosition             | bool   |             |
| isRenderDamageEvents               | bool   |             |
| vehicleSpawnAllowed                | bool   |             |
| queryProviderEnabled               | bool   |             |
| isDesertingAllowed                 | bool   |             |
| debrisClusterEnabled               | bool   |             |
| administrationEnabled              | bool   |             |
| administrationLogEnabled           | bool   |             |
| administrationTimeStampLogNames    | bool   |             |
| administrationEventsEnabled        | bool   |             |
| administrationServerNameRestricted | bool   |             |
| threadedLoadingEnable              | bool   |             |
| vegetationEnabled                  | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ServerSettings](/vext/ref/fb/serversettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ServerSettings](/vext/ref/fb/serversettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
