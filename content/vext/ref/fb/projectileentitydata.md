---
title: ProjectileEntityData
---

Inherits from [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary

### Constructors

|  |
| --- |
| **[ProjectileEntityData](#constructor-0)**() |
| **[ProjectileEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ProjectileEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[ProjectileEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ProjectileEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ProjectileEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ProjectileEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ProjectileEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ProjectileEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "visualConvergeDistance" >}} | float |
| {{< prop "initialSpeed" >}} | float |
| {{< prop "timeToLive" >}} | float |
| {{< prop "maxCount" >}} | int |
| {{< prop "initMeshHideTime" >}} | float |
| {{< prop "materialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "hitReactionWeaponType" >}} | [AntHitReactionWeaponType](/vext/ref/fb/anthitreactionweapontype) |
| {{< prop "explosion" >}} | [ExplosionEntityData](/vext/ref/fb/explosionentitydata) \| nil |
| {{< prop "suppressionData" >}} | [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata) \| nil |
| {{< prop "ammunitionType" >}} | string |
| {{< prop "serverProjectileDisabled" >}} | bool |
| {{< prop "detonateOnTimeout" >}} | bool |
| {{< prop "suppressOwnerVehicleDamage" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ProjectileEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ProjectileEntityData {#constructor-0}

> **ProjectileEntityData**()

Creates a new [ProjectileEntityData](/vext/ref/fb/projectileentitydata) frostbite instance.

### ProjectileEntityData {#constructor-1}

> **ProjectileEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ProjectileEntityData](/vext/ref/fb/projectileentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ProjectileEntityData {#constructor-2}

> **ProjectileEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

### ProjectileEntityData {#constructor-3}

> **ProjectileEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

### ProjectileEntityData {#constructor-4}

> **ProjectileEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

### ProjectileEntityData {#constructor-5}

> **ProjectileEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

### ProjectileEntityData {#constructor-6}

> **ProjectileEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

### ProjectileEntityData {#constructor-7}

> **ProjectileEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

### ProjectileEntityData {#constructor-8}

> **ProjectileEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ProjectileEntityData](/vext/ref/fb/projectileentitydata). |

## Properties

### {{% prop-heading "visualConvergeDistance" %}}

> **float**

### {{% prop-heading "initialSpeed" %}}

> **float**

### {{% prop-heading "timeToLive" %}}

> **float**

### {{% prop-heading "maxCount" %}}

> **int**

### {{% prop-heading "initMeshHideTime" %}}

> **float**

### {{% prop-heading "materialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "hitReactionWeaponType" %}}

> **[AntHitReactionWeaponType](/vext/ref/fb/anthitreactionweapontype)**

### {{% prop-heading "explosion" %}}

> **[ExplosionEntityData](/vext/ref/fb/explosionentitydata)** \| **nil**

### {{% prop-heading "suppressionData" %}}

> **[WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata)** \| **nil**

### {{% prop-heading "ammunitionType" %}}

> **string**

### {{% prop-heading "serverProjectileDisabled" %}}

> **bool**

### {{% prop-heading "detonateOnTimeout" %}}

> **bool**

### {{% prop-heading "suppressOwnerVehicleDamage" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ProjectileEntityData](/vext/ref/fb/projectileentitydata) type.

