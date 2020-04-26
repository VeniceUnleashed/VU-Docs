---
title: VehicleProjectileEntityData
---

Inherits from 
[ProjectileEntityData](/vext/ref/fb/projectileentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleProjectileEntityData](#constructor-0)**() |
| **[VehicleProjectileEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleProjectileEntityData](#constructor-2)**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata)) |
| **[VehicleProjectileEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[VehicleProjectileEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[VehicleProjectileEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[VehicleProjectileEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VehicleProjectileEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleProjectileEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleProjectileEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vehicle" >}} | [VehicleBlueprint](/vext/ref/fb/vehicleblueprint) \| nil |
| {{< prop "enterDelay" >}} | float |
| {{< prop "noVehicleCollisionTime" >}} | float |
| {{< prop "alignWithGroundRayLength" >}} | float |
| {{< prop "autoEnter" >}} | bool |
| {{< prop "alignWithGround" >}} | bool |
| {{< prop "checkGroundWhenSpawned" >}} | bool |
| {{< prop "deployInsideNeutralCombatAreaOnly" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleProjectileEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleProjectileEntityData {#constructor-0}
> **VehicleProjectileEntityData**()

Creates a new [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata) frostbite instance.

### VehicleProjectileEntityData {#constructor-1}
> **VehicleProjectileEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleProjectileEntityData {#constructor-2}
> **VehicleProjectileEntityData**(other: [ProjectileEntityData](/vext/ref/fb/projectileentitydata))

Casts an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-3}
> **VehicleProjectileEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-4}
> **VehicleProjectileEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-5}
> **VehicleProjectileEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-6}
> **VehicleProjectileEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-7}
> **VehicleProjectileEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-8}
> **VehicleProjectileEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

### VehicleProjectileEntityData {#constructor-9}
> **VehicleProjectileEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata). |

## Properties
### {{% prop-heading "vehicle" %}}
> **[VehicleBlueprint](/vext/ref/fb/vehicleblueprint)** | **nil**

### {{% prop-heading "enterDelay" %}}
> **float**

### {{% prop-heading "noVehicleCollisionTime" %}}
> **float**

### {{% prop-heading "alignWithGroundRayLength" %}}
> **float**

### {{% prop-heading "autoEnter" %}}
> **bool**

### {{% prop-heading "alignWithGround" %}}
> **bool**

### {{% prop-heading "checkGroundWhenSpawned" %}}
> **bool**

### {{% prop-heading "deployInsideNeutralCombatAreaOnly" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata) type.

