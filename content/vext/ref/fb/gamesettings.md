---
title: GameSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GameSettings()                                                          | Create a new instance of this container type.                                                                   |
| GameSettings(GameSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| GameSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [GameSettings](/vext/ref/fb/gamesettings/).                    |
| GameSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSettings](/vext/ref/fb/gamesettings/). |

## Properties

| Name                              | Type                                                                     | Description |
| --------------------------------- | ------------------------------------------------------------------------ | ----------- |
| maxPlayerCount                    | number                                                                   |             |
| maxSpectatorCount                 | number                                                                   |             |
| layerInclusionTable               | [SubWorldInclusion](/vext/ref/fb/subworldinclusion/)                                   |             |
| logFileCollisionMode              | [LogFileCollisionMode](/vext/ref/fb/logfilecollisionmode/)                             |             |
| logFileRotationHistoryLength      | number                                                                   |             |
| level                             | string                                                                   |             |
| defaultLayerInclusion             | string                                                                   |             |
| inputConfiguration                | [InputConfigurationAsset](/vext/ref/fb/inputconfigurationasset/)\[\]                   |             |
| defaultTeamId                     | [TeamId](/vext/ref/fb/teamid/)                                                         |             |
| levelWarmUpTime                   | number                                                                   |             |
| timeToWaitForQuitTaskCompletion   | number                                                                   |             |
| platform                          | [GamePlatform](/vext/ref/fb/gameplatform/)                                             |             |
| version                           | [VersionData](/vext/ref/fb/versiondata/)                                               |             |
| pS3ContentRatingAge               | number                                                                   |             |
| difficultyIndex                   | number                                                                   |             |
| timeBeforeSpawnIsAllowed          | number                                                                   |             |
| soldierWeaponSwitching            | [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata/)                 |             |
| logHistory                        | number                                                                   |             |
| difficultySettings                | [DifficultyDatas](/vext/ref/fb/difficultydatas/)                                       |             |
| metadataContainers                | [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer/)\[\] |             |
| currentSKU                        | [SKU](/vext/ref/fb/sku/)                                                               |             |
| player                            | [PlayerData](/vext/ref/fb/playerdata/)                                                 |             |
| logFileEnable                     | bool                                                                     |             |
| rotateLogs                        | bool                                                                     |             |
| enableLoadingProfile              | bool                                                                     |             |
| adjustVehicleCenterOfMass         | bool                                                                     |             |
| autoAimEnabled                    | bool                                                                     |             |
| hasUnlimitedAmmo                  | bool                                                                     |             |
| hasUnlimitedMags                  | bool                                                                     |             |
| resourceRefreshAlwaysAllowed      | bool                                                                     |             |
| useSpeedBasedDetailedCollision    | bool                                                                     |             |
| aimAssistEnabled                  | bool                                                                     |             |
| aimAssistUsePolynomials           | bool                                                                     |             |
| forceFreeStreaming                | bool                                                                     |             |
| forceDisableFreeStreaming         | bool                                                                     |             |
| isGodMode                         | bool                                                                     |             |
| isJesusMode                       | bool                                                                     |             |
| isJesusModeAi                     | bool                                                                     |             |
| useSingleWeaponSelector           | bool                                                                     |             |
| gameAdministrationEnabled         | bool                                                                     |             |
| allowDestructionOutsideCombatArea | bool                                                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [GameSettings](/vext/ref/fb/gamesettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSettings](/vext/ref/fb/gamesettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
