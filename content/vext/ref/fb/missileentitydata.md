---
title: MissileEntityData
---

Inherits from [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)

## Summary

### Constructors

|  |
| --- |
| **[MissileEntityData](#constructor-0)**() |
| **[MissileEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MissileEntityData](#constructor-2)**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)) |
| **[MissileEntityData](#constructor-3)**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata)) |
| **[MissileEntityData](#constructor-4)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[MissileEntityData](#constructor-5)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[MissileEntityData](#constructor-6)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[MissileEntityData](#constructor-7)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MissileEntityData](#constructor-8)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MissileEntityData](#constructor-9)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MissileEntityData](#constructor-10)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "gravity" >}} | float |
| {{< prop "engineEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "dudExplosion" >}} | [ExplosionEntityData](/vext/ref/fb/explosionentitydata) \| nil |
| {{< prop "flyBySound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "engineStrength" >}} | float |
| {{< prop "maxSpeed" >}} | float |
| {{< prop "engineTimeToIgnition" >}} | float |
| {{< prop "engineTimeToLive" >}} | float |
| {{< prop "timeToActivateGuidingSystem" >}} | float |
| {{< prop "timeToArm" >}} | float |
| {{< prop "maxTurnAngle" >}} | float |
| {{< prop "drag" >}} | float |
| {{< prop "nearTargetDetonation" >}} | [NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata) |
| {{< prop "defaultTeam" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "flyBySoundRadius" >}} | float |
| {{< prop "flyBySoundSpeed" >}} | float |
| {{< prop "impactImpulse" >}} | float |
| {{< prop "damage" >}} | float |
| {{< prop "unguidedData" >}} | [MissileUnguidedData](/vext/ref/fb/missileunguideddata) |
| {{< prop "warnTarget" >}} | [WarnTarget](/vext/ref/fb/warntarget) |
| {{< prop "lockableInfo" >}} | [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata) |
| {{< prop "lockingController" >}} | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) \| nil |
| {{< prop "warnOnPointingMissile" >}} | bool |
| {{< prop "applyGravityWhenGuided" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MissileEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MissileEntityData {#constructor-0}

> **MissileEntityData**()

Creates a new [MissileEntityData](/vext/ref/fb/missileentitydata) frostbite instance.

### MissileEntityData {#constructor-1}

> **MissileEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MissileEntityData](/vext/ref/fb/missileentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MissileEntityData {#constructor-2}

> **MissileEntityData**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata))

Casts an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-3}

> **MissileEntityData**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata))

Casts an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-4}

> **MissileEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-5}

> **MissileEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-6}

> **MissileEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-7}

> **MissileEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-8}

> **MissileEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-9}

> **MissileEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

### MissileEntityData {#constructor-10}

> **MissileEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MissileEntityData](/vext/ref/fb/missileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MissileEntityData](/vext/ref/fb/missileentitydata). |

## Properties

### {{% prop-heading "gravity" %}}

> **float**

### {{% prop-heading "engineEffect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "dudExplosion" %}}

> **[ExplosionEntityData](/vext/ref/fb/explosionentitydata)** \| **nil**

### {{% prop-heading "flyBySound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "engineStrength" %}}

> **float**

### {{% prop-heading "maxSpeed" %}}

> **float**

### {{% prop-heading "engineTimeToIgnition" %}}

> **float**

### {{% prop-heading "engineTimeToLive" %}}

> **float**

### {{% prop-heading "timeToActivateGuidingSystem" %}}

> **float**

### {{% prop-heading "timeToArm" %}}

> **float**

### {{% prop-heading "maxTurnAngle" %}}

> **float**

### {{% prop-heading "drag" %}}

> **float**

### {{% prop-heading "nearTargetDetonation" %}}

> **[NearTargetDetonationData](/vext/ref/fb/neartargetdetonationdata)**

### {{% prop-heading "defaultTeam" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "flyBySoundRadius" %}}

> **float**

### {{% prop-heading "flyBySoundSpeed" %}}

> **float**

### {{% prop-heading "impactImpulse" %}}

> **float**

### {{% prop-heading "damage" %}}

> **float**

### {{% prop-heading "unguidedData" %}}

> **[MissileUnguidedData](/vext/ref/fb/missileunguideddata)**

### {{% prop-heading "warnTarget" %}}

> **[WarnTarget](/vext/ref/fb/warntarget)**

### {{% prop-heading "lockableInfo" %}}

> **[MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata)**

### {{% prop-heading "lockingController" %}}

> **[LockingControllerData](/vext/ref/fb/lockingcontrollerdata)** \| **nil**

### {{% prop-heading "warnOnPointingMissile" %}}

> **bool**

### {{% prop-heading "applyGravityWhenGuided" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MissileEntityData](/vext/ref/fb/missileentitydata) type.

