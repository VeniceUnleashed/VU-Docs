---
title: BulletEntityData
---

Inherits from [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)

## Summary

### Constructors

|  |
| --- |
| **[BulletEntityData](#constructor-0)**() |
| **[BulletEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BulletEntityData](#constructor-2)**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)) |
| **[BulletEntityData](#constructor-3)**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata)) |
| **[BulletEntityData](#constructor-4)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[BulletEntityData](#constructor-5)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[BulletEntityData](#constructor-6)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[BulletEntityData](#constructor-7)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[BulletEntityData](#constructor-8)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[BulletEntityData](#constructor-9)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[BulletEntityData](#constructor-10)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "stamina" >}} | float |
| {{< prop "flyBySound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "dudExplosion" >}} | [ExplosionEntityData](/vext/ref/fb/explosionentitydata) \| nil |
| {{< prop "gravity" >}} | float |
| {{< prop "impactImpulse" >}} | float |
| {{< prop "detonationTimeVariation" >}} | float |
| {{< prop "vehicleDetonationRadius" >}} | float |
| {{< prop "vehicleDetonationActivationDelay" >}} | float |
| {{< prop "flyBySoundRadius" >}} | float |
| {{< prop "flyBySoundSpeed" >}} | float |
| {{< prop "firstFrameTravelDistance" >}} | float |
| {{< prop "distributeDamageOverTime" >}} | float |
| {{< prop "startDamage" >}} | float |
| {{< prop "endDamage" >}} | float |
| {{< prop "damageFalloffStartDistance" >}} | float |
| {{< prop "damageFalloffEndDistance" >}} | float |
| {{< prop "timeToArmExplosion" >}} | float |
| {{< prop "hasVehicleDetonation" >}} | bool |
| {{< prop "instantHit" >}} | bool |
| {{< prop "stopTrailEffectOnUnspawn" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BulletEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BulletEntityData {#constructor-0}

> **BulletEntityData**()

Creates a new [BulletEntityData](/vext/ref/fb/bulletentitydata) frostbite instance.

### BulletEntityData {#constructor-1}

> **BulletEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BulletEntityData](/vext/ref/fb/bulletentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BulletEntityData {#constructor-2}

> **BulletEntityData**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata))

Casts an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-3}

> **BulletEntityData**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata))

Casts an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-4}

> **BulletEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-5}

> **BulletEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-6}

> **BulletEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-7}

> **BulletEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-8}

> **BulletEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-9}

> **BulletEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

### BulletEntityData {#constructor-10}

> **BulletEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BulletEntityData](/vext/ref/fb/bulletentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BulletEntityData](/vext/ref/fb/bulletentitydata). |

## Properties

### {{% prop-heading "stamina" %}}

> **float**

### {{% prop-heading "flyBySound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "dudExplosion" %}}

> **[ExplosionEntityData](/vext/ref/fb/explosionentitydata)** \| **nil**

### {{% prop-heading "gravity" %}}

> **float**

### {{% prop-heading "impactImpulse" %}}

> **float**

### {{% prop-heading "detonationTimeVariation" %}}

> **float**

### {{% prop-heading "vehicleDetonationRadius" %}}

> **float**

### {{% prop-heading "vehicleDetonationActivationDelay" %}}

> **float**

### {{% prop-heading "flyBySoundRadius" %}}

> **float**

### {{% prop-heading "flyBySoundSpeed" %}}

> **float**

### {{% prop-heading "firstFrameTravelDistance" %}}

> **float**

### {{% prop-heading "distributeDamageOverTime" %}}

> **float**

### {{% prop-heading "startDamage" %}}

> **float**

### {{% prop-heading "endDamage" %}}

> **float**

### {{% prop-heading "damageFalloffStartDistance" %}}

> **float**

### {{% prop-heading "damageFalloffEndDistance" %}}

> **float**

### {{% prop-heading "timeToArmExplosion" %}}

> **float**

### {{% prop-heading "hasVehicleDetonation" %}}

> **bool**

### {{% prop-heading "instantHit" %}}

> **bool**

### {{% prop-heading "stopTrailEffectOnUnspawn" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BulletEntityData](/vext/ref/fb/bulletentitydata) type.

