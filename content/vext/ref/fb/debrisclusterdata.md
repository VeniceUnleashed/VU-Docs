---
title: DebrisClusterData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[DebrisClusterData](#constructor-0)**() |
| **[DebrisClusterData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DebrisClusterData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[DebrisClusterData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DebrisClusterData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DebrisClusterData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DebrisClusterData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DebrisClusterData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pushVelocityMul" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "pushVelocityRndMul" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "initRotationRndMul" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "clusterLifetime" >}} | float |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "compositePartCount" >}} | int |
| {{< prop "maxActivePartsCount" >}} | int |
| {{< prop "partHierarchy" >}} | [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata)[] |
| {{< prop "activationPushForceMul" >}} | float |
| {{< prop "projectileForceTransferMul" >}} | float |
| {{< prop "physicsData" >}} | [PhysicsEntityData](/vext/ref/fb/physicsentitydata) \| nil |
| {{< prop "explosion" >}} | [GameEntityData](/vext/ref/fb/gameentitydata) \| nil |
| {{< prop "activationEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "effect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "onPartCollisionSpeedThreshold" >}} | float |
| {{< prop "partialDestruction" >}} | bool |
| {{< prop "clientSideOnly" >}} | bool |
| {{< prop "onPartCollisionEnable" >}} | bool |
| {{< prop "noCollision" >}} | bool |
| {{< prop "killPartsOnCollision" >}} | bool |
| {{< prop "deactivatePartsOnSleep" >}} | bool |
| {{< prop "activateOnSpawn" >}} | bool |
| {{< prop "inEffectWorldOnly" >}} | bool |
| {{< prop "spawnExplosionOnFirstImpactOnly" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebrisClusterData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebrisClusterData {#constructor-0}

> **DebrisClusterData**()

Creates a new [DebrisClusterData](/vext/ref/fb/debrisclusterdata) frostbite instance.

### DebrisClusterData {#constructor-1}

> **DebrisClusterData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebrisClusterData](/vext/ref/fb/debrisclusterdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DebrisClusterData {#constructor-2}

> **DebrisClusterData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). |

### DebrisClusterData {#constructor-3}

> **DebrisClusterData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). |

### DebrisClusterData {#constructor-4}

> **DebrisClusterData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). |

### DebrisClusterData {#constructor-5}

> **DebrisClusterData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). |

### DebrisClusterData {#constructor-6}

> **DebrisClusterData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). |

### DebrisClusterData {#constructor-7}

> **DebrisClusterData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DebrisClusterData](/vext/ref/fb/debrisclusterdata). |

## Properties

### {{% prop-heading "pushVelocityMul" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "pushVelocityRndMul" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "initRotationRndMul" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "clusterLifetime" %}}

> **float**

### {{% prop-heading "mesh" %}}

> **[MeshAsset](/vext/ref/fb/meshasset)** \| **nil**

### {{% prop-heading "compositePartCount" %}}

> **int**

### {{% prop-heading "maxActivePartsCount" %}}

> **int**

### {{% prop-heading "partHierarchy" %}}

> **[DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata)**[]

### {{% prop-heading "activationPushForceMul" %}}

> **float**

### {{% prop-heading "projectileForceTransferMul" %}}

> **float**

### {{% prop-heading "physicsData" %}}

> **[PhysicsEntityData](/vext/ref/fb/physicsentitydata)** \| **nil**

### {{% prop-heading "explosion" %}}

> **[GameEntityData](/vext/ref/fb/gameentitydata)** \| **nil**

### {{% prop-heading "activationEffect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "effect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "onPartCollisionSpeedThreshold" %}}

> **float**

### {{% prop-heading "partialDestruction" %}}

> **bool**

### {{% prop-heading "clientSideOnly" %}}

> **bool**

### {{% prop-heading "onPartCollisionEnable" %}}

> **bool**

### {{% prop-heading "noCollision" %}}

> **bool**

### {{% prop-heading "killPartsOnCollision" %}}

> **bool**

### {{% prop-heading "deactivatePartsOnSleep" %}}

> **bool**

### {{% prop-heading "activateOnSpawn" %}}

> **bool**

### {{% prop-heading "inEffectWorldOnly" %}}

> **bool**

### {{% prop-heading "spawnExplosionOnFirstImpactOnly" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebrisClusterData](/vext/ref/fb/debrisclusterdata) type.

