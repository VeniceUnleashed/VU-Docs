---
title: VeniceHudConfigAsset
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VeniceHudConfigAsset()                                                          | Create a new instance of this container type.                                                                                   |
| VeniceHudConfigAsset(VeniceHudConfigAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VeniceHudConfigAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceHudConfigAsset](VeniceHudConfigAsset). |

## Properties

| Name                       | Type                                                 | Description |
| -------------------------- | ---------------------------------------------------- | ----------- |
| ammoPickupSound            | [SoundWaveAsset](SoundWaveAsset)                     |             |
| weaponPickupSound          | [SoundWaveAsset](SoundWaveAsset)                     |             |
| newObjectiveSound          | [SoundWaveAsset](SoundWaveAsset)                     |             |
| objectiveCompletedSound    | [SoundWaveAsset](SoundWaveAsset)                     |             |
| objectiveUpdatedSound      | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mpVictorySoundMec          | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mpVictorySoundUs           | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mpVictorySoundRu           | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mpDefeatSoundMec           | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mpDefeatSoundUs            | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mpDefeatSoundRu            | [SoundWaveAsset](SoundWaveAsset)                     |             |
| artilleryAiming            | [SoundWaveAsset](SoundWaveAsset)                     |             |
| artilleryAimingOOA         | [SoundWaveAsset](SoundWaveAsset)                     |             |
| mortarStrikeLocking        | [SoundWaveAsset](SoundWaveAsset)                     |             |
| laserDesignatorLocked      | [SoundWaveAsset](SoundWaveAsset)                     |             |
| laserDesignatorLocking     | [SoundWaveAsset](SoundWaveAsset)                     |             |
| nametags                   | [UINametag](UINametag)\[\]                           |             |
| spawnScreenWeapons         | [SpawnScreenWeaponData](SpawnScreenWeaponData)\[\]   |             |
| maxOrderIconDistance       | number                                               |             |
| innerNametagRadius         | number                                               |             |
| outerNametagRadius         | number                                               |             |
| criticalHealthThreshold    | number                                               |             |
| taggedVehicleCrosshair     | [UITaggedVehicleCrosshair](UITaggedVehicleCrosshair) |             |
| minimap                    | [UIMinimapConfig](UIMinimapConfig)                   |             |
| showSpawnPointsOnMinimap   | bool                                                 |             |
| nametagHealthVisibleForAll | bool                                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceHudConfigAsset](VeniceHudConfigAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceHudConfigAsset](VeniceHudConfigAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
