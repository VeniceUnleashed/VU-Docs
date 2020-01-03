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
| VeniceHudConfigAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset/). |

## Properties

| Name                       | Type                                                 | Description |
| -------------------------- | ---------------------------------------------------- | ----------- |
| ammoPickupSound            | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| weaponPickupSound          | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| newObjectiveSound          | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| objectiveCompletedSound    | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| objectiveUpdatedSound      | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mpVictorySoundMec          | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mpVictorySoundUs           | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mpVictorySoundRu           | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mpDefeatSoundMec           | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mpDefeatSoundUs            | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mpDefeatSoundRu            | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| artilleryAiming            | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| artilleryAimingOOA         | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| mortarStrikeLocking        | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| laserDesignatorLocked      | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| laserDesignatorLocking     | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| nametags                   | [UINametag](/vext/ref/fb/uinametag/)\[\]                           |             |
| spawnScreenWeapons         | [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata/)\[\]   |             |
| maxOrderIconDistance       | number                                               |             |
| innerNametagRadius         | number                                               |             |
| outerNametagRadius         | number                                               |             |
| criticalHealthThreshold    | number                                               |             |
| taggedVehicleCrosshair     | [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair/) |             |
| minimap                    | [UIMinimapConfig](/vext/ref/fb/uiminimapconfig/)                   |             |
| showSpawnPointsOnMinimap   | bool                                                 |             |
| nametagHealthVisibleForAll | bool                                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
