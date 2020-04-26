---
title: ExplosionPackEntityData
---

Inherits from 
[MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ExplosionPackEntityData](#constructor-0)**() |
| **[ExplosionPackEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ExplosionPackEntityData](#constructor-2)**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata)) |
| **[ExplosionPackEntityData](#constructor-3)**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata)) |
| **[ExplosionPackEntityData](#constructor-4)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[ExplosionPackEntityData](#constructor-5)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ExplosionPackEntityData](#constructor-6)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ExplosionPackEntityData](#constructor-7)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ExplosionPackEntityData](#constructor-8)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ExplosionPackEntityData](#constructor-9)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ExplosionPackEntityData](#constructor-10)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "timeToLiveOnPlayerDeath" >}} | float |
| {{< prop "soldierDetonationData" >}} | [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) |
| {{< prop "vehicleDetonationActivationDelay" >}} | float |
| {{< prop "vehicleDetonationRadius" >}} | float |
| {{< prop "icon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "spottedTime" >}} | float |
| {{< prop "defuseRadius" >}} | float |
| {{< prop "health" >}} | float |
| {{< prop "hasRemoteDetonator" >}} | bool |
| {{< prop "isDestructible" >}} | bool |
| {{< prop "hasVehicleDetonation" >}} | bool |
| {{< prop "receivesExplosionDamage" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ExplosionPackEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ExplosionPackEntityData {#constructor-0}
> **ExplosionPackEntityData**()

Creates a new [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata) frostbite instance.

### ExplosionPackEntityData {#constructor-1}
> **ExplosionPackEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ExplosionPackEntityData {#constructor-2}
> **ExplosionPackEntityData**(other: [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata))

Casts an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-3}
> **ExplosionPackEntityData**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata))

Casts an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-4}
> **ExplosionPackEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-5}
> **ExplosionPackEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-6}
> **ExplosionPackEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-7}
> **ExplosionPackEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-8}
> **ExplosionPackEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-9}
> **ExplosionPackEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

### ExplosionPackEntityData {#constructor-10}
> **ExplosionPackEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata). |

## Properties
### {{% prop-heading "timeToLiveOnPlayerDeath" %}}
> **float**

### {{% prop-heading "soldierDetonationData" %}}
> **[SoldierDetonationData](/vext/ref/fb/soldierdetonationdata)**

### {{% prop-heading "vehicleDetonationActivationDelay" %}}
> **float**

### {{% prop-heading "vehicleDetonationRadius" %}}
> **float**

### {{% prop-heading "icon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "spottedTime" %}}
> **float**

### {{% prop-heading "defuseRadius" %}}
> **float**

### {{% prop-heading "health" %}}
> **float**

### {{% prop-heading "hasRemoteDetonator" %}}
> **bool**

### {{% prop-heading "isDestructible" %}}
> **bool**

### {{% prop-heading "hasVehicleDetonation" %}}
> **bool**

### {{% prop-heading "receivesExplosionDamage" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata) type.

