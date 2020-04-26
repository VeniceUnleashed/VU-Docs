---
title: MeshProjectileEntityData
---

Inherits from 
[ProjectileEntityData](/vext/ref/fb/projectileentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[MeshProjectileEntityData](#constructor-0)**() |
| **[MeshProjectileEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshProjectileEntityData](#constructor-2)**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata)) |
| **[MeshProjectileEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[MeshProjectileEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[MeshProjectileEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[MeshProjectileEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MeshProjectileEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MeshProjectileEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MeshProjectileEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "initialAngularVelocity" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "trailEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "maxAttachableInclination" >}} | float |
| {{< prop "extraDamping" >}} | bool |
| {{< prop "isAttachable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshProjectileEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshProjectileEntityData {#constructor-0}
> **MeshProjectileEntityData**()

Creates a new [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) frostbite instance.

### MeshProjectileEntityData {#constructor-1}
> **MeshProjectileEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshProjectileEntityData {#constructor-2}
> **MeshProjectileEntityData**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata))

Casts an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-3}
> **MeshProjectileEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-4}
> **MeshProjectileEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-5}
> **MeshProjectileEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-6}
> **MeshProjectileEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-7}
> **MeshProjectileEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-8}
> **MeshProjectileEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

### MeshProjectileEntityData {#constructor-9}
> **MeshProjectileEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata). |

## Properties
### {{% prop-heading "initialAngularVelocity" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "trailEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "maxAttachableInclination" %}}
> **float**

### {{% prop-heading "extraDamping" %}}
> **bool**

### {{% prop-heading "isAttachable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) type.

