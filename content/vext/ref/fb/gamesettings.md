---
title: GameSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[GameSettings](#constructor-0)**() |
| **[GameSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[GameSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxPlayerCount" >}} | int |
| {{< prop "maxSpectatorCount" >}} | int |
| {{< prop "layerInclusionTable" >}} | [SubWorldInclusion](/vext/ref/fb/subworldinclusion) \| nil |
| {{< prop "logFileCollisionMode" >}} | [LogFileCollisionMode](/vext/ref/fb/logfilecollisionmode) |
| {{< prop "logFileRotationHistoryLength" >}} | int |
| {{< prop "level" >}} | string |
| {{< prop "defaultLayerInclusion" >}} | string |
| {{< prop "inputConfiguration" >}} | [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset)[] |
| {{< prop "defaultTeamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "levelWarmUpTime" >}} | float |
| {{< prop "timeToWaitForQuitTaskCompletion" >}} | float |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "version" >}} | [VersionData](/vext/ref/fb/versiondata) \| nil |
| {{< prop "pS3ContentRatingAge" >}} | int |
| {{< prop "difficultyIndex" >}} | int |
| {{< prop "timeBeforeSpawnIsAllowed" >}} | float |
| {{< prop "soldierWeaponSwitching" >}} | [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata) \| nil |
| {{< prop "logHistory" >}} | int |
| {{< prop "difficultySettings" >}} | [DifficultyDatas](/vext/ref/fb/difficultydatas) \| nil |
| {{< prop "metadataContainers" >}} | [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer)[] |
| {{< prop "currentSKU" >}} | [SKU](/vext/ref/fb/sku) |
| {{< prop "player" >}} | [PlayerData](/vext/ref/fb/playerdata) \| nil |
| {{< prop "logFileEnable" >}} | bool |
| {{< prop "rotateLogs" >}} | bool |
| {{< prop "enableLoadingProfile" >}} | bool |
| {{< prop "adjustVehicleCenterOfMass" >}} | bool |
| {{< prop "autoAimEnabled" >}} | bool |
| {{< prop "hasUnlimitedAmmo" >}} | bool |
| {{< prop "hasUnlimitedMags" >}} | bool |
| {{< prop "resourceRefreshAlwaysAllowed" >}} | bool |
| {{< prop "useSpeedBasedDetailedCollision" >}} | bool |
| {{< prop "aimAssistEnabled" >}} | bool |
| {{< prop "aimAssistUsePolynomials" >}} | bool |
| {{< prop "forceFreeStreaming" >}} | bool |
| {{< prop "forceDisableFreeStreaming" >}} | bool |
| {{< prop "isGodMode" >}} | bool |
| {{< prop "isJesusMode" >}} | bool |
| {{< prop "isJesusModeAi" >}} | bool |
| {{< prop "useSingleWeaponSelector" >}} | bool |
| {{< prop "gameAdministrationEnabled" >}} | bool |
| {{< prop "allowDestructionOutsideCombatArea" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameSettings {#constructor-0}

> **GameSettings**()

Creates a new [GameSettings](/vext/ref/fb/gamesettings) frostbite instance.

### GameSettings {#constructor-1}

> **GameSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameSettings](/vext/ref/fb/gamesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameSettings {#constructor-2}

> **GameSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [GameSettings](/vext/ref/fb/gamesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [GameSettings](/vext/ref/fb/gamesettings). |

### GameSettings {#constructor-3}

> **GameSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameSettings](/vext/ref/fb/gamesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameSettings](/vext/ref/fb/gamesettings). |

## Properties

### {{% prop-heading "maxPlayerCount" %}}

> **int**

### {{% prop-heading "maxSpectatorCount" %}}

> **int**

### {{% prop-heading "layerInclusionTable" %}}

> **[SubWorldInclusion](/vext/ref/fb/subworldinclusion)** \| **nil**

### {{% prop-heading "logFileCollisionMode" %}}

> **[LogFileCollisionMode](/vext/ref/fb/logfilecollisionmode)**

### {{% prop-heading "logFileRotationHistoryLength" %}}

> **int**

### {{% prop-heading "level" %}}

> **string**

### {{% prop-heading "defaultLayerInclusion" %}}

> **string**

### {{% prop-heading "inputConfiguration" %}}

> **[InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset)**[]

### {{% prop-heading "defaultTeamId" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "levelWarmUpTime" %}}

> **float**

### {{% prop-heading "timeToWaitForQuitTaskCompletion" %}}

> **float**

### {{% prop-heading "platform" %}}

> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "version" %}}

> **[VersionData](/vext/ref/fb/versiondata)** \| **nil**

### {{% prop-heading "pS3ContentRatingAge" %}}

> **int**

### {{% prop-heading "difficultyIndex" %}}

> **int**

### {{% prop-heading "timeBeforeSpawnIsAllowed" %}}

> **float**

### {{% prop-heading "soldierWeaponSwitching" %}}

> **[SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata)** \| **nil**

### {{% prop-heading "logHistory" %}}

> **int**

### {{% prop-heading "difficultySettings" %}}

> **[DifficultyDatas](/vext/ref/fb/difficultydatas)** \| **nil**

### {{% prop-heading "metadataContainers" %}}

> **[BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer)**[]

### {{% prop-heading "currentSKU" %}}

> **[SKU](/vext/ref/fb/sku)**

### {{% prop-heading "player" %}}

> **[PlayerData](/vext/ref/fb/playerdata)** \| **nil**

### {{% prop-heading "logFileEnable" %}}

> **bool**

### {{% prop-heading "rotateLogs" %}}

> **bool**

### {{% prop-heading "enableLoadingProfile" %}}

> **bool**

### {{% prop-heading "adjustVehicleCenterOfMass" %}}

> **bool**

### {{% prop-heading "autoAimEnabled" %}}

> **bool**

### {{% prop-heading "hasUnlimitedAmmo" %}}

> **bool**

### {{% prop-heading "hasUnlimitedMags" %}}

> **bool**

### {{% prop-heading "resourceRefreshAlwaysAllowed" %}}

> **bool**

### {{% prop-heading "useSpeedBasedDetailedCollision" %}}

> **bool**

### {{% prop-heading "aimAssistEnabled" %}}

> **bool**

### {{% prop-heading "aimAssistUsePolynomials" %}}

> **bool**

### {{% prop-heading "forceFreeStreaming" %}}

> **bool**

### {{% prop-heading "forceDisableFreeStreaming" %}}

> **bool**

### {{% prop-heading "isGodMode" %}}

> **bool**

### {{% prop-heading "isJesusMode" %}}

> **bool**

### {{% prop-heading "isJesusModeAi" %}}

> **bool**

### {{% prop-heading "useSingleWeaponSelector" %}}

> **bool**

### {{% prop-heading "gameAdministrationEnabled" %}}

> **bool**

### {{% prop-heading "allowDestructionOutsideCombatArea" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameSettings](/vext/ref/fb/gamesettings) type.

