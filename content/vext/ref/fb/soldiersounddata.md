---
title: SoldierSoundData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierSoundData](#constructor-0)**() |
| **[SoldierSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierSoundData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "movement" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "death" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "bulletImpact" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "healing" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "breathControl" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "hitIndicator" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "pickupKit" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "pickupAmmo" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "sprintTimeForRecovery" >}} | float |
| {{< prop "movementThreshold" >}} | float |
| {{< prop "minHealSoundTime" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierSoundData {#constructor-0}
> **SoldierSoundData**()

Creates a new [SoldierSoundData](/vext/ref/fb/soldiersounddata) frostbite instance.

### SoldierSoundData {#constructor-1}
> **SoldierSoundData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierSoundData](/vext/ref/fb/soldiersounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierSoundData {#constructor-2}
> **SoldierSoundData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSoundData](/vext/ref/fb/soldiersounddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierSoundData](/vext/ref/fb/soldiersounddata). |

## Properties
### {{% prop-heading "movement" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "death" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "bulletImpact" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "healing" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "breathControl" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "hitIndicator" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "pickupKit" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "pickupAmmo" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "sprintTimeForRecovery" %}}
> **float**

### {{% prop-heading "movementThreshold" %}}
> **float**

### {{% prop-heading "minHealSoundTime" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierSoundData](/vext/ref/fb/soldiersounddata) type.

