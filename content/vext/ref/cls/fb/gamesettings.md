---
title: GameSettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GameSettings()                                                          | Create a new instance of this container type.                                                                   |
| GameSettings(GameSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| GameSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [GameSettings](GameSettings).                    |
| GameSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameSettings](GameSettings). |

## Properties

| Name                              | Type                                                                     | Description |
| --------------------------------- | ------------------------------------------------------------------------ | ----------- |
| maxPlayerCount                    | number                                                                   |             |
| maxSpectatorCount                 | number                                                                   |             |
| layerInclusionTable               | [SubWorldInclusion](SubWorldInclusion)                                   |             |
| logFileCollisionMode              | [LogFileCollisionMode](LogFileCollisionMode)                             |             |
| logFileRotationHistoryLength      | number                                                                   |             |
| level                             | string                                                                   |             |
| defaultLayerInclusion             | string                                                                   |             |
| inputConfiguration                | [InputConfigurationAsset](InputConfigurationAsset)\[\]                   |             |
| defaultTeamId                     | [TeamId](TeamId)                                                         |             |
| levelWarmUpTime                   | number                                                                   |             |
| timeToWaitForQuitTaskCompletion   | number                                                                   |             |
| platform                          | [GamePlatform](GamePlatform)                                             |             |
| version                           | [VersionData](VersionData)                                               |             |
| pS3ContentRatingAge               | number                                                                   |             |
| difficultyIndex                   | number                                                                   |             |
| timeBeforeSpawnIsAllowed          | number                                                                   |             |
| soldierWeaponSwitching            | [SoldierWeaponSwitchingData](SoldierWeaponSwitchingData)                 |             |
| logHistory                        | number                                                                   |             |
| difficultySettings                | [DifficultyDatas](DifficultyDatas)                                       |             |
| metadataContainers                | [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer)\[\] |             |
| currentSKU                        | [SKU](SKU)                                                               |             |
| player                            | [PlayerData](PlayerData)                                                 |             |
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
| [GameSettings](GameSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameSettings](GameSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
