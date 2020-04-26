---
title: ServerSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[ServerSettings](#constructor-0)**() |
| **[ServerSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ServerSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[ServerSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "instancePath" >}} | string |
| {{< prop "remoteControlPort" >}} | int |
| {{< prop "duplicationChance" >}} | float |
| {{< prop "maxQueriesPerSecond" >}} | int |
| {{< prop "corruptionChance" >}} | float |
| {{< prop "remoteAdministrationPort" >}} | string |
| {{< prop "maxDropDuration" >}} | float |
| {{< prop "reorderingChance" >}} | float |
| {{< prop "humanHealthMultiplier" >}} | float |
| {{< prop "serverName" >}} | string |
| {{< prop "minDropDuration" >}} | float |
| {{< prop "saveGameVersion" >}} | int |
| {{< prop "packetDrops" >}} | float |
| {{< prop "dropSpikeChance" >}} | float |
| {{< prop "maxLatency" >}} | float |
| {{< prop "outgoingRate" >}} | int |
| {{< prop "incomingRate" >}} | int |
| {{< prop "playlist" >}} | string |
| {{< prop "savePoint" >}} | string |
| {{< prop "ingameTimeout" >}} | float |
| {{< prop "outgoingFrequency" >}} | float |
| {{< prop "respawnTimeModifier" >}} | float |
| {{< prop "minLatency" >}} | float |
| {{< prop "serverPassword" >}} | string |
| {{< prop "timeoutTime" >}} | float |
| {{< prop "playerCountNeededForMultiplayer" >}} | int |
| {{< prop "vehicleSpawnDelayModifier" >}} | float |
| {{< prop "debugMenuClick" >}} | string |
| {{< prop "administrationPassword" >}} | string |
| {{< prop "loadingTimeout" >}} | float |
| {{< prop "dedicatedServerCpu" >}} | int |
| {{< prop "deathmatchDebugInfo" >}} | bool |
| {{< prop "timeoutGame" >}} | bool |
| {{< prop "aiLooksIntoCamera" >}} | bool |
| {{< prop "isStatsEnabled" >}} | bool |
| {{< prop "isTreeDestructionEnabled" >}} | bool |
| {{< prop "havokCaptureToFile" >}} | bool |
| {{< prop "showTriggerDebugText" >}} | bool |
| {{< prop "isInternetSimulationEnabled" >}} | bool |
| {{< prop "disableCutscenes" >}} | bool |
| {{< prop "jobEnable" >}} | bool |
| {{< prop "threadingEnable" >}} | bool |
| {{< prop "drawActivePhysicsObjects" >}} | bool |
| {{< prop "isRanked" >}} | bool |
| {{< prop "unlockResolver" >}} | bool |
| {{< prop "scoringLogEnabled" >}} | bool |
| {{< prop "havokVisualDebugger" >}} | bool |
| {{< prop "isSoldierDetailedCollisionEnabled" >}} | bool |
| {{< prop "loadSavePoint" >}} | bool |
| {{< prop "isSoldierAnimationEnabled" >}} | bool |
| {{< prop "isAiEnabled" >}} | bool |
| {{< prop "isReconfigurable" >}} | bool |
| {{< prop "isDestructionEnabled" >}} | bool |
| {{< prop "forcePlaylist" >}} | bool |
| {{< prop "isNetworkStatsEnabled" >}} | bool |
| {{< prop "autoUnspawnBangers" >}} | bool |
| {{< prop "regulatedAIThrottle" >}} | bool |
| {{< prop "enableAnimationCulling" >}} | bool |
| {{< prop "fallBackToSquadSpawn" >}} | bool |
| {{< prop "allowIndestructibleParts" >}} | bool |
| {{< prop "isPresenceEnabled" >}} | bool |
| {{< prop "waterPhysicsEnabled" >}} | bool |
| {{< prop "respawnOnDeathPosition" >}} | bool |
| {{< prop "isRenderDamageEvents" >}} | bool |
| {{< prop "vehicleSpawnAllowed" >}} | bool |
| {{< prop "queryProviderEnabled" >}} | bool |
| {{< prop "isDesertingAllowed" >}} | bool |
| {{< prop "debrisClusterEnabled" >}} | bool |
| {{< prop "administrationEnabled" >}} | bool |
| {{< prop "administrationLogEnabled" >}} | bool |
| {{< prop "administrationTimeStampLogNames" >}} | bool |
| {{< prop "administrationEventsEnabled" >}} | bool |
| {{< prop "administrationServerNameRestricted" >}} | bool |
| {{< prop "threadedLoadingEnable" >}} | bool |
| {{< prop "vegetationEnabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ServerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ServerSettings {#constructor-0}

> **ServerSettings**()

Creates a new [ServerSettings](/vext/ref/fb/serversettings) frostbite instance.

### ServerSettings {#constructor-1}

> **ServerSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ServerSettings](/vext/ref/fb/serversettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ServerSettings {#constructor-2}

> **ServerSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [ServerSettings](/vext/ref/fb/serversettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [ServerSettings](/vext/ref/fb/serversettings). |

### ServerSettings {#constructor-3}

> **ServerSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ServerSettings](/vext/ref/fb/serversettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ServerSettings](/vext/ref/fb/serversettings). |

## Properties

### {{% prop-heading "instancePath" %}}

> **string**

### {{% prop-heading "remoteControlPort" %}}

> **int**

### {{% prop-heading "duplicationChance" %}}

> **float**

### {{% prop-heading "maxQueriesPerSecond" %}}

> **int**

### {{% prop-heading "corruptionChance" %}}

> **float**

### {{% prop-heading "remoteAdministrationPort" %}}

> **string**

### {{% prop-heading "maxDropDuration" %}}

> **float**

### {{% prop-heading "reorderingChance" %}}

> **float**

### {{% prop-heading "humanHealthMultiplier" %}}

> **float**

### {{% prop-heading "serverName" %}}

> **string**

### {{% prop-heading "minDropDuration" %}}

> **float**

### {{% prop-heading "saveGameVersion" %}}

> **int**

### {{% prop-heading "packetDrops" %}}

> **float**

### {{% prop-heading "dropSpikeChance" %}}

> **float**

### {{% prop-heading "maxLatency" %}}

> **float**

### {{% prop-heading "outgoingRate" %}}

> **int**

### {{% prop-heading "incomingRate" %}}

> **int**

### {{% prop-heading "playlist" %}}

> **string**

### {{% prop-heading "savePoint" %}}

> **string**

### {{% prop-heading "ingameTimeout" %}}

> **float**

### {{% prop-heading "outgoingFrequency" %}}

> **float**

### {{% prop-heading "respawnTimeModifier" %}}

> **float**

### {{% prop-heading "minLatency" %}}

> **float**

### {{% prop-heading "serverPassword" %}}

> **string**

### {{% prop-heading "timeoutTime" %}}

> **float**

### {{% prop-heading "playerCountNeededForMultiplayer" %}}

> **int**

### {{% prop-heading "vehicleSpawnDelayModifier" %}}

> **float**

### {{% prop-heading "debugMenuClick" %}}

> **string**

### {{% prop-heading "administrationPassword" %}}

> **string**

### {{% prop-heading "loadingTimeout" %}}

> **float**

### {{% prop-heading "dedicatedServerCpu" %}}

> **int**

### {{% prop-heading "deathmatchDebugInfo" %}}

> **bool**

### {{% prop-heading "timeoutGame" %}}

> **bool**

### {{% prop-heading "aiLooksIntoCamera" %}}

> **bool**

### {{% prop-heading "isStatsEnabled" %}}

> **bool**

### {{% prop-heading "isTreeDestructionEnabled" %}}

> **bool**

### {{% prop-heading "havokCaptureToFile" %}}

> **bool**

### {{% prop-heading "showTriggerDebugText" %}}

> **bool**

### {{% prop-heading "isInternetSimulationEnabled" %}}

> **bool**

### {{% prop-heading "disableCutscenes" %}}

> **bool**

### {{% prop-heading "jobEnable" %}}

> **bool**

### {{% prop-heading "threadingEnable" %}}

> **bool**

### {{% prop-heading "drawActivePhysicsObjects" %}}

> **bool**

### {{% prop-heading "isRanked" %}}

> **bool**

### {{% prop-heading "unlockResolver" %}}

> **bool**

### {{% prop-heading "scoringLogEnabled" %}}

> **bool**

### {{% prop-heading "havokVisualDebugger" %}}

> **bool**

### {{% prop-heading "isSoldierDetailedCollisionEnabled" %}}

> **bool**

### {{% prop-heading "loadSavePoint" %}}

> **bool**

### {{% prop-heading "isSoldierAnimationEnabled" %}}

> **bool**

### {{% prop-heading "isAiEnabled" %}}

> **bool**

### {{% prop-heading "isReconfigurable" %}}

> **bool**

### {{% prop-heading "isDestructionEnabled" %}}

> **bool**

### {{% prop-heading "forcePlaylist" %}}

> **bool**

### {{% prop-heading "isNetworkStatsEnabled" %}}

> **bool**

### {{% prop-heading "autoUnspawnBangers" %}}

> **bool**

### {{% prop-heading "regulatedAIThrottle" %}}

> **bool**

### {{% prop-heading "enableAnimationCulling" %}}

> **bool**

### {{% prop-heading "fallBackToSquadSpawn" %}}

> **bool**

### {{% prop-heading "allowIndestructibleParts" %}}

> **bool**

### {{% prop-heading "isPresenceEnabled" %}}

> **bool**

### {{% prop-heading "waterPhysicsEnabled" %}}

> **bool**

### {{% prop-heading "respawnOnDeathPosition" %}}

> **bool**

### {{% prop-heading "isRenderDamageEvents" %}}

> **bool**

### {{% prop-heading "vehicleSpawnAllowed" %}}

> **bool**

### {{% prop-heading "queryProviderEnabled" %}}

> **bool**

### {{% prop-heading "isDesertingAllowed" %}}

> **bool**

### {{% prop-heading "debrisClusterEnabled" %}}

> **bool**

### {{% prop-heading "administrationEnabled" %}}

> **bool**

### {{% prop-heading "administrationLogEnabled" %}}

> **bool**

### {{% prop-heading "administrationTimeStampLogNames" %}}

> **bool**

### {{% prop-heading "administrationEventsEnabled" %}}

> **bool**

### {{% prop-heading "administrationServerNameRestricted" %}}

> **bool**

### {{% prop-heading "threadedLoadingEnable" %}}

> **bool**

### {{% prop-heading "vegetationEnabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ServerSettings](/vext/ref/fb/serversettings) type.

