---
title: StaticModelEntityData
---

Inherits from 
[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[StaticModelEntityData](#constructor-0)**() |
| **[StaticModelEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StaticModelEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[StaticModelEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[StaticModelEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[StaticModelEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[StaticModelEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[StaticModelEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[StaticModelEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "partLinks" >}} | [PartLinkData](/vext/ref/fb/partlinkdata)[] |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "boneCount" >}} | int |
| {{< prop "basePoseTransforms" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |
| {{< prop "networkInfo" >}} | [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo) |
| {{< prop "physicsPartInfos" >}} | [PhysicsPartInfo](/vext/ref/fb/physicspartinfo)[] |
| {{< prop "excludeFromNearbyObjectDestruction" >}} | bool |
| {{< prop "animatePhysics" >}} | bool |
| {{< prop "visible" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StaticModelEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StaticModelEntityData {#constructor-0}
> **StaticModelEntityData**()

Creates a new [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata) frostbite instance.

### StaticModelEntityData {#constructor-1}
> **StaticModelEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StaticModelEntityData {#constructor-2}
> **StaticModelEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

### StaticModelEntityData {#constructor-3}
> **StaticModelEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

### StaticModelEntityData {#constructor-4}
> **StaticModelEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

### StaticModelEntityData {#constructor-5}
> **StaticModelEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

### StaticModelEntityData {#constructor-6}
> **StaticModelEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

### StaticModelEntityData {#constructor-7}
> **StaticModelEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

### StaticModelEntityData {#constructor-8}
> **StaticModelEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata). |

## Properties
### {{% prop-heading "partLinks" %}}
> **[PartLinkData](/vext/ref/fb/partlinkdata)**[]

### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "boneCount" %}}
> **int**

### {{% prop-heading "basePoseTransforms" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

### {{% prop-heading "networkInfo" %}}
> **[StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo)**

### {{% prop-heading "physicsPartInfos" %}}
> **[PhysicsPartInfo](/vext/ref/fb/physicspartinfo)**[]

### {{% prop-heading "excludeFromNearbyObjectDestruction" %}}
> **bool**

### {{% prop-heading "animatePhysics" %}}
> **bool**

### {{% prop-heading "visible" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata) type.

