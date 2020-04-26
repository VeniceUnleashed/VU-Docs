---
title: VeniceHudConfigAsset
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VeniceHudConfigAsset](#constructor-0)**() |
| **[VeniceHudConfigAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VeniceHudConfigAsset](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ammoPickupSound" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "weaponPickupSound" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "newObjectiveSound" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "objectiveCompletedSound" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "objectiveUpdatedSound" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mpVictorySoundMec" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mpVictorySoundUs" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mpVictorySoundRu" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mpDefeatSoundMec" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mpDefeatSoundUs" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mpDefeatSoundRu" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "artilleryAiming" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "artilleryAimingOOA" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "mortarStrikeLocking" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "laserDesignatorLocked" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "laserDesignatorLocking" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "nametags" >}} | [UINametag](/vext/ref/fb/uinametag)[] |
| {{< prop "spawnScreenWeapons" >}} | [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata)[] |
| {{< prop "maxOrderIconDistance" >}} | float |
| {{< prop "innerNametagRadius" >}} | float |
| {{< prop "outerNametagRadius" >}} | float |
| {{< prop "criticalHealthThreshold" >}} | float |
| {{< prop "taggedVehicleCrosshair" >}} | [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) |
| {{< prop "minimap" >}} | [UIMinimapConfig](/vext/ref/fb/uiminimapconfig) |
| {{< prop "showSpawnPointsOnMinimap" >}} | bool |
| {{< prop "nametagHealthVisibleForAll" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VeniceHudConfigAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VeniceHudConfigAsset {#constructor-0}
> **VeniceHudConfigAsset**()

Creates a new [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset) frostbite instance.

### VeniceHudConfigAsset {#constructor-1}
> **VeniceHudConfigAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VeniceHudConfigAsset {#constructor-2}
> **VeniceHudConfigAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset). |

## Properties
### {{% prop-heading "ammoPickupSound" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "weaponPickupSound" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "newObjectiveSound" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "objectiveCompletedSound" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "objectiveUpdatedSound" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mpVictorySoundMec" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mpVictorySoundUs" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mpVictorySoundRu" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mpDefeatSoundMec" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mpDefeatSoundUs" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mpDefeatSoundRu" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "artilleryAiming" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "artilleryAimingOOA" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "mortarStrikeLocking" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "laserDesignatorLocked" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "laserDesignatorLocking" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "nametags" %}}
> **[UINametag](/vext/ref/fb/uinametag)**[]

### {{% prop-heading "spawnScreenWeapons" %}}
> **[SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata)**[]

### {{% prop-heading "maxOrderIconDistance" %}}
> **float**

### {{% prop-heading "innerNametagRadius" %}}
> **float**

### {{% prop-heading "outerNametagRadius" %}}
> **float**

### {{% prop-heading "criticalHealthThreshold" %}}
> **float**

### {{% prop-heading "taggedVehicleCrosshair" %}}
> **[UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair)**

### {{% prop-heading "minimap" %}}
> **[UIMinimapConfig](/vext/ref/fb/uiminimapconfig)**

### {{% prop-heading "showSpawnPointsOnMinimap" %}}
> **bool**

### {{% prop-heading "nametagHealthVisibleForAll" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VeniceHudConfigAsset](/vext/ref/fb/venicehudconfigasset) type.

