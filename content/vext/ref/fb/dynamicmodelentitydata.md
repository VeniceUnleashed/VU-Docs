---
title: DynamicModelEntityData
---

Inherits from 
[DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[DynamicModelEntityData](#constructor-0)**() |
| **[DynamicModelEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DynamicModelEntityData](#constructor-2)**(other: [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata)) |
| **[DynamicModelEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[DynamicModelEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[DynamicModelEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DynamicModelEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DynamicModelEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DynamicModelEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DynamicModelEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "part" >}} | [PartComponentData](/vext/ref/fb/partcomponentdata) \| nil |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "noCollision" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DynamicModelEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DynamicModelEntityData {#constructor-0}
> **DynamicModelEntityData**()

Creates a new [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata) frostbite instance.

### DynamicModelEntityData {#constructor-1}
> **DynamicModelEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DynamicModelEntityData {#constructor-2}
> **DynamicModelEntityData**(other: [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata))

Casts an instance of type [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-3}
> **DynamicModelEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-4}
> **DynamicModelEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-5}
> **DynamicModelEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-6}
> **DynamicModelEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-7}
> **DynamicModelEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-8}
> **DynamicModelEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

### DynamicModelEntityData {#constructor-9}
> **DynamicModelEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata). |

## Properties
### {{% prop-heading "part" %}}
> **[PartComponentData](/vext/ref/fb/partcomponentdata)** | **nil**

### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "noCollision" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata) type.

