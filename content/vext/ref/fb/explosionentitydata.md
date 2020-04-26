---
title: ExplosionEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ExplosionEntityData](#constructor-0)**() |
| **[ExplosionEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ExplosionEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ExplosionEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ExplosionEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ExplosionEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ExplosionEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ExplosionEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "detonationEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "blastImpulse" >}} | float |
| {{< prop "maskVolume" >}} | [MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata) \| nil |
| {{< prop "destructionMaskVolume" >}} | [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata) \| nil |
| {{< prop "materialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "damageIndicationType" >}} | [DamageIndicationType](/vext/ref/fb/damageindicationtype) |
| {{< prop "empTime" >}} | float |
| {{< prop "maxOcclusionRaycastRadius" >}} | float |
| {{< prop "innerBlastRadius" >}} | float |
| {{< prop "blastDamage" >}} | float |
| {{< prop "blastRadius" >}} | float |
| {{< prop "shockwaveImpulse" >}} | float |
| {{< prop "spawnDelay" >}} | float |
| {{< prop "shockwaveDamage" >}} | float |
| {{< prop "shockwaveRadius" >}} | float |
| {{< prop "cameraShockwaveRadius" >}} | float |
| {{< prop "shockwaveTime" >}} | float |
| {{< prop "disableOcclusion" >}} | bool |
| {{< prop "disableStaticEntityOcclusion" >}} | bool |
| {{< prop "useEntityTransformForDetonationEffect" >}} | bool |
| {{< prop "hasStunEffect" >}} | bool |
| {{< prop "triggerImpairedHearing" >}} | bool |
| {{< prop "detonateOnce" >}} | bool |
| {{< prop "showOnMinimap" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ExplosionEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ExplosionEntityData {#constructor-0}
> **ExplosionEntityData**()

Creates a new [ExplosionEntityData](/vext/ref/fb/explosionentitydata) frostbite instance.

### ExplosionEntityData {#constructor-1}
> **ExplosionEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ExplosionEntityData](/vext/ref/fb/explosionentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ExplosionEntityData {#constructor-2}
> **ExplosionEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). |

### ExplosionEntityData {#constructor-3}
> **ExplosionEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). |

### ExplosionEntityData {#constructor-4}
> **ExplosionEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). |

### ExplosionEntityData {#constructor-5}
> **ExplosionEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). |

### ExplosionEntityData {#constructor-6}
> **ExplosionEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). |

### ExplosionEntityData {#constructor-7}
> **ExplosionEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ExplosionEntityData](/vext/ref/fb/explosionentitydata). |

## Properties
### {{% prop-heading "detonationEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "blastImpulse" %}}
> **float**

### {{% prop-heading "maskVolume" %}}
> **[MaskVolumeEntityData](/vext/ref/fb/maskvolumeentitydata)** | **nil**

### {{% prop-heading "destructionMaskVolume" %}}
> **[DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata)** | **nil**

### {{% prop-heading "materialPair" %}}
> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** | **nil**

### {{% prop-heading "damageIndicationType" %}}
> **[DamageIndicationType](/vext/ref/fb/damageindicationtype)**

### {{% prop-heading "empTime" %}}
> **float**

### {{% prop-heading "maxOcclusionRaycastRadius" %}}
> **float**

### {{% prop-heading "innerBlastRadius" %}}
> **float**

### {{% prop-heading "blastDamage" %}}
> **float**

### {{% prop-heading "blastRadius" %}}
> **float**

### {{% prop-heading "shockwaveImpulse" %}}
> **float**

### {{% prop-heading "spawnDelay" %}}
> **float**

### {{% prop-heading "shockwaveDamage" %}}
> **float**

### {{% prop-heading "shockwaveRadius" %}}
> **float**

### {{% prop-heading "cameraShockwaveRadius" %}}
> **float**

### {{% prop-heading "shockwaveTime" %}}
> **float**

### {{% prop-heading "disableOcclusion" %}}
> **bool**

### {{% prop-heading "disableStaticEntityOcclusion" %}}
> **bool**

### {{% prop-heading "useEntityTransformForDetonationEffect" %}}
> **bool**

### {{% prop-heading "hasStunEffect" %}}
> **bool**

### {{% prop-heading "triggerImpairedHearing" %}}
> **bool**

### {{% prop-heading "detonateOnce" %}}
> **bool**

### {{% prop-heading "showOnMinimap" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ExplosionEntityData](/vext/ref/fb/explosionentitydata) type.

