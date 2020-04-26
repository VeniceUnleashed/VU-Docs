---
title: GrenadeEntityData
---

Inherits from [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)

## Summary

### Constructors

|  |
| --- |
| **[GrenadeEntityData](#constructor-0)**() |
| **[GrenadeEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GrenadeEntityData](#constructor-2)**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)) |
| **[GrenadeEntityData](#constructor-3)**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata)) |
| **[GrenadeEntityData](#constructor-4)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[GrenadeEntityData](#constructor-5)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[GrenadeEntityData](#constructor-6)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[GrenadeEntityData](#constructor-7)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[GrenadeEntityData](#constructor-8)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[GrenadeEntityData](#constructor-9)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[GrenadeEntityData](#constructor-10)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "collisionSpeedMultiplier" >}} | float |
| {{< prop "gravity" >}} | float |
| {{< prop "grenadeType" >}} | [GrenadeType](/vext/ref/fb/grenadetype) |
| {{< prop "minBounceSpeed" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GrenadeEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GrenadeEntityData {#constructor-0}

> **GrenadeEntityData**()

Creates a new [GrenadeEntityData](/vext/ref/fb/grenadeentitydata) frostbite instance.

### GrenadeEntityData {#constructor-1}

> **GrenadeEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GrenadeEntityData](/vext/ref/fb/grenadeentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GrenadeEntityData {#constructor-2}

> **GrenadeEntityData**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata))

Casts an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-3}

> **GrenadeEntityData**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata))

Casts an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-4}

> **GrenadeEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-5}

> **GrenadeEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-6}

> **GrenadeEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-7}

> **GrenadeEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-8}

> **GrenadeEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-9}

> **GrenadeEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

### GrenadeEntityData {#constructor-10}

> **GrenadeEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata). |

## Properties

### {{% prop-heading "collisionSpeedMultiplier" %}}

> **float**

### {{% prop-heading "gravity" %}}

> **float**

### {{% prop-heading "grenadeType" %}}

> **[GrenadeType](/vext/ref/fb/grenadetype)**

### {{% prop-heading "minBounceSpeed" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GrenadeEntityData](/vext/ref/fb/grenadeentitydata) type.

